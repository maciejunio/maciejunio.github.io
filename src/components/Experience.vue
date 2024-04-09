<script setup lang="ts">
import SectionHead from '@/components/SectionHead.vue'
import TimelineItem, { type Item } from '@/components/TimelineItem.vue'
import type { Ref } from 'vue'
import { watch } from 'vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm, locale } = useI18n()

const experience: Ref<Item[]> = ref(tm('experience.timelineItems'))

watch(
  () => locale.value,
  () => {
    experience.value = tm('experience.timelineItems')
  }
)
</script>

<template>
  <div class="container mt-16">
    <SectionHead
      :h3Text="$t('experience.sectionHead.h3Text')"
      :h5Text="$t('experience.sectionHead.h5Text')"
      :spanText="$t('experience.sectionHead.spanText')"
    />
    <template v-for="(item, index) in experience" :key="index">
      <TimelineItem :item="item" />
    </template>
  </div>
</template>
