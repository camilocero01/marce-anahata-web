import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Accept dates in frontmatter (will coerce to Date)
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Marce Anahata'),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    // Slug is optional because Astro provides `entry.slug`
    slug: z.string().optional(),
    draft: z.boolean().optional(),
  })
});

export const collections = { blog };
