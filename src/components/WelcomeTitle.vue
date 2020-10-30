<template>
  <div class="WelcomeTitle">
    <h6>Cześć !</h6>
    <h1 id="typewriter"></h1>
    <p>
      „Jedynym sposobem na prawdziwą satysfakcję z pracy jest robienie tego, w czego wielkość się wierzy. A jedynym sposobem na robienie rzeczy wielkich jest miłość do tego, co się robi” - Steve Jobs
    </p>
    <SocialButtons/>
  </div>
</template>

<script>
import Typewriter from 'typewriter-effect/dist/core';
import SocialButtons from "@/components/SocialButtons";
export default {
    mounted(){
      new Typewriter('#typewriter', {
      strings: ['Nazywam się Maciek Górnicki', 'Jestem Frontend Developerem', 'Jestem Freelancerem'],
      autoStart: true,
      delay: 90,
      deleteSpeed: 40,
      loop: true,
    });
    },
    components: {
      SocialButtons,
    }
};
</script>

<style lang="scss" scoped>
.WelcomeTitle {
  width: 100%;
  margin-left: 50px;
    @media(max-width: 767px){
      margin-top: 60px;
    margin-left: 0px;
  }
  h6 {
    font-size: 17px;
    letter-spacing: 2px;
    display: inline-block;
    margin-bottom: 15px;
    position: relative;
    z-index: 3;
    font-weight: 600;
    &::after {
      content: '';
      width: 100%;
      height: 10px;
      position: absolute;
      left: 0;
      bottom: -2px;
      background: #d0bb79;
      opacity: 0.4;
      z-index: -1;
    }
  }
  h1 {
    color: #eee;
    font-weight: 700;
    margin-bottom: 15px;
    @media(max-width: 767px){
      font-size: 25px;
    }
  }
  p{
    font-size: 15px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    color: #999;
    line-height: 2;
    margin: 0;
    font-style: italic;
    @media (max-width: 340px) {
      display: none;
    }
  }
}
</style>
