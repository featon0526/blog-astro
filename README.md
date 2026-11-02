# blog-astro

个人博客，基于 [Astro](https://astro.build) 的纯静态站点。文章是仓库里的 Markdown 文件，推送即发布。

线上地址：https://featon0526.github.io/blog-astro/

## 快速开始

```bash
npm install
npm run dev      # 本地预览 http://localhost:4321/blog-astro/
npm run build    # 构建到 dist/
```

## 新增一篇文章

```bash
npm run new -- "文章标题"
```

生成 `src/content/posts/<slug>/index.md`，默认是**草稿**（`draft: true`），不会出现在线上。

写完后把 `draft` 改成 `false`，提交推送即可发布：

```bash
git add .
git commit -m "新增：文章标题"
git push
```

可选参数：

| 参数 | 作用 |
| --- | --- |
| `--slug my-post` | 指定 URL 片段（默认由标题生成） |
| `--tags 技术,设计` | 初始标签 |
| `--publish` | 直接生成已发布状态 |

## 文章 frontmatter

```yaml
---
title: 文章标题
date: "2026-11-02"      # 必须加引号，写成 YYYY-MM-DD
summary: 一句话摘要
tags: [技术, 设计]
draft: false
---
```

`date` 不加引号会被 YAML 当成时间对象，构建时报 `Expected type "string", received "object"`。用 `npm run new` 生成的文章不会有这个问题。

## 放图片

图片**必须**放在与 `index.md` 同一个目录，正文用相对路径引用：

```markdown
![图片说明](./cover.jpg)
```

- 单张图片控制在 1MB 以内，长边 2000px 以内
- 每张图片都要写替代文本（方括号里的内容）
- 音视频文件不要入库，用外部链接嵌入

## 三条规则

1. **草稿不会上线**：`draft: true` 的文章不出现在首页、标签、归档、RSS 和站点地图。
2. **文章地址不可改**：目录名就是 URL，文章一旦公开就不要再改目录名。
3. **仓库是唯一真源**：删除文章前先确认已推送，本地删掉未推送的内容等于永久丢失。

## 目录结构

```
src/content/posts/<slug>/index.md   # 文章正文 + frontmatter
src/content/posts/<slug>/*.jpg      # 该文章的配图
src/content/pages/about.md          # 关于页
src/consts.ts                       # 站点名、描述、导航
src/lib/url.ts                      # 内部链接统一加 base 前缀
astro.config.mjs                    # site / base / sitemap
```

## 发布

推送到 `main` 分支后，GitHub Actions 自动构建并部署到 GitHub Pages。

- 查看部署状态：仓库的 Actions 页，或 `gh run list -R featon0526/blog-astro`
- 部署失败时，线上仍保持上一次成功的版本
- 需要回退：`git revert <commit>` 后重新推送
