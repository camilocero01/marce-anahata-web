import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const tagSet = new Set();
  for (const p of posts) {
    for (const t of (p.data.tags || [])) tagSet.add(t);
  }
  return Array.from(tagSet).map((tag) => ({ params: { tag } }));
}

export async function GET({ params, site }) {
  const { tag } = params;
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .filter((p) => (p.data.tags || []).includes(tag))
    .sort((a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime());

  const items = posts.slice(0, 20).map((post) => ({
    title: post.data.title,
    description: post.data.description,
    pubDate: post.data.pubDate,
    link: `/blog/${post.slug}`,
    categories: post.data.tags || [],
  }));

  return rss({
    title: `Artículos sobre "${tag}" | Marce Anahata`,
    description: `Feed de artículos relacionados con ${tag}.`,
    site,
    items,
    stylesheet: true,
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
    },
  });
}
