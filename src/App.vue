<template>
  <div id="app">
    <Slide :closeOnNavigation="true">
      <button class="navLink" v-scroll-to="'#about'">
        <i class="fa fa-fw fa-star-o"></i>
        <span>O mnie</span>
      </button>
      <button class="navLink" v-scroll-to="'#experience'">
        <i class="fa fa-fw fa-bell-o"></i>
        <span>Doświadczenie</span>
      </button>
      <button class="navLink" v-scroll-to="'#education'">
        <i class="fa fa-fw fa-envelope-o"></i>
        <span>Edukacja</span>
      </button>
      <button class="navLink" v-scroll-to="'#skills'">
        <i class="fa fa-fw fa-comment-o"></i>
        <span>Umiejętności</span>
      </button>
      <button class="navLink" v-scroll-to="'#portfolio'">
        <i class="fa fa-fw fa-bar-chart-o"></i>
        <span>Portfolio</span>
      </button>
    </Slide>
    <router-view></router-view>
  </div>
</template>
<script>
import { Slide } from 'vue-burger-menu';

export default {
  components: {
    Slide,
  },
};
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Dosis', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #0d0f16;
  color: #eee;
}

.VueCarousel-pagination {
  margin-top: -80px !important;
}
.bm-burger-button {
  position: fixed;
  width: 36px;
  height: 30px;
  left: 36px;
  top: 36px;
  cursor: pointer;
  z-index: 999;
  @media (max-width: 767px) {
    left: 20px;
    top: 20px;
  }
}
.bm-burger-bars {
  background-color: #d0bb79;
}
.line-style {
  position: absolute;
  height: 20%;
  left: 0;
  right: 0;
}
.cross-style {
  position: absolute;
  top: 12px;
  right: 2px;
  cursor: pointer;
}
.bm-cross {
  background: #bdc3c7;
}
.bm-cross-button {
  height: 24px;
  width: 24px;
}
.bm-menu {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: #12141c; /* Black*/
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
}

.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}
.bm-item-list {
  color: #b8b7ad;
  margin-left: 10%;
  font-size: 20px;
}
.bm-item-list > * {
  display: flex;
  text-decoration: none;
  padding: 0.7em;
}
.bm-item-list > * > span {
  margin-left: 10px;
  font-weight: 700;
  color: white;
}
.navLink {
  background: transparent;
  border: none;
  span {
    transition: all 0.2s ease-in;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    span {
      color: #d0bb79;
    }
  }
}
</style>
