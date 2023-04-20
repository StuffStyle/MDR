import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RST资料库",
  description: "回响项目组资料库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '资讯', link: '/news' }
    ],

    sidebar: [
      {
        text: '资料分类',
        items: [
          { text: 'Novel', link: '/novel' },
          { text: 'Music&Video', link: '/music&video' }，
          { text: 'Coding', link: '/coding' }，
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/StuffStyle' }
    ]
  }
})
