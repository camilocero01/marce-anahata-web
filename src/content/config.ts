import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    author: z.string().default('Marce Anahata'),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    canonical: z.string().url().optional(),
    ogImage: z.string().optional()
  })
});

export const collections = { blog };
