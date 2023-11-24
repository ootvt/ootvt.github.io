import { defineConfig } from 'vitepress'

import { RssPlugin, RSSOptions } from 'vitepress-plugin-rss'
const baseUrl = 'https://ootvt.github.io/'
const RSS: RSSOptions = {
  title: 'ootvt',
  baseUrl,
  copyright: 'Copyright (c) 2023-present, ootvt',
}
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ootvt",
  description: "A ootvt site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
    ],

    sidebar: [
      {
        text: '2023',
        items: [
          { text: '第一篇博客', link: '/2023/第一篇博客' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: '/' }
    ]
  },
  vite: {
    // ↓↓↓↓↓
    plugins: [RssPlugin(RSS)]
    // ↑↑↑↑↑
  }
})



