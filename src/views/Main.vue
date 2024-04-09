<script setup lang="ts">
import Home from '@/components/Home.vue'
import AboutMe from '@/components/AboutMe.vue'
import Experience from '@/components/Experience.vue'
import Education from '@/components/Education.vue'
import Portfolio from '@/components/Portfolio.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>
<template>
  <Navbar />
  <Home id="home" />
  <AboutMe id="aboutMe" />
  <Experience id="experience" />
  <Education id="education" />
  <Portfolio />
  <Footer />
</template>
