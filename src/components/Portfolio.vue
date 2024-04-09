<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { useI18n } from 'vue-i18n'
import SectionHead from '@/components/SectionHead.vue'
import { router } from '@/router/router'
import { watch, ref, type Ref } from 'vue'
import { type PortfolioItem } from '@/views/Portfolio.vue'

const { tm, locale } = useI18n()

const portfolioItems: Ref<PortfolioItem[]> = ref(tm('portfolio.items'))

watch(
  () => locale.value,
  () => {
    portfolioItems.value = tm('portfolio.items')
  }
)
</script>

<template>
  <div id="portfolio" class="container mt-16">
    <SectionHead h3Text="Portfolio" h5Text="ortfolio" spanText="P" />
    <div class="grid max-[1024px]:grid-cols-1 min-[1024px]:grid-cols-2 gap-5">
      <div
        v-for="(item, index) in portfolioItems"
        :key="item.name"
        class="relative overflow-hidden"
        @click="router.push({ name: 'Portfolio', params: { id: index + 1 } })"
      >
        <div class="relative image cursor-pointer">
          <img class="rounded-2xl cursor-pointer" :src="item.mainImage" />
          <div>
            <span>{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.image * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.image img {
  opacity: 1;
  width: 100%;
  -webkit-transition: all 0.15s;
  transition: all 0.15s;
}
.image > div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.image > div::before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  content: '';
  opacity: 0;
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
  background-image: linear-gradient(
    45deg,
    #0d0f16 0%,
    rgba(13, 15, 22, 0.7) 40%,
    rgba(13, 15, 22, 0.9)
  );
}
.image span {
  font-size: 30px;
  text-transform: uppercase;
  opacity: 0;
  position: absolute;
  top: 20px;
  right: 20px;
  color: transparent;
  text-shadow: 0 0 10px #ffffff;
  text-align: right;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}
.image:hover > div span,
.image.hover > div span {
  opacity: 1;
  text-shadow: 0 0 0px #ffffff;
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}
.image:hover > div::before,
.image.hover > div::before {
  opacity: 1;
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}
</style>
