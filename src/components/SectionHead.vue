<script setup lang="ts">
const props = defineProps({
  h3Text: { type: String, default: '' },
  h5Text: { type: String, default: '' },
  spanText: { type: String, default: '' }
})
</script>

<template>
  <div class="relative my-10">
    <h5>
      <span>{{ props.spanText }}</span>
      {{ props.h5Text }}
    </h5>
    <h3 class="max-[1024px]:text-5xl min-[1024px]:text-7xl">{{ props.h3Text }}</h3>
  </div>
</template>

<style lang="scss" scoped>
h5 {
  color: #eee;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  span {
    color: #d0bb79;
    font-size: 65px;
    font-weight: 800;
    text-transform: uppercase;
    position: relative;
    margin-right: 5px;
    padding: 0 5px;
    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      background: #2d2d32;
      opacity: 0.5;
    }
  }
}
h3 {
  font-weight: 800;
  letter-spacing: 30px;
  text-transform: uppercase;
  color: #2a2a2e;
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  opacity: 0.2;
}
</style>
