import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),            // تاریخ شمسی برای نمایش
    tags: z.array(z.string()),
    readingTime: z.number(),
    excerpt: z.string(),
  }),
});

export const collections = { posts };
