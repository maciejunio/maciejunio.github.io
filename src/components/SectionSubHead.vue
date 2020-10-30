<template>
  <div class="SectionSubHead">
    <h5><span>{{ spanText }}</span>{{h5Text}}</h5>
  </div>
</template>

<script>
export default {
  props:{
    h5Text:{
      type: String,
      required: false,
    },
    spanText:{
      type: String,
      required: false,
    }
  }
};
</script>

<style lang="scss" scoped>
.SectionSubHead {
  margin-top: 20px;
  border-bottom: 1px dashed #847c7c;
  padding-bottom: 20px;
  h5 {
    color: #fff;
    font-weight: 800;
    text-transform: uppercase;
    font-size: 25px;
    width: 100%;
    span {
      color: #d0bb79;
    }
    &::after {
      content: '';
      width: 10px;
      height: 10px;
      border: 1px solid #847c7c;
      border-radius: 50%;
      position: absolute;
      right: 4px;
      bottom: -5px;
    }
  }
}
</style>
