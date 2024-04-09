<template>
  <div class="photo relative flex justify-center items-center">
    <img class="image z-10 max-w-80 relative" src="../assets/my-photo.jpg" alt="MyPhoto" />
  </div>
</template>

<style lang="scss" scoped>
.photo {
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    background-image: url('../assets/dot.png');
    background-repeat: repeat;
    position: absolute;
    left: -30px;
    top: 30px;
    opacity: 0.6;
  }
}
</style>
