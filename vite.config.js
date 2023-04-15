import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass'
import autoprefixer from 'autoprefixer'
import sortMediaQueries from 'postcss-sort-media-queries'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()],
    resolve: {
      alias: {
        src: path.resolve('src/'),
      },
    },
    build: {
      manifest: {
        name: "Nyxy Portfolio",
        start_URL: "/"
      },
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