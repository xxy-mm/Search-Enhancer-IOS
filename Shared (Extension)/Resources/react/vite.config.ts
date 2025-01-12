import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        popup: resolve(__dirname, 'popup/index.html'),
      },
      output: {
        entryFileNames: 'assets/[name].js', // Entry files
        chunkFileNames: 'assets/[name].js', // Dynamic imports
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
})
