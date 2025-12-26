import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime());

  const items = posts.slice(0, 20).map((post) => ({
    title: post.data.title,
    description: post.data.description,
    pubDate: post.data.pubDate,
    link: `/blog/${post.slug}`,
    categories: post.data.tags || [],
  }));

  return rss({
    title: 'Blog | Marce Anahata',
    description: 'Artículos de bienestar, yoga, rituales y salud holística.',
    site: context.site,
    items,
    stylesheet: true,
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
    },
  });
}
