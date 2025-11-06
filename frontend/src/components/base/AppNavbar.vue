<template>
  <VAppBar app flat light 
    class="appbar"
    scroll-behavior="elevate"
    border="sm"
  >
    <VSpacer class="hidden-sm-and-down"></VSpacer>
    <VToolbarTitle
      class="justify-end"
    >
      <a href="/">
        <VImg
          src="@/assets/images/logo.png"
          maxHeight="40px"
          eager
        >
        </VImg>
      </a>
    </VToolbarTitle>
    <VSpacer class="hidden-sm-and-down"></VSpacer>
    <nav class="hidden-sm-and-down">
      <ul class="navlist">
        <li v-for="(m, idx) in menu" :key="idx">
          <VBtn
            :to="m.type === 'route' ? m.link : undefined"
            :href="m.type === 'href' ? m.link : undefined"
            :rel="m.type === 'href' ? 'noopener noreferrer external' : undefined"
            :target="m.type === 'href' ? '_blank' : undefined"
            variant="plain"
            class="navbtn"
          >
            {{ m.name }}
            <VIcon v-if="m.type === 'href'" size="14" style="padding-left: 6px;">
              fa-solid fa-arrow-up-right-from-square
            </VIcon>
          </VBtn>
        </li>
      </ul>
    </nav>
    <VSpacer></VSpacer>
    <div class="hidden-md-and-up">
      <VAppBarNavIcon 
        @click="drawer = !drawer" 
        icon="fa-solid fa-bars"
      />
    </div>
  </VAppBar>
  <VNavigationDrawer v-model="drawer" location="right" temporary>
    <VList>
      <VListItem v-for="(m, idx) in menu" :key="idx" :to="m.link">
        {{ m.name }}
      </VListItem>
    </VList>
  </VNavigationDrawer>
</template>

<script setup>

const drawer = ref(false)

const menu = [
  {
    'name': 'Home',
    'type': 'route',
    'link': '/'
  },
  {
    'name': 'About',
    'type': 'route',
    'link': '/about'
  },
  {
    'name': 'External Link',
    'type': 'href',
    'link': ''
  },
]

</script>

<style scoped lang="scss">
@use '@/assets/styles/_index.scss' as styles;

.navlist {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 0;
  padding: 0;
}

li {
  display: flex; 
  justify-content: center;
  align-items: center;
}

.appbar {
  opacity: 0.7;
}

:deep(.v-btn.navbtn) {
  font-weight: bold !important;
}


</style>

