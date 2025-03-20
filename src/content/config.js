// src/content/config.js
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        date: z.date(),
        image: z.string().optional(),
        excerpt: z.string(),
        author: z.string().default('A Baker\'s Confession'),
    }),
});

export const collections = {
    'blog': blogCollection,
};