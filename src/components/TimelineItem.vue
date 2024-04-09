<script setup lang="ts">
import { type PropType } from 'vue'

export type Item = {
  dateFrom: string
  dateTo: string
  companyName: string
  position: string
  description: string
  technologies?: string[]
  mainActivities?: string[]
}

const props = defineProps({
  item: { type: Object as PropType<Item>, required: true }
})
</script>
<template>
  <div class="grid grid-cols-3 mb-16">
    <span class="date justify-end"
      >{{ props.item.dateFrom }} - <b>{{ props.item.dateTo }}</b></span
    >
    <div class="col-span-2 border-l-2 px-4">
      <span class="text-[color:#777] uppercase text-xl">{{ props.item.companyName }}</span>
      <h4>{{ props.item.position }}</h4>
      <span v-if="props.item.description" class="text-[color:#bababa] text-lg">
        {{ $t('experience.description') }}:
      </span>
      <span class="text-[color:#bababa] text-lg"> {{ props.item.description }} </span>
      <ul v-if="props.item.mainActivities" class="mt-2">
        <span v-if="props.item.mainActivities" class="text-[color:#bababa] text-lg">
          {{ $t('experience.mainActivities') }}:
        </span>
        <li
          v-for="activity in props.item.mainActivities"
          :key="activity"
          class="px-3 py-1 mr-3 rounded-lg cursor-default"
        >
          {{ activity }}
        </li>
      </ul>
      <ul v-if="props.item.technologies" class="flex mt-2">
        <li
          v-for="technology in props.item.technologies"
          :key="technology"
          class="bg-[#575757] px-3 py-1 mr-3 rounded-lg cursor-default"
        >
          {{ technology }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.date {
  letter-spacing: 1px;
  padding-top: 15px;
  font-size: 18px;
  b {
    font-size: 35px;
    font-weight: 700;
  }
}
h4 {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 15px;
  position: relative;
  &::before {
    content: '';
    width: 20px;
    height: 20px;
    background: #0d0f16;
    border-radius: 50%;
    position: absolute;
    left: -26px;
    top: 12px;
  }
  &::after {
    content: '';
    width: 8px;
    height: 8px;
    background: #d0bb79;
    border-radius: 50%;
    position: absolute;
    left: -21px;
    top: 19px;
  }
}
</style>
