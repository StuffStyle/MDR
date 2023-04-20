---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "你一切想知道的"
  text: "都在这里"
  tagline: 回响项目组资料库
  actions:
    - theme: brand
      text: 查找资料
      link: /check
    - theme: alt
      text: 资讯
      link: /news
      
---
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>
