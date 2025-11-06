// Plugins
import fs from 'fs'
import path from 'path'

import Vue from '@vitejs/plugin-vue';
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import AutoImport from 'unplugin-auto-import/vite';

import { createHtmlPlugin } from 'vite-plugin-html';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';

// Meta file
import { version } from './package.json';

// Utilities
// import vueDevTools from 'vite-plugin-vue-devtools';

//  Sitemap (Vite)
import Sitemap from 'vite-plugin-sitemap';
const isDev = process.env.NODE_ENV === 'development';
/**
 * 
 * 
 * 
 * 
 * 
 */
// Custom settings
const hostname = isDev ? 'localhost' : 'www.hoshiddamddam.com'
const hostFullUrl = `http://${hostname}`
const hostFullUrlSSL = `https://${hostname}`

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: './dist'    // Renames build dist folder to 'docs' for Github Page   
  },
  plugins: [
    Vue({
      template: { 
        transformAssetUrls,
      },
    }),

    // Vuetify Plugin
    Vuetify({
      styles: {
        configFile: 'src/assets/styles/settings.scss',
      },
    }),

    // Auto imports libraries
    AutoImport({
      imports: [
        'vue', 
        'vue-router',
      ],
      eslintrc: {
        enabled: true,
      },
      dts: 'src/auto-imports.d.ts'
    }),

    // index.html injection plugin
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          HOSTNAME: hostFullUrl,
          HOSTNAME_SSL: hostFullUrlSSL,
          APP_VERSION: JSON.stringify(version),
        }
      }
    }),
    // DevTools (Vue)
    // isDev && vueDevTools(), // Only activates in development mode.

    Sitemap({
      hostname: hostFullUrlSSL,
      dynamicRoutes: [ 
        '/about',
      ],
      exclude: [
        '/admin', 
        '/private'
      ],
      changefreq: 'weekly',
      priority: 1.0,
      lastmod: new Date(),
      readable: false,
      generateRobotsTxt: true,
    }),
  ].filter(Boolean),

  define: { 
    'process.env': {},
    __APP_VERSION__: JSON.stringify(version),
    __HOSTNAME__: JSON.stringify(hostname)
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  ssr: {
    noExternal: [
      'vuetify'
    ]     // For SSR
  },

});
