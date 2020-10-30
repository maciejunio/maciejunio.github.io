<template>
  <div class="SocialButtons ">
    <a href="https://www.facebook.com/maciek.gornicki" target="_blank">
      <Facebook />
    </a>
    <a href="https://www.linkedin.com/in/maciej-gornicki"  target="_blank">
      <Linkedin />
    </a>
    <a href="https://twitter.com/GornickiMaciej"  target="_blank">
      <Twitter />
    </a>
    <a href="https://github.com/maciejunio"  target="_blank">
      <Github />
    </a>
  </div>
</template>

<script>
import Facebook from 'vue-material-design-icons/Facebook.vue';
import Linkedin from 'vue-material-design-icons/Linkedin.vue';
import Twitter from 'vue-material-design-icons/Twitter.vue';
import Github from 'vue-material-design-icons/Github.vue';
export default {
  components: {
    Facebook,
    Linkedin,
    Twitter,
    Github,
  },
};
</script>

<style lang="scss" scoped>
.SocialButtons {
margin-top: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
}
</style>
