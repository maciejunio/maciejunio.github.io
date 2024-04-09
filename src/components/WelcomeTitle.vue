<script setup lang="ts">
import VueTypewriterEffect from 'vue-typewriter-effect'
import SocialButtons from '@/components/SocialButtons.vue'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import { watch } from 'vue'

const { tm, locale } = useI18n()

const componentKey = ref(0)
function forceRerender() {
  componentKey.value += 1
}

watch(
  () => locale.value,
  () => {
    forceRerender()
  }
)
</script>
<template>
  <div>
    <span
      class="shadow-[inset_0_-8px_0px_0px_rgba(208,187,121,0.4)] tracking-widest text-2xl font-semibold"
    >
      {{ $t('home.welcomeText') }}</span
    >
    <vue-typewriter-effect
      :key="componentKey"
      class="block text-6xl font-bold mb-5"
      :strings="tm('home.typewriterStrings')"
      :autoStart="true"
      :delay="70"
      :deleteSpeed="60"
      :loop="true"
    />
    <span class="text-[color:#999] text-xl italic max-w-3xl block"> „{{ $t('home.quote') }}” </span>
    <SocialButtons />
  </div>
</template>

<style lang="scss" scoped></style>
