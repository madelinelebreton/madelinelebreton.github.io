# Madeline LeBreton: portfolio

Source for https://madelinelebreton.github.io. Built with [Astro](https://astro.build), plain CSS and Markdown project pages.

**Status: Phase 2 prototype.** Not yet deployed. Nothing here has been pushed or published.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies (Node 22.22 or newer) |
| `npm run dev` | Local dev server at http://localhost:4321 |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run media -- --src <folder>` | Convert original photos (HEIC, GIF, video) into web JPEGs in `src/assets/` (see `scripts/media-manifest.json`) |

## Add a project

1. Put images in `src/assets/projects/<slug>/`.
2. Copy any file in `src/content/projects/` to `<slug>.md` and edit the front matter. Fields are defined in `src/content.config.ts`.
3. Write the page body in Markdown below the front matter. Only include facts you can stand behind.

The project page, its tile on `/work/` (all projects, in `order`) and its tile in the home page's "Latest projects" section are generated from that one file. `order` sets position on `/work/`. "Latest projects" shows the projects with a `latest: 1` (left) to `latest: 4` number in their front matter, in that order (currently the rocketry payload, EMBL laser injection, Higgins nitrate-to-ammonia, then NRC SIFT-MS CO₂ reduction); if fewer than 4 are pinned, the rest are filled by most recent year. Remove the line to un-pin. Change `LATEST_COUNT` in `src/pages/index.astro` to show more or fewer (4 = one row on desktop). Image grids sit directly on the white page (no blue panels anywhere). Tiles show the cover at its own aspect ratio (4 columns on desktop, then 3, 2 and 1), so any cover shape works; a project with no cover gets a 4:3 "Images coming soon" block. `wide`, `fit` and `focal` are no longer used by the grid. Optional `gallery` (list of `src`, `alt`, `caption`, and `wide: true` to span the full row, e.g. slides and flowcharts; `.gif` entries stay animated) shows extra images under the project text at their own ratios, top-aligned, with captions.

## Add a leadership or award entry

1. Put photos in `src/assets/leadership/` (tiles are a uniform 4:3; pad logos or diagrams to 4:3 first).
2. Copy any file in `src/content/leadership/`, edit the front matter (`title`, `org`, `dates`, `order`, `images` with `alt` and optional `focal`, `links`) and write the text below it.
3. The scholarships list at the bottom of the page comes from `src/data/awards.ts` (no dollar amounts).

## CV PDF

The CV at `public/Madeline-LeBreton-CV.pdf` is a PDF of her latest Word CV (no phone number in it). To update it: export the new Word file to PDF, check the header has no phone number, and replace this file. The CV page shows a download button when the file exists, and "CV PDF coming soon" when it doesn't.

## Add an Exploring! entry

Same as a leadership entry: one Markdown file in `src/content/exploring/` plus photos in `src/assets/explore/`. Front matter is `title`, optional `org` and `dates`, `group` (`france`, `athletics` or `other`), `order`, `images` (each with `src`, `alt` and optional `focal`) and optional `links`. Tiles are 4:3; four photos lay out as 2 x 2, otherwise up to 3 across. For photo-heavy entries (8 or more) add `layout: gallery`: the photos show uncropped in a full-width masonry and open in a keyboard-friendly lightbox, using each photo's `alt` as its caption.

## Where things live

- `src/data/profile.ts`: name, bio, email, links, navigation
- `src/data/publications.ts`: the three papers
- `src/data/awards.ts`: scholarships and awards list
- `src/styles/global.css`: design tokens (steel blue `#244f78`, white `#ffffff`; set `--frame` to `var(--blue)` for a blue page frame; the `.panel` rule in the same file can be given `background: var(--blue)` to bring blue panels back) and all styles
- `.github/workflows/deploy.yml`: GitHub Pages deploy (Node 24)

## Open placeholders to resolve before launch

- Fundación RIA internship page (new, work tile): text from her CV; photo captions from her own descriptions (Yale x RIA program, Chipperfield feedback, Casa do Mel, Monfero, Caaveiro, Eume dam, cow veterinary). Confirmed by her: all photos except the isochrone presentation (moved to that project) are from the Yale x RIA summer program. The Caaveiro aerial photo was numbered 9 in her reply but is 10 on the sheet; the group photo among ruins (sheet number 9) is now included.

- EMBL cover is E4 (optical layout plus beam spots). Other EMBL images are queued for the full project page.
- Capstone has no images yet (flagged "In progress"). Started April 2026; Thomas Looi is the lab contact (confirmed). PCIGITI / SickKids are named on the CV, so are on the page.
- Microcontroller and controls labs (merged ball-and-beam + PedagoBot + analog circuits; links to the `control-systems` repo): year, course and details to confirm; cover defaults to the microcontroller boards photo. SwimStinct: her role to confirm.
- Rocketry: Sep 2025 to Apr 2026, payload challenge won at Launch Canada 2026 (confirmed). Altitude is 33,551 ft as she says (the team reel text says 33,528 ft). The page is retitled "Fracture-test payload on Osiris" because the public Magpie page says the flown module was a baseline fracture test ahead of a self-healing polymer payload; her CV says she designed a self-healing polymer experiment, which the page words as her design work, not as what flew.
- Higgins project: no numeric results published until confirmed as team results.
- Exploring! has two tiles (rings 2024–present, bench August 2026). Place details for both are not shown.
- CV page: the PDF (phone removed) is shown inline, followed by the publications list. Replace `public/Madeline-LeBreton-CV.pdf` to update it. The About page was removed at her request; the bio now lives only in the home page intro (`src/data/profile.ts`, draft copy).
- Leadership & Awards: Global Learning Ambassador photos (pier, sunset) assumed from the upload message, to confirm. Making Waves Head Coach of the Year is 2021 (confirmed). Female Rider of the Year is 2022 (confirmed). Head Coach of the Year is 2021 (confirmed). Future Leader plaque looks like 2025, CV says April 2026. The Making Waves staff board (other people's faces and names) was left out. Scholarships list is from the CV notes, to approve.
- Repositories linked: `aemet-climate-analysis`, `isochrone-accessibility-app`, `control-systems`.
- Leadership & Awards additions: Junior Worlds photos (one is credited to a UCI photographer in the image itself, so permission to publish is to confirm), RBC Future Olympian and Junior Worlds entries are sourced from public pages (links on the entries). Female Rider of the Year has no date: CV says November 2021 but the NCI article is dated May 2022.
- Queued, not yet used: podium photo with Ontario riders (event unknown), a team photo with a young girl holding flowers (a child, so held back; crop or leave out), the older Green Mountain podium crop (superseded by the wider one), the Higgins winter banquet group photo (it includes two young children, so crop or leave out), the ACS Catalysis cover scan (480 px wide; the NO3R cover already uses the cover artwork), and nothing else RIA-related.
- Exploring! cycling is now five groups in her order (Ontario Cup series, UCI Junior Worlds track, UCI stage races, Cyclery Racing team, Team Buffaz), each a text column plus a justified photo grid in the order written (`layout: gallery` in `src/content/exploring/`). The Junior Worlds photos appear both here and on the Leadership entry (duplicate, to confirm). Paris to Ancaster photo (`paris-ancaster.jpg`) is kept in `src/assets/explore/` for a future news page but is unused. The Team Buffaz announcement graphic is now shown uncropped (teammates' names visible). The team photo with a young girl holding flowers is included at her request. Two photos carry photographer watermarks (OnTheRivet.Photo, Amanda Sarah Cherish Photography), credited on the page; permission to publish them is to confirm. The Mont Ventoux-looking summit photo is placed in the Alps summer entry without naming the climb.
- Exploring! (draft, from her Notion captions, CV and pasted post text): Athletics (Cyclery Racing in Ontario 2023-24 with Ontario Cup, Henderson Classic, Tour de Via Italia and Paris to Ancaster; Team Buffaz 2025) and Other opportunities (Grenoble exchange, Alps in winter, Mont Mégantic, caving, Toronto Brigantine, Temagami). Henderson Classic and Paris to Ancaster are both 2024 (confirmed; no Ancaster placing is claimed). The junior Team Pursuit national champion line (2022) is now on the Junior Worlds entry; the event is not named. Exchange is shown as January–April 2025 (CV; she had said January–August, to confirm) and Mont Mégantic as February 2026. Podium photos are captioned without saying which rider she is. The Team Buffaz Chambéry graphic is cropped to her own hexagon so other riders' names are not shown. The Blender screenshot on the NO3R page is captioned only as a Blender scene.
- The NRC SIFT-MS page links the McMaster Engineering news story on the CO2 reduction team's CO2-to-CO catalyst, with its lab photo. She says she worked alongside that team at the NRC; the page claims no role in the catalyst itself. Future Leader entry links the McMaster co-op awards story and has the recipients line-up photo.
- Header tagline is now "Madeline LeBreton"; nav order is Work, Leadership & Awards, Exploring!, CV.
- Contact email `lebretom@mcmaster.ca` is kept for now.

## QA status (full pass run before deploy)

- 21 pages build clean. Checked at 360, 768, 1024 and 1440 px: no horizontal overflow, no broken images, no console errors.
- axe-core (WCAG 2.0 to 2.2 A/AA plus best-practice) run on every page at 360 and 1440 px: no violations after fixes (nav link target size, heading order on `/work/`).
- Keyboard: skip link works and moves focus to the main content; every tab stop shows a focus ring; the Exploring! lightbox opens from the keyboard, arrow keys change image, Esc closes and returns focus. Animations and transitions are disabled under `prefers-reduced-motion`.
- Links: all internal links and assets resolve. Instagram, LinkedIn, Google Scholar, doi.org and ACS block automated checks, so those links must be clicked once by hand after deploy.
- Weight: most pages are under 1.5 MB. The rocketry project page is about 5.4 MB because of animated GIFs (fracture-mechanism 2.3 MB, battery-case 1.6 MB, payload assembly 0.9 MB). GIFs also on the AEMET (1.7 MB), Higgins (2.2 + 1.3 MB), EMBL (2.3 MB), controls (2.6 MB) and rings (2.8 MB) pages; converting them to short MP4 or WebM would cut that sharply.
- Not yet added: `og:image` (link preview picture), `robots.txt` and a sitemap.

## Deploy (not done yet)

1. Push to `main` after approval.
2. In the repo: Settings, Pages, Source: **GitHub Actions**.
3. Confirm the Actions run succeeds, then check https://madelinelebreton.github.io.

- Home page: below Latest projects, three photo tiles (Sport, Leadership & Awards, Exploring!). Sport and Exploring! both link to `/explore/` (Sport jumps to the Athletics section). Photos and links are set in `src/pages/index.astro`.
- Header and browser-tab icon use her Notion face icon (`src/assets/profile/face-icon.png`, `public/favicon.png`).
- Not placed: SIFT-MS screen-recording GIF (4.6 MB); SIFT-MS `sift_flowcell_exploded.png` was deleted from the plan at her request.

- News page (`/news/`, nav item "News"): one Markdown file per item in `src/content/news/` (headline, outlet, date, exact `href`, image, alt). Layout is an image and large headline list, newest first. Only the Cycling Canada Junior Track Worlds selection announcement (12 Aug 2022, lists her as "Madeline Lebreton – Mississauga, ON") is published so far. Still needed from her: the YouTube link for CTV's The Social (add with `kind: video`), and any other article links. Not added because they don't name her: the McMaster Engineering "A catalyst for change" article on the Higgins Lab CO₂ catalyst.
- Home page intro uses her wording; headshot is a circle; the publications column matches the intro height on desktop (≥1100 px); the "3 papers" tag was removed.
- Exploring! opens with four photo tiles (Exchange in France, Athletics, Making, Other opportunities) that jump to each section; the Grenoble exchange and the two Alps entries are now their own first section (`group: france`). Athletics photos are shown smaller (`compact` on `EntryList`). Home "Latest projects" order: payload, nitrate-to-ammonia, laser injection, SIFT-MS CO₂. The Junior Worlds team pursuit photo had blue bars baked into the original; they are cropped off.
- Work page has filter chips (All, Instrumentation, Data, Robotics and controls) driven by a `tags` list in each project's front matter (`instrumentation`, `data`, `robotics`); without JavaScript all projects show. Awards table is full width so long awarding bodies fit on one line; the "listed" count is removed. Home intro: portrait stands level with the Publications column, text beside it.
- News also lists the McMaster Engineering Co-op Student of the Year Awards article (Future Leaders, 30 Mar 2026), the McMaster Chem Eng "A catalyst for change" feature on the Higgins lab (25 Sep 2025; it does not name her, and the photo shown is her own lab photo because the site's image could not be downloaded here) and McMaster Rocketry's Magpie page (dated 2026 only, via `dateLabel`; set a real date to sort it). The Magpie poster is the first, full-width image on the rocketry project page. Awards: Hazelview, OPEF, Woodlands and RBC rows now name their awarding body.
- Yoalin: she is now called a YOALIN Ambassador on the Leadership entry and on the CV (PDF edited in place: "Volunteer" became "Ambassador", with "(YOALIN)" added; her Word file still says Volunteer, so update it there too). The CV PDF still lists the OPEF scholarship as Jul 2023 while the site says Sep 2023.
- News also has the SpaceQ Launch Canada article (14 Aug 2026; it does not name her, one-line `blurb` quotes the Payload Challenge result) and the McMaster Rocketry Instagram reel of the Osiris launch (title is a working title and date shows only "2026", because Instagram can't be read here). News items accept an optional `blurb` line. Photos on both are her own, since the outlets' images could not be downloaded.
- Home page: five-photo strip at one height (each keeps its own ratio; the Yale x RIA photo is cropped wider, the Team Buffaz portrait is uncropped); landscape headshot (her full original, uncropped) beside the intro text; Latest projects use shorter 16:10 frames (`fit: contain` with a white plate for the two diagrams); order is payload, laser injection, nitrate-to-ammonia, SIFT-MS.
- EMBL page: added her own staff card from the Instrumentation team board, cropped to her card only (the full board shows colleagues' faces and names, so it is not published).
- Athletics order and titles: Junior Worlds, Team Buffaz Gestion de Patrimoine, 1st - Ontario Cup Road Series, Racing with Team Cyclery, then UCI stage races (she did not list it; kept as a fifth entry, to confirm). Cyclery photos 8 and 9 are cropped wider; the trophy-podium crop no longer shows the photographer's watermark, which is credited in the entry text instead.
- Exploring!: Making is shown inline like Athletics (text plus every photo, built from the explore-section projects by `MakingList.astro`; the project pages still exist but are no longer linked from this page). Every photo on the page is uncropped at one shared height (`uniform` on `EntryList`, `--h` in `global.css`), and the lightbox no longer shows captions (the alt text stays on the image for screen readers).
- Exploring!: "The Alps in winter" now lists the places she named (Saint-Nizier-du-Moucherotte, the Vercors, Le Moucherotte; cross-country and downhill skiing; snowshoeing with the association Alpes-La!, linked to alpes-la.org). Added the Bastille-terrace friends photo to Study Abroad in Grenoble and the smiling-on-a-rope photo to Caving (spéléologie). The five photos in "Hiking and cycling in the French Alps" are already shown uncropped at their own portrait ratios (about 3:4; the Galibier sign is 0.70).
- Exploring!: added four more photos, all uncropped: a second caving photo (Caving), two summit/ridge photos (The Alps in winter) and a cable-car photo (Study Abroad in Grenoble).
- Home page: headshot is a taller, smaller crop (object-fit on the landscape original) level with the first sentence, with the second paragraph below it flush left; the hero labels (Mechatronics engineering / Robotics, Data, Research) are larger. The Work page no longer has the "in the order I'd show them" line.
- Isochrone and AEMET project pages now follow the structure of their GitHub READMEs (why built, features or steps, output tables, technical notes, running it, limitations, data credits), using only what the READMEs say; the isochrone page also has the demo GIF (resized to 1000 px, 1.7 MB). Project pages style tables, code and numbered lists. Home "Latest projects" images keep their own ratios again (payload and nitrate covers are portrait). Header link "Get in touch" is now "Email"; Work is no longer marked current on the home page.
- Home photo strip: the fifth photo (Team Buffaz portrait) now has a soft sky-blue studio backdrop instead of white, made by cutting her out of the original (hair and jersey edges refined) and compositing her over a gentle gradient. The edited file is `src/assets/explore/buffaz-headshot-backdrop.jpg` and is used only on the home page; the original is still used on Exploring!.
- Exploring! photos added (all uncropped): Cyclery finish-line celebration and criterium corner (Racing with Team Cyclery); Tour di Via Italia team trophy podium (1st - Ontario Cup Road Series); foggy climb in Team Buffaz kit (Team Buffaz); Isère suspension bridge (Study Abroad in Grenoble); group on snow below a cliff and the cabin lunch (The Alps in winter); the Strava screenshot, the hairpin bends, a ride toward a summit tower and a ride above a turquoise reservoir (Hiking and cycling in the French Alps). The Galibier text now quotes the Strava stats from her screenshot (218.54 km, 4,038 m, 9 h 30 min) and links the activity. Home photo strip now starts with the film-camera photo.
- Home page spacing tightened (hero, photo strip, intro band, section headings) so it is about 300 px shorter on desktop; the three tiles at the bottom (Sport, Leadership & Awards, Exploring!) are shorter, wide crops. The Exploring! overview tiles keep their 4:3 shape.
- Home: the Publications box is wider (the two columns are now 1 : 1.4) so every title fits on two lines from about 1200 px wide up; below 1100 px the columns stack as before. The three bottom photo tiles are uncropped again, at one shared smaller height (`.paths.home`, `--h`).
- Home: Publications now starts exactly where the third photo in the strip starts (`--a` is computed from the strip's photo ratios in `index.astro`; the shared gap is `--cg`), so changing or reordering the strip photos keeps it lined up. The name and the two hero labels are a bit smaller.
- Home: the headshot is now the same size and shape as the first photo in the strip (the camera photo) and sits directly under it; the bio sits under the second photo and Publications under the third, all on the strip's columns (`--b`, `--c`, `--r1` set in `index.astro`). The header Email link is underlined only on hover.
- Home: the headshot is removed (trial, at her request). The bio now starts at the left edge under photos 1 and 2 and Publications stays under photo 3. The headshot file is still in `src/assets/profile/madeline.jpg` and can be put back in `index.astro`.

### Payload page and laser page (2026-10-18)
- `rocketry-payload.md`: body restructured after the Notion "McMaster Rocketry Payload Team Member" page into "My technical contributions", "Experimental design", "Battery case design" and "Integration". Wording comes only from the existing page and the CV notes. The Notion subpages (Battery Case Design, Experimental Design) were not in the exported files, so more detail needs her text. Gallery reordered to follow the sections; Tools row added.
- `embl-laser-injection.md`: summary now says "European Molecular Biology Laboratory Instrumentation Team"; new optional `compact: true` front-matter flag makes the cover, inline and gallery images smaller (wide gallery images take half the width).

### CO₂R page, one-line subtitle and one-row gallery (2026-10-18)
- `sift-ms-co2-reduction.md`: rewritten around cell design, experiments and method, data analysis and presenting; seven new images (poster photo, bench photos, flow cell, setup schematic, SIFT-MS time series, Excel workbook) and `compact: true`. Poster and EndNote guide are published as PDFs in `public/` and linked. The student report (`SIFT-MS_CuNP_Paper.pdf`) is NOT published: it reprints third-party figures; the ACS paper link covers the published version.
- Leadership & Awards subtitle stays on one line from 900px up (`.lede.one-line`).
- Leadership entries accept `oneRow: true` (gallery photos in one row); used for Global Learning Ambassador. Text now says students from France and Sweden.
- YOALIN leadership entry: gallery in one row (`oneRow: true`); text replaced with her wording (kickoff in Poschiavo with CIPRA; Alpine Convention and Rhätische Bahn).
- CTV The Social leadership entry: title and text replaced with her wording; "Watch on YouTube" link added below the text (same URL as the News item).
- Leadership: "Women in cycling mentor" merged into "National Cycling Institute Female Rider of the Year" (one entry, both photos, both paragraphs); `women-in-cycling-mentor.md` removed.
- Duke of Edinburgh entry: text updated to her wording ("recognized for commitment to voluntary service, physical activity, skill building and adventurous expeditions").
- Leadership images: stray strip on the left of the Making Waves logos image whitened (dimensions unchanged, so the 4:3 tile is not re-cropped); blue side bars cropped off the Tough As Nails photo (focal `50% 25%`).
- News: SpaceQ entry title and subheading swapped as requested (the large headline is now "McMaster took first place in the Payload Challenge at Launch Canada 2026"; SpaceQ's own headline sits underneath).
- News renamed Media: nav label, page title and heading say "Media"; the subtitle line is removed. The URL stays `/news/` and the content collection stays `news` so existing links keep working. News images are smaller (17rem column, tighter rows).
- Media: Launch Canada reel entry now reads "McMaster Rocketry 2026 / Watch [McMaster Rocketry at Launch Canada 2026] / The team's reel of the Osiris launch to 33,528 FT and a top speed of Mach 2" (new optional `titlePrefix` field puts plain "Watch" before the link). Her altitude (33,528 ft) differs from the 33,551 ft on the payload page, which came from the team's page; to be reconciled.
- Media: Co-op Student of the Year Awards entry uses the new group photo (`coop-future-leaders-group.jpg`, replacing the old single photo) and the subheading "Awarded Future Leader for leadership, initiative and professional growth, and real-world impact."
- Media: Magpie entry crop shifted to the top (`focal: 50% 0%`) and subheading added (first scientific payload; SRAD fracture-test module; groundwork for a self-healing polymer payload).
- Media: "A catalyst for change" entry uses the new three-researcher photo (`catalyst-for-change-team.jpg`, same photo as on the CO₂R project page); old `higgins-lab.jpg` removed.
- Media: The Social entry subheading added (her wording; note it calls both athletes "Olympic athletes", as supplied).
- Media: The Social entry source now reads "The Social (CTV)" (YouTube removed).
- Media: Cycling Canada Junior Track Worlds selection entry subheading added (her wording).
- Media: Canadian Cycling Magazine junior track worlds entry subheading added (her wording).
- Media: NCI Youth High-Performance Year-End Finale entry subheading added (her wording).
- Media: RBC Training Ground entry subheading added (her wording, "$15,000" with a comma). It includes a dollar amount, which she asked for explicitly here even though dollar amounts are kept off the awards list.
- Home: Publications cards put venue, date and lab on the same line as the title (two lines each at 1280–1440px; one card wraps to three at about 1200px); title text slightly smaller.
- Exploring!: removed the sentence pointing from Athletics to Leadership & Awards.
- Exploring!: Team Buffaz text replaced with her wording (119km Grand Prix Féminin de Chambéry, UCI 1.1); the 20 April date and the Coupe de France N1 sentence were dropped.
- Exploring!: "Other opportunities" renamed "Outdoor opportunities" and moved above "Making" (both the overview tiles and the sections; anchor ids unchanged).
- Exploring!: Alps winter text starts "Cross-country and downhill skiing, and went snowshoeing…" ("Tried" removed).
- Exploring!: "Hiking and cycling in the French Alps" no longer shows the Col du Galibier summit sign photo (file `galibier-sign.jpg` kept in `src/assets/explore/`, now unused); the other eight photos alternate between hiking and riding.
- Exploring!: French Alps hiking and cycling text replaced with her wording ("My highlight was climbing…"); the Strava link was kept at the end, and the 9 h 30 min and "Also hiked and rode" lines were dropped.
- Exploring!: removed the Galibier-ride photo (cyclist climbing toward the summit tower; `galibier-ride.jpg` kept in assets, now unused) from the French Alps hiking and cycling entry.
- Exploring!: Ontario Cup entry text replaced with her sentence only; the Henderson Classic and Tour de Via Italia lines were removed from the text (the Via Italia photo is still in the gallery).
- Exploring!: the two Tour de Via Italia photos and the Instagram link moved from the Ontario Cup entry to "Racing with Team Cyclery" (first two photos); the Cyclery corner (OnTheRivet.Photo) and close-up photos moved the other way, into the Ontario Cup entry. Cyclery text now includes "Won the 2023 Tour de Via Italia, one of Ontario’s longest-running events." and ends "Raced the 30th Paris to Ancaster in 2024."
- Exploring!: "UCI stage races" text now also names the Joe Martin Stage Race; 60px more cropped off the bottom of the park-peloton photo (4th image).
- Exploring!: Mont Mégantic title no longer says "in winter"; text now "An overnight winter hiking trip to summit Mont Mégantic."
- Exploring!: bench project gets two dinner photos (`dinner-patio.jpg`, `dinner-table.jpg`) as a captioned gallery under the existing photos; the captions use her wording about designing the bench to seat more people and hosting a dinner inspired by her travels in Spain, sharing dishes and stories from her summer abroad. The HEIC originals were converted to JPEG.
- Exploring!: caving gallery swaps the rope-in-shaft photo (`caving-rope.jpg`, kept in assets, now unused) for the stalactite photo (`caving-stalactite.jpg`) in the same position.
- Exploring!: the "Outdoor opportunities" overview tile now uses the canoe trip photo (`canoe-trip-cover.jpg`, 640px wide as supplied; a larger original would look sharper on high-density screens).
- Exploring!: bench photos reordered as shown in the Making section (finished bench, sanding, end view, dinner on the patio, dinner table, bench at the table). Photos are now all in the Markdown body (gallery removed) because the Making section lists the front-matter gallery first. The Exploring! text column carries her line about designing the bench to seat more people and hosting a dinner inspired by Spain, since that section shows no captions.
- Exploring!: Grenoble cable-car photo cropped from portrait to 4:3 landscape (faces kept; roof and city view trimmed).
- Exploring!: French Alps photos cropped to remove empty sky/cloud (lake hike, stream hike, Galibier view, hairpins) and enlarged to fill exactly 2 rows on desktop (`twoRows` front-matter value on that entry); phones still wrap to 3 rows. Making overview tile now uses the bench-sanding photo.
- Exploring!: French Alps gallery capped at 50rem so the photos are shorter (still 2 rows); Ontario Cup entry's last-but-one photo (race-solo-lead) cropped on the left and set to fit 2 rows (`twoRows`); "Making" renamed "Creative projects" (tile and heading); France intro sentence removed; rings project GIF rebuilt from the new process photos (11 frames).
- Exploring!: Exchange in France tile subheading is now "Université Grenoble Alpes and exploring the mountains".
- Leadership & Awards: tighter row spacing in the Scholarships and awards list (about 650px to 460px tall on desktop).
- Leadership: YOALIN second paragraph reworded (two sentences).
- Leadership: The Social description now starts "A conversation with".
- Leadership: UCI Junior Track Worlds photos shown on one row; team and overhead photos cropped narrower.
- Leadership: Head Coach logos photo cropped tight (entry now uses the uncropped gallery layout so the tall logo stack isn't cut); Tough As Nails photo shows more space above the trophy (focal 50% 8%).
- Leadership: RBC Future Olympian gets a second photo (Endurance Bike, blue "Speed" backdrop; source: an earlier upload).
- Home: "About" heading over the intro text; Publications and About headings a bit smaller; the NRC, EPN Campus and Fundación RIA names in the intro link to their work pages; name and descriptor centred on the page; the Sport / Leadership & Awards / Exploring! photos are three equal 4:3 tiles across the full page width.
- Work: first four projects ordered to match the home page (payload, laser injection, nitrate, SIFT-MS); CO2R page: GIF added, poster and EndNote guide embedded, role/tools reworded.
- Work pages: new figure system. In a project's Markdown body, `![alt](path "caption")` renders as a figure with a caption; a title prefix `right:`, `left:`, `wide:` or `small:` sets its layout, and image lines written one after another with no blank line sit side by side in a row. Set `rich: true` in front matter for the wider text-plus-figures layout (plugin: `src/plugins/rehype-figures.mjs`, wired in `astro.config.mjs` for the Sätteri Markdown processor). New front-matter fields: `embeds` (PDF or `kind: html` page shown in a frame) and `videos` (MP4 in `public/video/`).
- Work: Fracture-test payload page rewritten as a long-form write-up with images woven into the text (38 new images in `src/assets/projects/rocketry-payload/`); nitrate-to-ammonia page rewritten with technical details from the Notion notes and nine new photos/figures; CO2R page gets the NRC group photo.
- Work: AEMET page embeds the visualization notebook (static HTML export in `public/AEMET_visualization.html`, Colab badge removed) and shows the example municipality list as a table with an .xlsx download (`public/example_municipalities.xlsx`); isochrones page shows the demo video (trimmed to 35 s so a browser downloads panel is not visible; `public/video/`), replacing the old GIF.
- Exploring: Team Buffaz gallery uses the new-backdrop headshot, adds the team podium and team training photos, drops the smiling road photo; Mont-Mégantic power-lines photo cropped more at the bottom; Rings page GIF sped up 2x, four process stills replaced by two finished-ring photos; bench page gets the screen-and-table photo.
- Media: new item, Kumu's "Project of the Week: The Water Cycle in Galicia" (LinkedIn short link as given; dated 28 August 2026); the Galicia water map page links to it too.
- Work: Galicia water map cover is now the green/blue water cycle diagram (whitespace cropped); the hydrologic cycle sketch sits on that page.
- Work: Galicia water map page shows the sketch, the green/blue water cycle diagram and the estuary farming / water use / dam management links, each with a caption.
- Work: Galicia water map page rewritten from the Kumu methodology document (process, themes table, loops, import workflow) with 31 of the author's own sketches and screenshots; third-party maps/diagrams and the Pablo meeting-notes pages were left out.
- Leadership: Canada-France Quantum Alliance photos now match the Global Learning Ambassador photo height (`matchRow` front matter); YOALIN viaduct photo moved to second.
- Media / Work: Fundación RIA's Yale collaboration news item (1 June 2026) added to Media and to the Fundación RIA internship page's links.
- Leadership / Media: The Social uses the new studio photo; photos shown uncropped (gallery layout) so the logo is not cut off; duplicate photo removed (two of the three were the same image).
- Home: the Sport / Leadership & Awards / Exploring! tiles sit under a horizontal rule, separate from Latest projects (no heading). Kumu page: animated GIFs kept (they were being flattened to still frames), two link cards under the cover; Fundación RIA internship cover is the Yale x RIA room photo.
- Work: `tall:` figure hint (Osiris rocket on the payload page): large down the right edge on wide screens, a full-width sideways strip on narrower screens. Magpie payload poster added (full-size copy at `/magpie-payload-poster.jpg`). The four "Selected approach" sketches are cropped to remove the dark scan edges.
- Work: capstone page has a placeholder cover (the PCIGITI logo on blue), a "Design process coming soon!" notice (`notice` front matter), is the first project in the list, and describes learning ROS 2, Simulink and Isaac Sim alongside the undergraduate courses used. "Back to work" now returns to `/work/`.
- Work: payload page has a photo row under the cover (`sectionLinks` front matter) whose headings link to Experimental design, Fracture mechanism design, Simulation and validation, Battery housing and Integration. The Onshape guide (4EX3 October/November deliverable) is linked in Battery housing and embedded at the bottom (`/payload-onshape-guide.pdf`).
- Work: microcontroller and controls labs cover is now the animated ball-and-beam GIF (moved out of the gallery); the acrylic-case photo is no longer the cover.
- Work: controls labs page: laptop photo removed, boards photo rotated 90° counterclockwise, and the Control systems GitHub link moved into the opening paragraph.
- Work: AEMET page shows the example municipality list as an in-page spreadsheet preview (no download link).
- Work: AEMET page restructured with an image-header section row (`sectionLinks`), a smaller screen recording near the top, and a pipeline figure and chart row.
- Work: Galicia page (now "The water cycle in Galicia systems mapping") uses the map-build GIF as its cover; the early hydrologic sketch is rotated upright and the hydrologic-cycle GIF is cropped at the top.
- Work: isochrone page cover is the animated map GIF, with the presentation photo beside it (`coverAside` front matter).
- Work: added school-project pages from the Notion export: SwimStinct (rewritten), hip implant (with the Re-Align poster), programming and database coursework, and a rewritten microcontroller, circuits and controls labs page; the controls cover GIF is cropped on the right.
- Work: PCIGITI capstone is now the first project; "Engineering internship at Fundación RIA" is renamed "Fundación RIA Thinktank".
- Media: the Kumu item is now titled "Kumu Project of the Week: The Water Cycle in Galicia".
- Media and the Fundación RIA page: the Yale news item title is translated to English, and its blurb now says a three-week program for Masters students at Casa RIA.
- Work: hip implant cover is now the CAD render beside the X-ray (the separate CAD figure in the text was removed to avoid repeating it).
- Media page moved from /news/ to /media/ (the old /news/ link redirects); the Magpie item headline reads "Magpie Payload" with only "Magpie" linked (`titleSuffix` front matter).
- Work (payload page): removed the big cover photo from the page (kept for the Work grid via `hideCover`), intro starts "I was a Payload team member", payload team photo replaces the full-team photo, poster sits in a row with the two small CAD images (`wide:` and `small:` hints work inside rows), Experimental design tile is a 4:3 grid of the four polymer stages, "payload experiment" wording updated, and the self-healing illustration sits beside "Refining the experiment".
- Work (payload page): the final experiment module GIF now sits beside the fracture-method list so text runs beside it; the re-closing concept sketch is removed.
- Work (payload page): the first two spreadsheet images (critical load, motor torque) are smaller, and the FEA image rows use the new `even:` figure hint so every image in a row has the same height.
- Work (payload page): removed the teammate form-factor sketch; the modular-design and PCB-holder sketches now stack together in the right column at the start of the battery Design process text.
- Work (payload page): battery housing figure rows share a height (`even:` / `evenlg:` hints): version 3 images, the Onshape GIF and lid image, the Manufacturing and validation prints and the final two photos; the Onshape rotation GIF is cropped on the sides, and the integration GIF has its outline cropped off; the two wiring sketches share a height.
- Work (payload page): removed the photo of the two printed battery housings; the final Onshape image is captioned "The updated battery enclosure in Onshape."
- Onshape guide PDF: removed the "4EX3 October/November Deliverable" line from the heading and its PDF title.
- Work (payload page): in Integration, the airframe photo and the lift-off photo now sit side by side in one row (the payload team photo was already moved to the top).
- Work (EMBL page): added a "The system" and "What I did" section with technical details (optical design, theoretical model, simplified then motorized test bench, the mechanical design fix, reports and the working-group presentation).
- Work (EMBL page): the team photo, EPN campus sign and the team-board card (uncropped) now sit in one row of equal height; the card moved out of the gallery.
- Work (EMBL page): the cover image no longer has grey padding beside it (compact pages size the cover frame to the image).
- Work (EMBL page): added photos of the bench, whiteboard optics notes, lab setup, the synchrotron hall and an MD2-S diffractometer; the DataRay beam-profile GIF moved from the gallery into a row with the bench and whiteboard photos.
- Work (nitrate page): the journal cover now has the group lab photo beside it (`coverAside`, no caption), which also removes the grey padding around the cover.
- Work (nitrate page): the three H-cell images under Running the experiments share one height.
- Work (nitrate page): every row of images shares one height (new `evenxl:` hint; captions in even rows wrap to the image width).
- Work (nitrate page): swapped the cover-side photo (now the computer modelling photo) with the group lab photo (now in the figure row).
- Work (nitrate page): intro reworded (dates dropped), and the foot links list is headed "Publications" (`linksHeading` front matter).
- Work (nitrate page): the Blender scene caption reads "Blender scene for the journal cover I designed."
- Work (nitrate page): graphical abstract caption now says "for the final publication".
- Work (nitrate page): notebook caption now says "the experiment setup".
- Work (nitrate page): electrode photo caption now says the pieces are being drop-cast with catalyst ink before an experiment.
- Work (nitrate page): the Blender GIF caption reads "H-cell model in Blender."
- Work (nitrate page): the H-cell render caption reads "My labeled H-cell diagram."
- Work (nitrate page): the H-cell photo caption reads "The H-cell experimental setup."
- Work (nitrate page): the nanotube image caption reads "My illustration of a copper porphyrin on the wall of a carbon nanotube support".
- Work (nitrate page): phthalocyanine caption reworded ("molecule", "is added in the middle").
- Work (nitrate page): intro paragraph updated (dates restored; mentions designing the journal cover and graphical abstracts for the papers below).
- Work (Galicia page): summary under the title now says the map was built to facilitate conversations with stakeholders about how human activity and the hydrologic cycle affect each other.
- Work (Galicia page): the handwritten and colour-coded matrix images are now one GIF that switches between them (aligned), with the colour key smaller beside it.
- Work (Galicia page): the six theme matrices (climate, eucalyptus, clean water, highways as rivers/dams, estuary farming, ocean fishing) now form a 3 x 2 grid with equal image heights.
- Work (Galicia page): removed the three early sketches (causes/effects list, first human-activities cycle, early hydrologic cycle) from the Drawing the human effects section.
- Work (Galicia page): the five sticky-note images share one height in two rows (new `evenN:` hint sets the row height in rem).
- Work (Galicia page): the three loop images share one height, as do the first Kumu map and its circular redraw; first-map caption updated.
- Work (Galicia page): the spreadsheet, Kumu import and imported-map images share one height.
- Phone fix: wide tables (Galicia themes table) scroll sideways inside the page instead of widening it.
- Work (Galicia page): finished map shown full width; the walkthrough steps and the feedback-loop GIF share a row at one height; GIF caption shortened.
- Work (Fundación RIA page): the intro text is as wide as the cover photo (new `textWidth` front-matter setting, in rem).
- Work (Fundación RIA page): removed the program introduction photo; the gallery shows every image at one height (new `galleryHeight` setting, in rem).
- Work (Fundación RIA page): added the Yale x RIA "Presentations: Lessons and Conversations" booklet PDF as an embed, with a note on taking the notes and learning InDesign and Illustrator to make it; both added to the tools list.
- Work page order: capstone, rocketry, EMBL, nitrate first, then Fundación RIA, accessibility app, SIFT-MS, AEMET app, Galicia water map, microcontroller labs, programming coursework, SwimStinct, hip implant.
- AEMET page: demo GIF full width; cover hidden and used as the Visualization highlight tile (larger tiles via new `sectionLinksWidth`); temperature charts padded with black to match the precipitation chart's height and shown in one equal-height row; notebook pointer callout in the Visualization section.
- SwimStinct page: the verification animation is now the cover (its caption moved into the intro text); the old cover photo (hands wiring the motor) is deleted.
- SwimStinct page: subtitle now says it is a biomedical engineering design challenge done with a team of 4; the location and clip sketches share one height, as do the housing sketches and CAD render.
- SwimStinct page: the teardrop housing collage and the four mechanism-prototyping collages are split into 15 separate images, shown in rows at one height per section (housing 12rem, mechanism 15rem); the small cover GIF is no longer upscaled.
- Hip implant page: the two Design process sketches sit on one line at the same height.
- Hip implant page: the three Materials selection calculation images share one height.
- Hip implant page: the poster is now a full-width image right after the intro (no scrolling frame), with a link to the PDF.
- Hip implant page: intro trimmed; poster image uses a new `full:` figure hint (as wide as the page allows, uncropped), and its template footer line is cropped off.
- Hip implant page: Design process intro reworded (elongating the bone to even out leg length).
- Hip implant page: removed the failed-prints image; the printed prototypes image is smaller.
- Programming and database coursework page: C course summary reworded.
- Programming and database coursework page: Data Structures and Algorithms summary reworded.
- Programming and database coursework page: "Code on GitHub" links to the C, Java and SQL repositories.
- Programming and database coursework page: added the WordData struct and VADER rule constants snippet (from utility.h) before the normalization snippet.
- SwimStinct page: photo of Matt Cabraja (credit @matt_cabraja on Instagram) in the Paralympian interview section.
- AEMET page: the "Output workbook" tile is now a screenshot of the exported Excel workbook, taken from the demo GIF. SwimStinct page also notes it.
- Programming and database coursework page: the hash table paragraph is now labelled "Sample" and written in the past tense.
- Programming and database coursework page: the schema image sits beside the SQL snippet with its bottom edge level with the bottom of the code (new `align-bottom` layout).
- Home page: the "Mechatronics engineering / Robotics, Data, Research" line under the name is smaller.
- Leadership & Awards page: removed the subtitle line and the "Scholarships and awards" heading (the list stays, with a screen-reader label).
- Leadership page: the 3rd and 4th Global Learning Ambassador photos swapped (Big Apple third, waterfall fourth).
- Leadership page (CTV The Social): the three photos are cropped to a wide ratio and shown on one row.
- Exploring! page: the "Creative projects" tile subheading is now "Beyond the lab!".
- Exploring! page (Study Abroad in Grenoble): the terrace photo is cropped wider, and the picnic photo has most of its sky cropped off.
- Exploring! page (French Alps): the lake hike photo shows more sky again (crop starts 160px higher).
- Exploring! page (Ontario Cup Road Series): photos 3 and 5 swapped.
- Exploring! page (Caving): description now mentions overcoming the language barrier.
- Exploring! page (Rings from heirloom silver spoons): photos are taller (15rem), in the order finished rings, ring blanks, spoons, filing, polishing, hand, after the process animation; the copper pipe photo is removed; the finished-rings and hand photos are cropped narrower. The finished-rings photo is now the project cover (new `tileHeight` setting).
- Exploring! page (bench): photos fill two rows (new `twoRows` setting for creative projects); sanding photo cropped at the top.
- Fundación RIA page: the news link is now titled "Fundación RIA Thinktank Collaboration with Yale University".
- Media page: the Cycling Magazine junior track worlds title is in title case.
- Programming coursework page: C snippet replaced with the modifier logic (intensifiers, negation, all-caps) from calcCompound plus the normalization.
- CV page: the PDF frame is tall enough to show both pages without scrolling inside it; the line under it is removed.
- Capstone page: notice now reads "In progress. Design process coming soon!" (placeholder-image sentence removed).
- Capstone page: "What I'm learning" intro and the ROS 2, Simulink and Isaac Sim descriptions shortened to 1-2 sentences.
- Capstone page: removed the "I will add the design process and photos here" closing line.
- Capstone page: notice now reads "In progress. Design documentation coming soon!".
- Capstone page: the PCIGITI header image is smaller (new `coverWidth` setting).
- Exploring! page: the first photo (viewing platform at sunset) is removed from Study Abroad in Grenoble; it is still the Exchange in France tile image at the top.
- Leadership & Awards: RBC Future Olympian text now ends "Recorded a top-3 score on the endurance bike."
- Rings project: the description now reads "Turning heirloom silver spoons into custom rings."
- SwimStinct: the cover animation is cropped shorter (309 x 300).
- Rocketry payload page: the poster, the payload CAD module and the CAD animation are shown at the same height.
- Rocketry payload page: the resonance avoidance illustration is smaller and the self-healing illustration is bigger (new `w38:` / `right30:` width hints for figures).
- SIFT-MS CO2R page: the cell design animation is bigger (640px wide on desktop).
- SIFT-MS CO2R page: the SIFT-MS signal and Excel workbook images moved under Data analysis (same height); the photos under Presenting and sharing the work are now all one height.
- SIFT-MS CO2R page: setup diagram caption now reads "My diagram of the electrolyte and gas flow setup, from the CO₂ supply to the SIFT-MS."
- Project pages: embedded document headings (e.g. the EndNote guide) can use the full width of the embed, so the EndNote heading fits on one line on desktop.
- Leadership & Awards (CTV The Social): the three photos are cropped narrower on both sides, keeping the show logo.
- Work page: the Fundación RIA, accessibility mapping, SIFT-MS and AEMET tiles share one image height (new `tileRatio` setting on projects).
- Programming and database coursework page: "Final project:" and "Sample:" now link to the matching GitHub repos.
- Rocketry payload page: summary and opening paragraph reworded (design and build of the experimental module, Payload Challenge first place).
- Rocketry payload page: captions shortened, paragraphs reworded (opening, experimental design, choosing the experiment, self-healing bullet), payload assembly animation cropped 4 px on each side to remove its edge lines.
- Rocketry payload page: decision matrix paragraph reworded.
- Rocketry payload page: self-healing illustration caption reads "High level illustration…".
- Rocketry payload page: sample material, microencapsulation and fracture mechanism intro paragraphs reworded.
- Rocketry payload page: fracture mechanism animation caption shortened to "The final experiment module".
- Rocketry payload page: sketches intro sentence reworded.
- Rocketry payload page: the fracture energy paragraph is now a short intro with three bullets.
- Rocketry payload page: the fracture energy equations are labelled (critical fracture energy, geometry factor) and dC/da is explained.
- Rocketry payload page: the "Limits of the calculations" heading now reads "(ideal assumptions)" and the intro sentence is removed.
- Rocketry payload page: the CAD image of one fracture test mechanism lines up with the bottom of the paragraph beside it.
- Rocketry payload page: linear actuator paragraph reworded ("Our revised mechanism", "tradeoff").
- Rocketry payload page: mass estimate paragraph reworded; removed the line about refining with measurements.
- Rocketry payload page: FEA paragraph reworded ("there was stress on the outer edge").
- Rocketry payload page: battery case intro sentence now starts "I ideated battery pack versions…" (teammate clause removed).
- Rocketry payload page (battery case): the modular and PCB-holder sketches and the two wiring images swapped places; the sketches now form an even-height row.
- Rocketry payload page (battery case): the Version 1, Version 2, Version 2 transparent and Wiring allowance images share one height; the swapped sketches are shown larger.
- Rocketry payload page (integration): the master sketch, master sketch in use and final integration images share one height.
- Rocketry payload page (manufacturing): intro says "check the CAD tolerances"; heat insert holes bullet now says the 0.2 mm was added in the next iteration.
- Rocketry payload page: removed the paragraph on the printed prototype limits and next steps.
- Rocketry payload page: the closing "next time" paragraph reworded (Onshape errors).
- Rocketry payload page: Engineering judgment paragraph reworded ("decision making tools").
- Rocketry payload page: Direction paragraph reworded.
- Rocketry payload page: on wide screens the Osiris rocket image now runs from the top of the page title to the bottom of the team photo (new `tallspan:` figure hint).
- EMBL page: summary now ends "in Grenoble, France."
- EMBL page: summary and intro rewritten (EPN Campus summary; two intro paragraphs; removed "The system" heading and the "contacted the team myself" sentence)
- EMBL page: the three bench/optics/beam-profile images now sit in one row with the photo of me at the setup
- EMBL page: Test bench bullet now says "custom designed and manufactured"
- EMBL page: removed the sentence about the EMBL outstation sharing the EPN Campus
- EMBL page: heading "Some samples of my work" above the beam-test image gallery (new optional galleryHeading field)
- EMBL page: photo row under the intro (setup, prototype, whiteboard, beam profile); team-board photo uncropped to the whole Instrumentation team; header image caption (new `coverCaption` field)
- EMBL page: renamed three photo captions (Prototype on the optical bench. / Optics sketches / Focusing the laser profile)
- Nitrate page: the lab photo beside the journal cover now ends level with the bottom of the purple artwork, not the white ACS footer (new `coverAside.heightRatio`)
- Nitrate page: caption on the group photo ("Collaborating on the Nitrate Reduction Team")
- Nitrate page: added the molecule-scripting-blender GitHub link, the six steps from its README, a bond-drawing code excerpt from script.py and short usage and rendering notes
- Nitrate page: the Quantifying the products photo row is now 16rem tall and the Collaborating on the Nitrate Reduction Team row 14rem tall (each as large as fits in one row)
- Work page: "Accessibility mapping for architects" now comes before "Fundación RIA Thinktank" (orders swapped)
- Isochrone page: the demo video now sits right after the intro and the "How the app works" flowchart inside the "How it works" section (they were at the bottom of the page)
- Rocketry payload page: battery sketches and wiring photos back to their earlier layout (sketches beside the intro, wiring pair under "Wiring."); version and integration row heights unchanged
- Rocketry payload page: the "assembled payload inside the airframe" caption now wraps to the photo width (row set to equal 26rem height)
- EMBL page: the lab-test images are an even two-column grid, every image the same width (new `galleryColumns` field), one column on phones
- RIA page: six gallery captions reworded (Chipperfield feedback, group discussion, cattle veterinary, Casa do Mel field visit, Touring the Monastery, Group photo at the Monastery)
- RIA page: the "Listening in on a discussion" photo moved to the last gallery row
- RIA page: opening sentence reworded ("During my engineering internship at Casa RIA in Santiago de Compostela, I built three tools…")
- RIA page: header image smaller (coverWidth 32rem, was about 52rem)
- RIA page: the Yale program paragraph cut to one sentence ("…Yale University summer program, which investigated ecosocial issues in the Fragas do Eume Natural Park.")
- RIA page: sentence about the program booklet sits right above the embedded PDF (new `intro` field on embeds)
- RIA page: the booklet is shown as two-page spreads (cover on the right, then pages 2-3, 4-5 …), made from the original PDF as `yale-ria-presentations-booklet-spreads.pdf`; "Open the PDF" still opens the original single-page file
- Microcontroller page: Timer labs and PedagoBot sit side by side in two columns (one column on narrow screens; new `.two-col` wrapper)
- Microcontroller page: state transition table, Karnaugh maps (14rem tall) and the JK/excitation tables (34rem wide) smaller
- Microcontroller page: the three breadboard photos in one row at the same height
- Microcontroller page: removed "The boards connected to two laptops." from the gallery, leaving four photos in one row; fixed a stray "wide:" in the breadboard photo caption
- Microcontroller page: the boards photo rotated 90° clockwise to portrait, and the four gallery photos set to one equal height (26rem)
- Microcontroller page: "The circuit running." now sits beside the Analog and Digital Circuits intro (right-hand figure) instead of in the breadboard row; gallery photos 22rem tall so all four fit one row at 1280px
- Microcontroller page: the ball-and-beam GIF has no grey padding and "The circuit running." sits beside it at the same height (back out of the Analog and Digital Circuits section)
- Microcontroller page: PedagoBot GIF caption now "Debugging the PedagoBot"; the two top GIFs are shown at the same height with no grey padding (cover-row width set by `coverWidth` when there is a side image)
- Microcontroller page: the state transition diagram sits beside the JK/excitation tables, same height
- Microcontroller page: the simulated LEDs and timing diagram are stacked beside the Multisim circuit, their combined image height matching it (new `.stack-pair` wrapper)
- SwimStinct page: Matt Cabraja photo smaller (14rem wide, was 21rem); microcontroller stacked pair fine-tuned so the two stacked images end level with the Multisim image
- SwimStinct page: added a photo of tappers at the end of the lanes beside the intro, for context (no photo credit supplied)
- SwimStinct page: tappers photo moved to sit beside the intro paragraph; the LEGO Scotch yoke top-view photo rotated 180°
- SwimStinct page: "The housing with the motor and tapping arm in CAD." moved into the row with the CAD and 3D printed housing photos
- Galicia water map page: header animation moved beside the intro and Purpose text, colour key beside the matrix image, and the two "Drawing connections" images set to the same height
- Galicia water map page: reworded the "Identifying gaps with Pablo Gallego Picard" paragraph
- Galicia water map page: added the Kate Orff "Landscape Impacts of Petrochemistry" diagram beside the inspiration text, enlarged to fit the page width
- Galicia water map page: enlarged the spreadsheet, Kumu import and imported-map images
- Media page: shortened the Kumu Project of the Week blurb
- Hip implant page: header image hidden on the page, still used as the Work page highlight image
- Media page: reworded the Fundación RIA x Yale blurb
- Media page: new image for The Social (CTV) interview highlight
- Rocketry payload page: white padding added around the payload module CAD assembly image
- Isochrone, AEMET and Galicia water map pages: new GIFs made from the final presentation slides (isochrone rings, travel modes, and ice cream, beaches and tourist attractions as separate GIFs; AEMET stations and charts; the Kumu map process)
- Amenities GIF split into three; AEMET stations GIF cropped tight
- Galicia water map page: enlarged the sticky-note, loop, import, result and theme images, widened the themes table, shrank the Orff diagram, and replaced the process GIF with the literature review collage
- Media page: restored the original image size (an earlier layout edit had enlarged the news images by accident)
- Microcontroller page: removed the "The circuit running." animation beside the top GIF
- Microcontroller page: restored the breadboard animation beside the top GIF, without its caption
- Microcontroller page: the four lab photos are now a header collage under the cover, the "Controls lab" text is removed, and the PIC16F887 photo lines up with the PedagoBot column
- Site edit from the review doc: new home About, tagline, "Selected projects", publication author lines, link-preview image (`public/og-preview.jpg`) and page titles; Work page grouped under four headings with one-line outcomes (`group` and `outcome` front matter); "Exploring!" renamed "Beyond the lab"
- Project pages rewritten from the doc: capstone (subtitle, fact strip, new copy), rocketry (fact strip, intro, At a glance, 33,528 ft, epoxy baseline wording), EMBL, Higgins Lab, NRC SIFT-MS (April to August 2024), Fundación RIA (retitled, photos cut to five), isochrone, AEMET, Galicia (Sources, Choosing Kumu, reworded themes table), microcontroller and controls labs, programming and database coursework (one SQL snippet), SwimStinct and hip implant (fact strips, α+β alloy, 2.7 removed from the alt text); new optional `subtitle`, `facts` and link `note` fields
- Leadership & Awards list corrected (Future Leader March 2026, OPEF September 2023, no RBC or NCI entries); Junior Worlds, NCI, RBC and The Social entries moved to Beyond the lab; Media split into two groups with fixed descriptions; CV page has a "Download CV (PDF)" button
- EMBL page: the four photos under the intro are now two larger rows (setup + prototype at 13rem tall, whiteboard + beam profile at 14rem tall) instead of one 7rem-tall row
- AEMET page: the Galicia station map is now its own image beside the GIF, which keeps only the website and API maps; both sit in one 22rem-tall row
- Galicia water map page: intro rewritten (audiences, layers, explore rather than read, Kumu Project of the Week); Pablo paragraph attributes "water death" to him; Choosing Kumu cut to two reasons and the "Exploring what Kumu can do" feature tour removed; themes table softened (governance row, groundwater withdrawals, privatization linked by "some sources")
- Galicia water map page: Pablo Gallego Picard is now credited as of Universidade da Coruña; new Sources list under Purpose (The Environment in Galicia: A Book of Images; AEMET climate atlas viewer)
- Media page: removed the two group headings and dividers; items run in one list (research and engineering first, then athletics)
- CV page: removed the "Download CV (PDF)" button
- Beyond the lab: every photo row is now 12.9rem tall (the height of the French Alps rows); the per-entry two-row and tile-height settings on Ontario Cup, rings and bench were removed
- Work page: back to the original tiles (title, year, place, organization, no one-line outcomes) in the original order, now under four headings: Research and instrumentation, Robotics and controls, Spatial data and systems mapping (includes the Kumu water-cycle map), Design projects
- EMBL page: summary line now reads "Characterized the optics of a motorized laser injection system and fixed a misalignment in the mechanical design."
- EMBL page: the "During the summer of 2025" intro now comes before the results paragraph
- EMBL page: the team, EPN Campus, team card, synchrotron and diffractometer photos are all 14rem tall, the same as the laser focusing GIF
