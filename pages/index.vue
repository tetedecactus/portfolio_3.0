<template>
  <div class="custom-container">
    <div class="navbar" id="menu">
      <NuxtLayout name="custom"/>
    </div>
    <div class="contain">
      <section id="about">
        <about />
      </section>
      <section id="projects">
        <projects />
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import navbar from '../components/navbar.vue';
import about from '../components/about.vue';
import projects from '../components/projects.vue';
import custom from '../layouts/custom.vue';

export default defineComponent({
  components: {
    navbar,
    about,
    projects,
    custom,
  },

});
</script>

<style>
  .custom-container {
  overflow: hidden !important;
  overflow-y: scroll !important;
}
</style>
