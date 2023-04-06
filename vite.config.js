import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass';
import autoprefixer from 'autoprefixer'
import sortMediaQueries from 'postcss-sort-media-queries'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()],
    build: {
      css: {
        preprocessorOptions: {
          scss: {
            implementation: sass
          },
        },
        postcss: {
          plugins: [
            autoprefixer(),
            sortMediaQueries({
              sort: 'desktop-first'
            })
          ]
        }
        }
      }
  })