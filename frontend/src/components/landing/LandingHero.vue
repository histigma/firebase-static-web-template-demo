<template>
  <section class="hero section-pad-normal">
    <VContainer fluid class="pa-0 ma-0">
    <v-defaults-provider 
        :defaults="{ 
            VBtn: { variant: 'outlined', color: '#eee' } 
            }
        ">

        <VCarousel 
            class="crossfade-carousel" 
            :height="$vuetify.display.xxl ? '1200px' : '77vh'"
            :hide-delimiters="!$vuetify.display.smAndDown"
            hide-delimiter-background
            :show-arrows="!$vuetify.display.smAndDown"
            next-icon="fa-thin fa-arrow-right"
            prev-icon="fa-thin fa-arrow-left"
            delimiterIcon="fa-solid fa-circle"
            :interval="5000" 
            cycle      
            touch
        >
            <VCarouselItem
            v-for="(el, i) in bannerItems"
            :key="i"
            :src="$vuetify.display.smAndDown ? el.srcMobile : el.src"
            transition="crossfade"
            reverse-transition="crossfade"
            cover
            >
            <template #default>
                <div class="position-relative h-100">
                <div class="overlay"></div>
                <div class="d-flex align-center justify-center flex-column h-100" style="position: relative; z-index: 2;">
                    <VSpacer></VSpacer>
                    <h1 class="banner-header text-h4 text-md-h2 text-light font-weight-regular text-center jua-regular">
                      <span class="text-h6 text-md-h5 text-light font-weight-regular">&nbsp;My Awesome Homepage</span>
                      <strong class="font-weight-bold">&nbsp;Awesome Page</strong>
                    </h1>
                    <p class="text-body-1 text-md-h5 text-light font-weight-regular text-center mt-8 mt-md-12 mt-lg-16"
                        style="line-height: 2.25em;">
                        {{ el.text }}
                    </p>
                    <VSpacer></VSpacer>
                    <VBtn class="rounded-xl"
                        variant="outlined"
                        size="x-large"
                        @click="scrollToBottom('start')"
                    >   
                        <span class="text-h6 mx-1 mx-md-2 font-weight-regular">
                            More
                            <VIcon size="18">fa-thin fa-magnifying-glass</VIcon>
                        </span>
                    </VBtn>
                    <VSpacer></VSpacer>
                </div>
                </div>
            </template>
            </VCarouselItem>
        </VCarousel>
    </v-defaults-provider>
    </VContainer>
    <div id="start"></div>
  </section>
</template>

<script setup>
import bannerFirstMobile from '@/assets/images/banner/main/banner1.jpeg'
import bannerFirst from '@/assets/images/banner/main/banner1.jpeg'
import bannerSecondMobile from '@/assets/images/banner/main/banner2.jpeg'
import bannerSecond from '@/assets/images/banner/main/banner2.jpeg'
import bannerThirdMobile from '@/assets/images/banner/main/banner3.jpeg'
import bannerThird from '@/assets/images/banner/main/banner3.jpeg'

const bannerItems = [
    { 
        src: bannerFirst, 
        srcMobile: bannerFirstMobile,
        text: 'This is a first subtitle' 
    },
    { 
        src: bannerSecond, 
        srcMobile: bannerSecondMobile,
        text: 'This is a second subtitle' 
    },
    { 
        src: bannerThird, 
        srcMobile: bannerThirdMobile,
        text: 'This is a third subtitle' 
    },
]


function scrollToBottom(elementId) {
  document.getElementById(elementId).scrollIntoView({
    behavior: 'smooth'
  })
}
</script>


<style scoped lang="scss">
@use '@/assets/styles/_index.scss' as styles;


.crossfade-carousel {
  height: 100%;
  background: linear-gradient(135deg, #e0d7c7, #ffffff);
  // border-radius: 50px;
}

.crossfade-carousel :deep(.v-window-item) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.crossfade-carousel :deep(.v-window__container) {
  position: relative;
  overflow: hidden;
}

.crossfade-carousel :deep(.v-window__container) {
  isolation: isolate;
}

.crossfade-carousel :deep(.v-window-item) {
  // mix-blend-mode: plus-lighter;
}

.crossfade-enter-active,
.crossfade-leave-active {
  // transition: all 0.7s cubic-bezier(0.25, 0.8, 0.5, 1);
  transition: opacity 0.7s ease-in-out;
}

.crossfade-leave-from,
.crossfade-leave-to {
  position: absolute !important;
  top: 0;
  width: 100%;
}

.crossfade-enter-from,
.crossfade-leave-to {
  opacity: 0;
}

.overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.banner-header {
    display: flex;
    flex-direction: column;
    line-height: 1.2;
    // text-align: center;
    span {
      letter-spacing: 0.8em !important;
    }
    strong {
      letter-spacing: 1em !important;
    }
}

</style>
