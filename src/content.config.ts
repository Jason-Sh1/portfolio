import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each project is one markdown file, rendered as a datasheet.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    /** Part number, e.g. "IP-1". */
    code: z.string().regex(/^[A-Z]{2}-\d$/),
    date: z.coerce.date(),
    /** Position in the selection table; lower comes first. */
    order: z.number().int(),
    /** One line for the selection table. */
    function: z.string().max(90),
    summary: z.string().max(320),
    status: z.enum(['Shipped', 'In progress', 'Hackathon build']),
    award: z.string().optional(),
    team: z.string().optional(),
    tags: z.array(z.string()).default([]),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    features: z.array(z.string()).min(2),
    specs: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    /** Functional block diagram: stages left to right. */
    pipeline: z.array(z.object({ label: z.string(), detail: z.string().optional() })).min(2),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
