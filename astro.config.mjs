import { cwd, env } from 'node:process'
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import netlify from '@astrojs/netlify/functions'
import vue from '@astrojs/vue'
import tailwind from '@astrojs/tailwind'
import image from '@astrojs/image'
import { loadEnv } from 'vite'

const { SITE } = loadEnv(env.NODE_ENV, cwd(), '')

// https://astro.build/config
export default defineConfig({
  // site: "https://example.com",
  site: SITE,
  integrations: [mdx(), sitemap(), vue(), tailwind(), image()],
  output: 'server',
  adapter: netlify(),
})
