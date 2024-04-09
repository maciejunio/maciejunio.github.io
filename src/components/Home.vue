<script setup lang="ts">
import MyPhoto from '@/components/MyPhoto.vue'
import WelcomeTitle from '@/components/WelcomeTitle.vue'
</script>

<template>
  <div class="grid grid-cols-5 h-screen items-center justify-center w-full">
    <div
      class="max-[1024px]:hidden col-span-2 h-full flex items-center justify-center bg-grey-blue"
    >
      <MyPhoto />
    </div>
    <div class="max-[1024px]:col-span-5 min-[1024px]:col-span-3 flex justify-center items-center">
      <WelcomeTitle />
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
