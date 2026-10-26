import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * One Markdown file in src/content/projects/ = one project tile + one project page.
 * Add a project: copy an existing file, change the front matter, drop images in src/assets/projects/<slug>/.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(), // one factual sentence, shown on the project page and used for SEO
      hideLede: z.boolean().optional(), // keep the summary for SEO but don't show it under the title
      year: z.string(), // "2025" or "2025–26"
      place: z.string().optional(), // city / lab / campus
      organization: z.string().optional(),
      section: z.enum(['work', 'explore']).default('work'),
      group: z.enum(['research', 'robotics', 'spatial', 'design']).optional(), // Work page heading the card sits under
      subtitle: z.string().optional(), // formal title shown under the h1
      facts: z.array(z.object({ label: z.string(), value: z.string() })).optional(), // replaces the default field list
      outcome: z.string().optional(), // one-line outcome shown under the card title on the Work page
      role: z.string().optional(),
      order: z.number(), // lower = earlier in the grid
      latest: z.number().optional(), // pin to the home page "Latest projects" row; lower = further left
      cover: image().optional(),
      coverAlt: z.string().default(''),
      galleryHeading: z.string().optional(), // heading above the image gallery
      linksHeading: z.string().default('Links'), // heading above the links list at the foot of the page
      hideCover: z.boolean().default(false), // keep the cover for the Work grid tile but don't show it on the page
      fit: z.enum(['cover', 'contain']).default('cover'), // contain = show whole figure on a plate
      focal: z.string().default('center'), // CSS object-position
      plate: z.string().default('#f1f2f4'), // background behind "contain" images
      wide: z.boolean().default(false), // 2-column tile for landscape screenshots
      compact: z.boolean().default(false), // smaller images on the project page
      galleryColumns: z.number().optional(), // lay the gallery out as an even grid of this many equal-width columns
      galleryHeight: z.number().optional(), // show every gallery image at this height (rem), wrapping in rows
      sectionLinksWidth: z.number().optional(), // width of the section-link tiles in rem (default 13)
      tileRatio: z.number().optional(), // Work grid: show the cover at this width/height ratio (cropped to fit) so a row of tiles lines up
      mediaWide: z.boolean().optional(), // let the inline video and `full` figures run wider than the text column
      coverCaption: z.string().optional(), // plain-text caption under the header image
      coverWidth: z.number().optional(), // cap the header image width on the project page, in rem (default 52)
      twoRows: z.number().optional(), // Exploring! photos fill exactly 2 rows; value = summed aspect ratio of the first row (+ slack)
      tileHeight: z.number().optional(), // Exploring! photo height for this project, in rem (default 10)
      textWidth: z.number().optional(), // width of the main text column in rem (default: the page measure)
      rich: z.boolean().default(false), // wide page column: text on the left, figures floated to the right (see src/plugins/rehype-figures.mjs)
      tags: z.array(z.enum(['instrumentation', 'data', 'robotics'])).default([]), // Work page filters
      tools: z.array(z.string()).default([]),
      // Extra images shown under the text at their own aspect ratios, each with an optional caption
      gallery: z
        .array(z.object({ src: image(), alt: z.string(), caption: z.string().optional(), wide: z.boolean().default(false) }))
        .default([]),
      // Documents shown inline on the project page (files live in public/); ratio = width / height.
      // kind 'pdf' = PDF viewer, 'html' = an HTML page in a frame (e.g. an exported notebook)
      embeds: z
        .array(z.object({ label: z.string(), src: z.string(), kind: z.enum(['pdf', 'html']).default('pdf'), ratio: z.number().default(0.77), maxRem: z.number().default(46), openLabel: z.string().optional(), viewSrc: z.string().optional() /* a different file to show inline (the `src` file stays the open/download link) */, intro: z.string().optional() /* a sentence under the heading, above the document */ }))
        .default([]),
      // Screen recordings shown inline (MP4 files live in public/video/); played with controls, muted
      videos: z
        .array(z.object({ src: z.string(), poster: z.string().optional(), label: z.string().optional(), alt: z.string(), caption: z.string().optional(), ratio: z.number().default(1.78), maxRem: z.number().default(62) }))
        .default([]),
      // A second image shown beside the cover at the top of the page
      coverAside: z.object({ src: image(), alt: z.string(), caption: z.string().optional(), heightRatio: z.number().optional() /* aside height as a fraction of the cover's */ }).optional(),
      // Prominent link cards shown under the cover: a thumbnail, a title, a short note and the site name
      linkCards: z
        .array(z.object({ title: z.string(), href: z.string().url(), image: image(), alt: z.string().default(''), site: z.string(), note: z.string().optional() }))
        .default([]),
      // A row of photo tiles under the cover; each heading links to a section further down the page
      sectionLinks: z
        .array(z.object({ label: z.string(), href: z.string(), image: image(), focal: z.string().default('center'), fit: z.enum(['cover', 'contain']).default('cover') }))
        .default([]),
      links: z.array(z.object({ label: z.string(), href: z.string().url(), note: z.string().optional() })).default([]),
      // Flags shown in the build preview and listed in README until resolved
      placeholder: z.string().optional(), // e.g. "Temporary image"
      notice: z.string().optional(), // replaces the default stand-in sentence on the project page
      status: z.enum(['complete', 'in-progress']).default('complete'),
      draft: z.boolean().default(false),
    }),
});

/**
 * One Markdown file in src/content/leadership/ = one entry on the Leadership & Awards page.
 * Photos live in src/assets/leadership/. Tiles are a uniform 4:3; use `focal` to steer the crop.
 */
const leadership = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/leadership' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      org: z.string().optional(), // organisation and/or place
      dates: z.string().optional(), // "April 2026", "September 2025–present"
      layout: z.enum(['tiles', 'gallery']).default('tiles'), // gallery = uncropped photos with a lightbox
      oneRow: z.boolean().default(false), // gallery photos shown in a single row
      matchRow: z.object({ ratio: z.number(), count: z.number() }).optional(), // one-row gallery sized to the same photo height as another one-row gallery (its summed aspect ratio and photo count)
      order: z.number(), // lower = earlier on the page
      images: z
        .array(z.object({ src: image(), alt: z.string(), focal: z.string().default('center') }))
        .default([]),
      links: z.array(z.object({ label: z.string(), href: z.string().url() })).default([]),
      draft: z.boolean().default(false),
    }),
});

/**
 * One Markdown file in src/content/exploring/ = one entry on the Exploring! page.
 * Same shape as leadership, plus `group` to say which section it sits in. Photos live in src/assets/explore/.
 */
const exploring = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/exploring' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      org: z.string().optional(),
      dates: z.string().optional(),
      group: z.enum(['athletics', 'france', 'other']),
      layout: z.enum(['tiles', 'gallery']).default('tiles'), // gallery = full-width masonry with a lightbox, for 8+ photos
      maxRem: z.number().optional(), // cap the gallery width (rem) so a twoRows gallery gets smaller photos
      twoRows: z.number().optional(), // uniform gallery sized to fill exactly 2 rows; value = summed aspect ratio of the longer row (+ a little slack)
      order: z.number(),
      images: z
        .array(z.object({ src: image(), alt: z.string(), focal: z.string().default('center') }))
        .default([]),
      links: z.array(z.object({ label: z.string(), href: z.string().url() })).default([]),
      draft: z.boolean().default(false),
    }),
});

/**
 * One Markdown file in src/content/news/ = one item on the News page (articles, interviews, videos about her).
 * Headline links to the outlet; `href` is the exact article or video URL. Photos live in src/assets/news/.
 * Set `draft: true` to keep an item off the site until its link is confirmed.
 */
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(), // the headline as published
      titlePrefix: z.string().optional(), // plain word(s) shown before the linked headline, e.g. "Watch"
      titleSuffix: z.string().optional(), // plain word(s) shown after the linked headline, e.g. "Payload"
      outlet: z.string(), // e.g. "Cycling Canada"
      date: z.coerce.date(), // used for sorting
      dateLabel: z.string().optional(), // shown instead of the full date when the source gives less (e.g. "2026")
      blurb: z.string().optional(), // one line shown under the headline
      href: z.string().url(),
      kind: z.enum(['article', 'video']).default('article'),
      group: z.enum(['research', 'athletics']).default('research'), // which Media heading the item sits under
      image: image(),
      alt: z.string(),
      focal: z.string().default('center'),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects, leadership, exploring, news };
