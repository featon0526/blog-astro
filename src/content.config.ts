import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const isoDate = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, '日期必须写成带引号的 "YYYY-MM-DD"')
  .refine((value) => {
    const [year, month, day] = value.split('-').map(Number);
    const parsed = new Date(Date.UTC(year, month - 1, day));
    return (
      parsed.getUTCFullYear() === year &&
      parsed.getUTCMonth() === month - 1 &&
      parsed.getUTCDate() === day
    );
  }, '日期不存在，请检查年月日')
  .transform((value) => new Date(`${value}T00:00:00+08:00`));

const posts = defineCollection({
  loader: glob({
    base: './src/content/posts',
    pattern: '**/index.md',
    // 显式剥离 index.md，让 id 等于文章目录名（即 URL 片段）
    generateId: ({ entry }) => entry.replace(/\/?index\.md$/, ''),
  }),
  schema: z.object({
    title: z.string().min(1, '标题不能为空'),
    date: isoDate,
    updated: isoDate.optional(),
    summary: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const pages = defineCollection({
  loader: glob({ base: './src/content/pages', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string().min(1),
    summary: z.string().optional(),
  }),
});

export const collections = { posts, pages };
