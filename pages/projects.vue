<template>
  <div class="projects-page-container">
    <ProjetPerso />
    <Projet42 />
  </div>
</template>

<script>
import ProjetPerso from "../components/projetPerso.vue";
import Projet42 from "../components/projet42.vue";

export default defineComponent({
  components: {
    Projet42,
    ProjetPerso,
  },
});
definePageMeta({
  layout: "custom",
});
</script>

<style></style>
