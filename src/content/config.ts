import { defineCollection, z } from 'astro:content';
const BlogCollections = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        author: z.string(),
        image: z.string(),
        tags: z.array(z.string()),
    })
});

export const collections = {
    blog: BlogCollections,
};
