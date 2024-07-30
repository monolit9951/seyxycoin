import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg?react',
    }),
  ],
  resolve: {
    alias: {
      assets: '/src/assets',
      components: '/src/components',
      styles: '/src/styles',
    },
  },
  server: {
    port: 3000,
  },
})
