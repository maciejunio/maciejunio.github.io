<template>
  <main id="page-wrap">
    <div class="Main">
      <div class="container-fluid" id="welcome">
        <div class="row fullHeight">
          <div class="col-md-5 photoWrapper">
            <div class="centerWrapper">
              <Photo />
            </div>
          </div>
          <div class="col-md-7">
            <div class="centerWrapper">
              <WelcomeTitle />
            </div>
          </div>
        </div>
        <button class="slideDownBtn" v-scroll-to="'#about'">
          <ArrowDownCircle :size="70" />
        </button>
      </div>
      <div class="container" id="about">
        <div class="row">
          <div class="col-md-12">
            <SectionHead h3Text="O mnie" h5Text="mnie" spanText="O" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <About />
          </div>
        </div>
      </div>
      <div class="container" id="resume">
        <div class="row">
          <div class="col-md-12">
            <SectionHead h3Text="CV" h5Text="V" spanText="C" />
          </div>
        </div>
        <div class="row" id="experience">
          <div class="col-md-12">
            <SectionSubHead h5Text="dczenie" spanText="Doświa" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <Experience />
          </div>
        </div>
        <div class="row" id="education">
          <div class="col-md-12">
            <SectionSubHead h5Text="acja" spanText="Eduk" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <Education />
          </div>
        </div>
      </div>
      <div class="container" id="portfolio">
        <div class="row">
          <div class="col-md-12">
            <SectionHead h3Text="Portfolio" h5Text="ortfolio" spanText="P" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <Portfolio />
          </div>
        </div>
      </div>
      <div class="container-fluid" id="footer">
        <Footer />
      </div>
    </div>
  </main>
</template>

<script>
import ArrowDownCircle from 'vue-material-design-icons/ArrowDownCircle.vue';
import WelcomeTitle from '@/components/WelcomeTitle';
import Photo from '@/components/Photo';
import SectionHead from '@/components/SectionHead';
import SectionSubHead from '@/components/SectionSubHead';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';

export default {
  name: 'Home',
  components: {
    WelcomeTitle,
    Photo,
    ArrowDownCircle,
    SectionHead,
    About,
    SectionSubHead,
    Experience,
    Education,
    Portfolio,
    Footer,
  },
};
</script>
<style lang="scss" scoped>
.Main {
  #welcome,
  .fullHeight,
  .centerWrapper {
    @media (min-width: 768px) {
      height: 100vh;
    }
  }
  #welcome {
    @media (max-width: 767px) {
      height: 100vh;
      background-color: #12141c;
    }
  }
  #footer {
    @media (max-width: 767px) {
      padding: 0;
    }
  }
  .centerWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .photoWrapper {
    background: #12141c;
    padding-left: 0;
    @media (max-width: 767px) {
      margin-top: 60px;
    }
  }
  .slideDownBtn {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    background: transparent;
    border: none;
    font-size: 50px;
    color: #d0bb79;
    @media (max-width: 767px) {
      font-size: 30px;
    }
    @media (max-width: 360px) {
      display: none;
    }
    &:focus {
      outline: none;
    }
  }
}
</style>
