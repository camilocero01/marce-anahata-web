import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const posts = await getCollection('blog', ({ data, slug }) => !data.draft && slug.startsWith('en/'));
  const tagSet = new Set();
  for (const p of posts) {
    for (const t of (p.data.tags || [])) tagSet.add(t);
  }
  return Array.from(tagSet).map((tag) => ({ params: { tag } }));
}

export async function GET({ params, site }) {
  const { tag } = params;
  const posts = (await getCollection('blog', ({ data, slug }) => !data.draft && slug.startsWith('en/') ))
    .filter((p) => (p.data.tags || []).includes(tag))
    .sort((a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime());

  const items = posts.slice(0, 20).map((post) => ({
    title: post.data.title,
    description: post.data.description,
    pubDate: post.data.pubDate,
    link: `/en/blog/${post.slug.replace(/^en\//, '')}`,
    categories: post.data.tags || [],
  }));

  return rss({
    title: `Posts about "${tag}" | Marce Anahata (EN)` ,
    description: `Feed of English articles related to ${tag}.`,
    site,
    items,
    stylesheet: true,
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
    },
  });
}
