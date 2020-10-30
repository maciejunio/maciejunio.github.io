<template>
  <div class="SectionHead">
    <h5>
      <span>{{ spanText }}</span>
      {{ h5Text }}
    </h5>
    <h3>{{ h3Text }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    h3Text: {
      type: String,
      required: false,
    },
    h5Text: {
      type: String,
      required: false,
    },
    spanText: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.SectionHead {
  margin-top: 70px;
  margin-bottom: 50px;
  position: relative;
    @media (max-width: 767px) {
      margin-top: 20px;
      margin-bottom: 20px;
    }
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
    font-size: 80px;
    font-weight: 800;
    letter-spacing: 30px;
    text-transform: uppercase;
    color: #2a2a2e;
    position: absolute;
    bottom: -30%;
    left: 5%;
    width: 100%;
    text-align: left;
    opacity: 0.2;
    width: 70%;
    @media (max-width: 1024px) {
      width: 70%;
      font-size: 60px;
      left: 6%;
      bottom: -27%;
    }
    @media (max-width: 767px) {
      display: none;
    }
  }
}
</style>
