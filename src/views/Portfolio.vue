<script setup lang="ts">
import Calendar from 'vue-material-design-icons/Calendar.vue'
import Web from 'vue-material-design-icons/Web.vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { router } from '@/router/router'
import { useI18n } from 'vue-i18n'
import { ref, type Ref } from 'vue'
import { computed } from 'vue'

export type PortfolioItem = {
  name: string
  description: string
  mainImage: string
  images: string[]
  technologies: string[]
  projectDate: string
  website?: {
    name: string
    url: string
  }
}

const { tm } = useI18n()
const portfolioItems: Ref<PortfolioItem[]> = ref(tm('portfolio.items'))
const selectedItem = computed(
  () => portfolioItems.value[Number(router.currentRoute.value.params.id) - 1]
)
</script>
<template>
  <div v-if="selectedItem" class="container pb-10">
    <div class="text-5xl font-bold pt-16 pb-12">{{ selectedItem.name }}</div>
    <div class="grid grid-cols-3 gap-5">
      <div class="col-span-2">
        <Carousel :items-to-show="1" :autoplay="3000">
          <Slide v-for="slide in selectedItem.images" :key="slide">
            <img class="rounded-2xl cursor-pointer" :src="slide" />
          </Slide>

          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </div>
      <div class="bg-grey-blue border-[#2b2f3e] border-2 rounded-lg py-6 px-5">
        <div class="text-2xl font-semibold">{{ $t('portfolio.descriptionText') }}</div>
        <div class="flex mt-2">
          <Calendar class="mr-2" :size="25" fillColor="#d0bb79" /> {{ selectedItem.projectDate }}
        </div>
        <div v-if="selectedItem.website" class="flex mt-1">
          <Web class="mr-2" :size="25" fillColor="#d0bb79" />
          <a target="_blank" :href="selectedItem.website.url">{{ selectedItem.website.name }}</a>
        </div>
        <div class="mt-2 text-lg">
          {{ selectedItem.description }}
        </div>
        <div class="text-2xl mt-2 font-semibold">{{ $t('portfolio.technologiesText') }}</div>
        <ul class="flex mt-2">
          <li
            v-for="technology in selectedItem.technologies"
            :key="technology"
            class="bg-[#575757] px-3 py-1 mr-3 rounded-lg cursor-default"
          >
            {{ technology }}
          </li>
        </ul>
      </div>
      <router-link to="/" class="absolute right-48 top-16 text-3xl">&#10006;</router-link>
    </div>
  </div>
</template>
<style>
:root {
  --vc-nav-width: 25px;
  --vc-nav-height: 25px;
  --vc-nav-border-radius: 50%;
  --vc-nav-color: #fff;
  --vc-nav-color-hover: #7a7a7a;
  --vc-nav-background: #12141c;
  --vc-pgn-width: 15px;
  --vc-pgn-height: 5px;
  --vc-pgn-margin: 5px;
  --vc-pgn-background-color: #7a7a7a;
  --vc-pgn-active-color: #fff;
}
</style>
