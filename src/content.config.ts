import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    // One line on what changed because of this work. Shown on the homepage.
    outcome: z.string(),
    company: z.string(),
    year: z.number(),
    role: z.string(),
    team: z.string().optional(),
    tagline: z.string().optional(),
    cover: z.string().optional(),
    // Headline results, shown as a row on the case study page.
    impact: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    order: z.number().default(99),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work };
