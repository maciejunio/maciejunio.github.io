<script setup lang="ts">
import SectionHead from '@/components/SectionHead.vue'
import TimelineItem, { type Item } from '@/components/TimelineItem.vue'
import { ref, watch, type Ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm, locale } = useI18n()

const education: Ref<Item[]> = ref(tm('education.timelineItems'))

watch(
  () => locale.value,
  () => {
    education.value = tm('education.timelineItems')
  }
)
</script>

<template>
  <div class="container mt-16">
    <SectionHead
      :h3Text="$t('education.sectionHead.h3Text')"
      :h5Text="$t('education.sectionHead.h5Text')"
      :spanText="$t('education.sectionHead.spanText')"
    />
    <template v-for="(item, index) in education" :key="index">
      <TimelineItem :item="item" />
    </template>
  </div>
</template>
