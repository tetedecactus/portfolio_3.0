<template>
  <div>
    <Head>
      <Title>O LAB LAC | Portfolio</Title>
      <Meta name="description" content="My app description" />
    </Head>
    <!-- -->
  </div>
  <div class="">
    <div class="">
      <div id="about">
        <about />
      </div>
      <div id="projects">
        <projects />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import navbar from "../components/navbar.vue";
import about from "../components/about.vue";
import projects from "../components/projects.vue";

export default defineComponent({
  components: {
    navbar,
    about,
    projects,
  },
});

definePageMeta({
  layout: "default",
});
</script>

<style>
.custom-container {
  overflow: hidden !important;
  overflow-y: scroll !important;
}
</style>
