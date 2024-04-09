<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="Footer">
    <h5>{{ currentYear }} © Maciej Górnicki - Wszelkie prawa zastrzeżone</h5>
  </div>
</template>

<style lang="scss" scoped>
.Footer {
  margin-top: 50px;
  background-color: #12141c;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  h5 {
    @media (max-width: 767px) {
      font-size: 14px;
    }
  }
}
</style>
