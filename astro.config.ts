import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import netlify from '@astrojs/netlify/functions'
import vue from '@astrojs/vue'
import tailwind from '@astrojs/tailwind'
import { loadEnv } from 'vite'

const { SITE } = loadEnv(process.env.NODE_ENV, process.cwd(), '')

// https://astro.build/config
export default defineConfig({
  // site: "https://example.com",
  site: SITE,
  integrations: [mdx(), sitemap(), vue(), tailwind()],
  output: 'server',
  adapter: netlify(),
})
