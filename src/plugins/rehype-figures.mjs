// Sätteri (Astro's Markdown processor) hast plugin: turns a Markdown paragraph that holds only images into captioned figures.
//   ![alt](path "caption")            a figure in the text column
//   ![alt](path "right: caption")     floated into the right-hand column beside the text ("left:" works too)
//   ![alt](path "wide: caption")      full width of the page column
//   ![alt](path "full: caption")    as wide as the page allows, shown at its full height (a poster)
//   ![alt](path "tallspan: caption") like tall:, but sized so its top lines up with the page title and its bottom with the figure two blocks down (set in CSS, rocketry payload page)
//   ![alt](path "tall: caption")      a very tall, narrow image (a rocket): shown large along the right edge of the page on wide screens
//   Several images in one paragraph   shown side by side in one row
//   ![alt](path "w30: caption")     a figure at a set width, in rem (right30: or left30: floats it at that width)
//   a lone image with even30: is shown at that height (30rem)
//   ![alt](path "even: caption")      in a row, the row's images are all shown at the same height (evenlg:, evenxl:, or even14: for 14rem, set the height)
// The word before the colon is a layout hint; the rest is the caption (the visual description shown under the image).
import { defineHastPlugin } from 'satteri';

const HINTS = ['right', 'left', 'wide', 'small', 'tall', 'tallspan', 'even', 'evenlg', 'evenxl', 'full'];

const isImg = (n) => n.type === 'element' && n.tagName === 'img';
const isSpace = (n) => n.type === 'text' && !String(n.value).trim();

function parseTitle(title = '') {
  const m = /^(\w+):\s*([\s\S]*)$/.exec(title);
  if (m && (HINTS.includes(m[1].toLowerCase()) || /^even\d+$/i.test(m[1]))) return { hint: m[1].toLowerCase(), caption: m[2].trim() };
  const w = m && /^(right|left|w)(\d+(?:\.\d+)?)$/i.exec(m[1]);
  if (w) return { hint: w[1].toLowerCase() === 'w' ? '' : w[1].toLowerCase(), width: w[2], caption: m[2].trim() };
  return { hint: '', caption: String(title).trim() };
}

function figure(img) {
  const { title, ...props } = img.properties ?? {};
  const { hint, caption, width } = parseTitle(title);
  const children = [{ type: 'element', tagName: 'img', properties: { ...props }, children: [] }];
  if (caption) children.push({ type: 'element', tagName: 'figcaption', properties: {}, children: [{ type: 'text', value: caption }] });
  return { type: 'element', tagName: 'figure', properties: { className: ['fig', ...(hint === 'tallspan' ? ['tall', 'tallspan'] : hint ? [hint] : [])], ...(width ? { style: `width:${width}rem;max-width:100%` } : {}) }, children };
}

export default defineHastPlugin({
  name: 'figures',
  element: {
    filter: ['p'],
    visit(node, ctx) {
      const kids = node.children.filter((c) => !isSpace(c));
      if (kids.length === 0 || !kids.every(isImg)) return;
      if (kids.length === 1) {
        const one = figure(kids[0]);
        const n = one.properties.className.map((c) => /^even(\d+)$/.exec(c)).find(Boolean);
        // a lone image with an evenN: hint is shown at that height (rem), like an image in an even row
        ctx.replaceNode(node, n ? { type: 'element', tagName: 'div', properties: { className: ['fig-row', 'even'], style: `--even-h:${n[1]}rem` }, children: [one] } : one);
      } else {
        const figs = kids.map(figure);
        const even = figs.some((f) => f.properties.className.includes('even'));
        const large = figs.some((f) => f.properties.className.includes('evenlg'));
        const xl = figs.some((f) => f.properties.className.includes('evenxl'));
        const num = figs.map((f) => f.properties.className.map((c) => /^even(\d+)$/.exec(c)).find(Boolean)).find(Boolean);
        const props = { className: ['fig-row', ...(even || large || xl || num ? ['even'] : []), ...(large ? ['even-lg'] : []), ...(xl ? ['even-xl'] : [])] };
        if (num) props.style = `--even-h:${num[1]}rem`;
        ctx.replaceNode(node, { type: 'element', tagName: 'div', properties: props, children: figs });
      }
    },
  },
});
