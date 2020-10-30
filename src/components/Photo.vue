<template>
  <div class="Photo">
    <img class="image" src="@/assets/my_photo.jpg" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.Photo {
  position: relative;
  &::after {
    content: '';
    width: 79%;
    height: 100%;
    background-image: url('../assets/dot.png');
    background-repeat: repeat;
    position: absolute;
    left: 120px;
    top: 30px;
    opacity: 0.5;
    @media (max-width: 1919px) {
      left: 50px;
      width: 83%;
    }
    @media (max-width: 1024px) {
      left: 20px;
      width: 83%;
    }
    @media (max-width: 1024px) {
      left: 9px;
      width: 89%;
      top: 23px;
    }
    @media (max-width: 360px) {
      left: 12px;
    width: 86%;
    top: 15px;
    }
    
  }
  .image {
    max-width: 560px;
    position: relative;
    margin-left: 150px;
    z-index: 2;
    @media (max-width: 1919px) {
      max-width: 400px;
      margin-left: 80px;
    }
    @media (max-width: 1024px) {
      max-width: 300px;
      margin-left: 50px;
    }
    @media (max-width: 800px) {
      max-width: 250px;
      margin-left: 30px;
    }
    @media (max-width: 360px) {
      max-width: 200px;
      margin-left: 30px;
    }
  }
}
</style>
