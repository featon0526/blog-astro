#!/usr/bin/env node
import { access, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const POSTS_DIR = path.resolve('src/content/posts');

const args = process.argv.slice(2);
const flags = new Set(args.filter((arg) => arg.startsWith('--')));
const positional = args.filter((arg) => !arg.startsWith('--'));

const title = positional[0];
if (!title) {
  console.error('用法: npm run new -- "文章标题" [--slug my-slug] [--tags 标签1,标签2] [--publish]');
  process.exit(1);
}

const getFlagValue = (name) => {
  const index = args.indexOf(`--${name}`);
  return index !== -1 ? args[index + 1] : undefined;
};

const toSlug = (input) =>
  input
    .trim()
    .toLowerCase()
    .replace(/['"“”‘’]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/[^\p{L}\p{N}-]/gu, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

const slug = toSlug(getFlagValue('slug') ?? title) || `post-${Date.now()}`;
const tags = (getFlagValue('tags') ?? '')
  .split(',')
  .map((tag) => tag.trim())
  .filter(Boolean);

const today = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Asia/Shanghai',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
}).format(new Date());

const dir = path.join(POSTS_DIR, slug);
try {
  await access(dir);
  console.error(`文章目录已存在: ${dir}`);
  process.exit(1);
} catch {
  // 目录不存在才继续
}

const frontmatter = [
  '---',
  `title: ${JSON.stringify(title)}`,
  `date: "${today}"`,
  'summary: ""',
  `tags: [${tags.map((tag) => JSON.stringify(tag)).join(', ')}]`,
  `draft: ${flags.has('--publish') ? 'false' : 'true'}`,
  '---',
  '',
].join('\n');

const body = `在这里开始写正文。

<!--
图片直接放进这个目录，然后在正文里用相对路径引用：

![图片说明](./example.jpg)

单张图片请控制在 1MB 以内。
-->
`;

await mkdir(dir, { recursive: true });
await writeFile(path.join(dir, 'index.md'), `${frontmatter}\n${body}`, 'utf8');

console.log(`已创建: src/content/posts/${slug}/index.md`);
if (!flags.has('--publish')) {
  console.log('当前是草稿（draft: true）。写完后改成 draft: false 再推送即可发布。');
}
