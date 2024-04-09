<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { router } from '@/router/router'

const i18n = useI18n()

type Item = {
  id: string
  translationKey: string
  name: string
}

const scrollPosition = ref<number>(0)
const menuItems: Item[] = [
  {
    id: 'home',
    translationKey: 'navbar.home',
    name: 'Home'
  },
  {
    id: 'aboutMe',
    translationKey: 'navbar.aboutMe',
    name: 'O mnie'
  },
  {
    id: 'experience',
    translationKey: 'navbar.experience',
    name: 'Doświadczenie'
  },
  {
    id: 'education',
    translationKey: 'navbar.education',
    name: 'Edukacja'
  },
  {
    id: 'portfolio',
    translationKey: 'navbar.portfolio',
    name: 'Portfolio'
  }
]

onMounted(() => {
  window.addEventListener('scroll', updateScroll)
})

function changeLanguage(language: string) {
  i18n.locale.value = language
}

function updateScroll() {
  scrollPosition.value = window.scrollY
}

async function scrollTo(itemId: string) {
  if (router.currentRoute.value.name === 'Portfolio') {
    router.push('/')
  }

  const htmlElement = document.getElementById(itemId)
  if (htmlElement) {
    const y = htmlElement.getBoundingClientRect().top + window.scrollY - 70
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}
</script>
<template>
  <nav
    class="fixed top-0 w-full flex justify-between px-10 py-2"
    :class="{ scrolledNavbar: scrollPosition > 0 }"
  >
    <img src="../assets/logo.svg" class="w-56" alt="Logo" />
    <ul class="flex text-lg">
      <li v-for="item in menuItems" :key="item.name">
        <button
          class="px-5 py-4 hover:text-[color:rgba(208,187,121)] transition-colors"
          @click="scrollTo(item.id)"
        >
          {{ $t(item.translationKey) }}
        </button>
      </li>
      <li class="flex">
        <button class="px-2 py-4" @click="changeLanguage('pl')">
          <img src="../assets/pl.png" />
        </button>
      </li>
      <li class="flex">
        <button class="px-2 py-4" @click="changeLanguage('en')">
          <img src="../assets/en.png" />
        </button>
      </li>
    </ul>
  </nav>
</template>
<style lang="scss" scoped>
.scrolledNavbar {
  transition-property: background-color;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  background-color: rgba(13, 15, 22, 0.9);
  z-index: 20;
}
</style>
