# Aditya Singha Portfolio

A personal portfolio and blog built with Next.js, React, and Tailwind CSS. The site showcases work, services, social links, about information, and a Markdown-powered blog.

Live site: https://portfolio-aditya-singhas-projects.vercel.app

## Overview

This project is a custom portfolio website focused on a clean, modern design and editable content. It is configured around a content file in `data/portfolio.json` and a blog system backed by Markdown files in `_posts/`.

## Tech Stack

- Next.js 12
- React 18
- Tailwind CSS
- GSAP for section animations
- `next-themes` for dark mode support
- `gray-matter`, `remark`, and `remark-html` for blog content rendering

## Features

- Responsive portfolio homepage
- Project cards with links and tech stack tags
- Services and about sections
- Social links and contact information
- Dark mode support
- Markdown-based blog listing and post details
- Development-only dashboard at `/edit` to update portfolio content
- Content-driven structure using JSON and Markdown files

## Project Structure

```bash
.
├── _posts/                  # Markdown blog posts
├── animations/              # GSAP animation helpers
├── components/              # Reusable UI components
├── data/
│   └── portfolio.json       # Main portfolio content source
├── pages/
│   ├── api/
│   │   ├── blog/            # Blog management API routes
│   │   └── portfolio.js     # Dev-only JSON save route
│   ├── blog/
│   │   ├── [slug].js        # Individual post page
│   │   └── index.js         # Blog listing page
│   ├── _app.js
│   ├── edit.js              # Dashboard for editing content
│   ├── index.js             # Homepage
│   └── resume.js            # Resume page
├── public/
│   └── images/
├── styles/
├── utils/
│   ├── api.js               # Blog post retrieval utility
│   ├── index.js
│   └── markdownToHtml.js
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── README.md
├── yarn.lock
└── .eslintrc.json
```

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
yarn install
```

3. Run the app locally:

```bash
yarn dev
```

4. Open the site in your browser:

```bash
http://localhost:3000
```

## Production Build

```bash
yarn build
yarn start
```

## Customizing the Portfolio

The portfolio data is stored in `data/portfolio.json`.

This file contains fields like:

- `name`
- `headerTaglineOne` to `headerTaglineFour`
- `socials`
- `projects`
- `services`
- `aboutpara`
- `resume`
- `showBlog`, `showResume`, `showCursor`, `darkMode`

Edit this file or use the development dashboard to update the content without modifying the page structure.

## Development Editor

When running in development mode, the app exposes a dashboard at `/edit`.

It allows changes to:

- header text
- project listings
- services
- social links
- resume information

The page posts updates to `pages/api/portfolio.js`, which writes the JSON back to `data/portfolio.json`.

> This editing flow is intentionally limited to development mode.

## Blog Posts

Blog posts are Markdown files in `_posts/` and are parsed using `gray-matter` and `remark`.

A typical post includes frontmatter such as:

```md
---
date: '2022-07-15T11:50:54.000Z'
title: Amazing Blog
preview: A short summary of the article
image: https://example.com/image.jpg
---

# Heading One

Your blog content here.
```

Posts are listed at `/blog` and read at `/blog/[slug]`.

## Deployment

This project is compatible with Vercel and other standard Next.js hosting platforms.

Typical deployment flow:

1. Push the repo to GitHub
2. Import it into Vercel
3. Use the default Next.js build settings
4. Deploy

## Scripts

```bash
yarn dev      # local development server
yarn build    # production build
yarn start    # production server
yarn lint     # lint checks
```

## Notes

- The content is intentionally data-driven, which makes customization simple.
- Some values in `data/portfolio.json` are personal to the current owner and should be replaced with your own details.
- Blog and edit functionality are designed primarily for development use.

## License

This project is provided as-is for personal and educational use.
