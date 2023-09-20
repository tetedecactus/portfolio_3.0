<template>
    <div class="custom-container">
      <div class="navbar" id="menu">
        <navbar />
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

<script>
import { defineComponent } from 'vue';
import navbar from '../components/navbar.vue';
import about from '../components/about.vue';
import projects from '../components/projects.vue';

export default defineComponent({
  components: {
    navbar,
    about,
    projects,
  },
});
</script>

<style>
  .custom-container {
  overflow: hidden !important;
  overflow-y: scroll !important;
}
</style>
