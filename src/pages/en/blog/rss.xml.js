import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET({ site }) {
  const posts = (await getCollection('blog', ({ data, slug }) => !data.draft && slug.startsWith('en/')))
    .sort((a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime());

  const items = posts.slice(0, 20).map((post) => ({
    title: post.data.title,
    description: post.data.description,
    pubDate: post.data.pubDate,
    link: `/en/blog/${post.slug.replace(/^en\//, '')}`,
    categories: post.data.tags || [],
  }));

  return rss({
    title: 'Marce Anahata Blog (EN)',
    description: 'Feed of all English blog posts from Marce Anahata.',
    site,
    items,
    stylesheet: true,
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
    },
  });
}
