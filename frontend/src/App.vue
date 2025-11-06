<script setup>
import AppNavbar from './components/base/AppNavbar.vue';
import AppFooter from './components/base/AppFooter.vue';

import { useSeoMeta, useHead } from '@vueuse/head'
import { 
  defaultMeta, 
  SdOrganization,
  SdBuisiness 
} from './globalMeta.js'

useSeoMeta(defaultMeta);
useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify(SdOrganization),
    },
    {
      type: "application/ld+json",
      children: JSON.stringify(SdBuisiness),
    }
  ]
})

</script>

<template>
  <VApp>
    <AppNavbar/>
    <VMain id="main">
      <RouterView :key="$route.fullPath" />
    </VMain>
    <AppFooter/>
  </VApp>
</template>

<style scoped>
</style>
