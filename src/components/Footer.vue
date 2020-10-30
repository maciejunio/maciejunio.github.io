<template>
  <div class="Footer">
    <h5>{{ year }} © Maciej Górnicki - Wszelkie prawa zastrzeżone</h5>
  </div>
</template>

<script>
export default {
  computed: {
    year() {
      const today = new Date();
      return today.getFullYear();
    },
  },
};
</script>

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
