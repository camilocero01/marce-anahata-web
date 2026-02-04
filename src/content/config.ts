import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    author: z.string().default('Marce Anahata'),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    canonical: z.string().url().optional(),
    ogImage: z.string().optional(),
    // Campos para eventos
    isEvent: z.boolean().default(false),
    eventDate: z.coerce.date().optional(),
    eventTime: z.string().optional(),
    eventLocation: z.string().optional(),
    eventType: z.enum(['presencial', 'online', 'hibrido']).optional(),
    eventCapacity: z.number().optional(),
    eventPrice: z.number().optional(),
    featured: z.boolean().default(false)
  })
});

export const collections = { blog };
