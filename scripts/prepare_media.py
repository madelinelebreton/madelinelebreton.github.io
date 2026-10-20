#!/usr/bin/env python3
"""Convert original photos, GIFs and video frames into web-ready JPEGs.

Usage:
    python3 scripts/prepare_media.py --src /path/to/originals

Reads scripts/media-manifest.json and writes into src/assets/.
Needs: pip install pillow pillow-heif   (and ffmpeg for video frames)
Astro then creates the responsive WebP sizes at build time, so keep
these files at a generous size (they are not shipped as-is).
"""
import argparse, json, os, subprocess, sys, tempfile
from pathlib import Path
from PIL import Image, ImageOps, ImageSequence

try:
    import pillow_heif
    pillow_heif.register_heif_opener()
except ImportError:
    print("note: pillow-heif not installed; HEIC files will fail", file=sys.stderr)

ROOT = Path(__file__).resolve().parent.parent


def find(src_dir: Path, name: str) -> Path:
    """Match 'name' exactly, or as the tail of a hash-prefixed upload name."""
    for p in src_dir.rglob("*"):
        if p.is_file() and (p.name == name or p.name.endswith("-" + name)):
            return p
    raise FileNotFoundError(f"{name} not found under {src_dir}")


def load(path: Path, ops: dict) -> Image.Image:
    if path.suffix.lower() in {".mov", ".mp4", ".m4v"}:
        t = ops.get("video_t", 0)
        with tempfile.TemporaryDirectory() as tmp:
            out = Path(tmp) / "f.png"
            subprocess.run(["ffmpeg", "-v", "error", "-y", "-ss", str(t), "-i", str(path),
                            "-frames:v", "1", str(out)], check=True)
            im = Image.open(out); im.load()
            return im
    im = Image.open(path)
    if "frame" in ops:
        im.seek(ops["frame"])
    im = ImageOps.exif_transpose(im)
    im.load()
    return im


def flatten(im: Image.Image) -> Image.Image:
    if im.mode in ("RGBA", "LA", "P"):
        im = im.convert("RGBA")
        bg = Image.new("RGB", im.size, (255, 255, 255))
        bg.paste(im, mask=im.split()[-1])
        return bg
    return im.convert("RGB")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--src", required=True, help="folder holding your original files")
    args = ap.parse_args()
    src_dir = Path(args.src)
    manifest = json.loads((ROOT / "scripts" / "media-manifest.json").read_text())
    for item in manifest["images"]:
        ops = item.get("ops", {})
        try:
            im = flatten(load(find(src_dir, item["src"]), ops))
        except Exception as e:
            print(f"SKIP {item['out']}: {e}")
            continue
        if "crop" in ops:
            im = im.crop(tuple(ops["crop"]))
        if "scale" in ops:
            im = im.resize((im.width * ops["scale"], im.height * ops["scale"]), Image.LANCZOS)
        if "max" in ops:
            im.thumbnail((ops["max"], ops["max"]), Image.LANCZOS)
        else:
            im.thumbnail((2400, 2400), Image.LANCZOS)
        out = ROOT / "src" / "assets" / item["out"]
        out.parent.mkdir(parents=True, exist_ok=True)
        im.save(out, "JPEG", quality=88, optimize=True, progressive=True)
        print(f"ok   {item['out']}  {im.width}x{im.height}")


if __name__ == "__main__":
    main()
