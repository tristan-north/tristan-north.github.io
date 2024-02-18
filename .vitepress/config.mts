import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  title: "Tristan North",
  description: "Personal website of Tristan North",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Projects', link: '/projects' },
      { text: 'Machine Learning', link: '/mlnotes' },
      { text: 'VFX Work', link: '/vfxwork' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tristan-north' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/tristan-north-0795878b/' }
    ]
  }
})
