import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        feed: resolve(__dirname, 'src/pages/feed.html'),
        feeds: resolve(__dirname, 'src/pages/feeds.html'),
        article: resolve(__dirname, 'src/pages/article.html'),
        articles: resolve(__dirname, 'src/pages/articles.html'),
      },
    },
  },
})
