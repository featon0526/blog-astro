const BASE = import.meta.env.BASE_URL;

/**
 * 给站内路径补上 base 前缀。
 * 项目站点部署在 /<repo>/ 下，任何内部链接都必须经过这里，否则会 404。
 */
export function withBase(path = '/'): string {
  const base = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}

export function postUrl(slug: string): string {
  return withBase(`/posts/${slug}/`);
}

export function tagUrl(tag: string): string {
  return withBase(`/tags/${tagSlug(tag)}/`);
}

/**
 * 标签转 URL 片段：空白与斜杠统一替换为短横线，保留中文。
 * 链接与路由生成必须共用这一个函数，保证两者一致。
 */
export function tagSlug(tag: string): string {
  return tag.trim().replace(/[\s/]+/g, '-').toLowerCase();
}
