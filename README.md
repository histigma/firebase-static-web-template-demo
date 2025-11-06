# Firebase Static Web Hosting Template

This template should help get you started developing with Vue 3 in Vite.
How can we build a static website using Vue.js?
Generally, Vue.js supports only SPA rendering, but if you set up the Vite SSG plugin, you can serve the site as a static website.

**Contact: histigma01@gmail.com**

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Firebase

This template depends on Firebase Web Hosting, so you need to create a new hosting instance for it.  
If you want to set up Firebase Hosting, follow this link:
[Firebase Hosting](https://firebase.google.com/docs/hosting)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

### Github Actions

Enter your Firebase Hosting configuration to .github/workflows/firebase-hosting.yml

```bash
      - name: Create .env file from secrets
        run: |
          echo "VITE_API_URL=https://localhost:8000" >> .env
          echo "VITE_FB_API_KEY=${{ secrets.VITE_FB_API_KEY }}" >> .env
          echo "VITE_FB_MSG_SENDER_ID=${{ secrets.VITE_FB_MSG_SENDER_ID }}" >> .env
          echo "VITE_FB_APP_ID=${{ secrets.VITE_FB_APP_ID }}" >> .env
          echo "VITE_FB_MEASUREMENT_ID=${{ secrets.VITE_FB_MEASUREMENT_ID }}" >> .env
          echo "VITE_FB_AUTH_DOMAIN=<<YourWebsiteDomain>>.firebaseapp.com" >> .env
          echo "VITE_FB_PROJECT_ID=<<YourFirebasePorjectID>>" >> .env
          echo "VITE_FB_STORAGE_BUCKET=<<YourFirebaseStorageBucketID>>.firebasestorage.app" >> .env
```

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

## Envrionment Setup

### Workflow

```sh
pnpm create vue@latest
# Router, Pinia, ESLint, Prettier

# SASS
pnpm add -D sass sass-embedded

# Vuetify3
pnpm i -D vuetify vite-plugin-vuetify

# Font Awesome
pnpm add @fortawesome/fontawesome-free

# Motion effect
pnpm add motion-v

# Vue component / Font inject automatic
# pnpm add -D unplugin-vue-components
pnpm add -D unplugin-auto-import unplugin-fonts

# For inject data to index.html
pnpm add -D vite-plugin-html

# Sitemap auto generation
pnpm add -D vite-plugin-sitemap

# for web static serve
pnpm add -D vite-ssg

# for Optimization of SEO
pnpm install --save vue-meta

```

### Eslint & Prettier for Vue.js

``yarn add -D prettier@^3.1.0 eslint@^8.52.0 prettier-eslint@^16.1.2 vue-eslint-parser@^8.0.0``
