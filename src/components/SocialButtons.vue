<script setup lang="ts">
import Linkedin from 'vue-material-design-icons/Linkedin.vue'
import Github from 'vue-material-design-icons/Github.vue'
</script>
<template>
  <div class="flex items-center justify-start mt-3">
    <a href="https://www.linkedin.com/in/maciej-gornicki" target="_blank">
      <Linkedin :size="30" />
    </a>

    <a href="https://github.com/maciejunio" target="_blank">
      <Github :size="30" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
a:not(:first-child) {
  margin-left: 10px;
}
a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 50%;
  background: #12141c;
  border: 1px solid #2d2d32;
  color: #eee;
  margin: 0 2px;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
  &:hover {
    color: #d0bb79;
    border-color: #d0bb79;
  }
}
</style>
