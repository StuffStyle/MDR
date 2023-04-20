import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RST资料库",
  description: "回响项目组资料库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '资讯', link: '/news/index.md' }
    ],

    sidebar: [
      {
        text: '资料分类',
        items: [
          { text: 'Novel', link: '/novel/index.md' },
          { text: 'Music&Video', link: '/music&video/index.md' }，
          { text: 'Coding', link: '/coding/index.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/StuffStyle' }
    ]
  }
})

