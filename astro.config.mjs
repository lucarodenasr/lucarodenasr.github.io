import { defineConfig } from 'astro/config'
import githubPages from '@astrojs/github-pages'

export default defineConfig({
  site: 'https://lucarodenasr.github.io',
  integrations: [githubPages()]
})