<!-- Layout For Index Page -->

<template>
  <div class="overflow-hidden">
    <main class="custom-container">
      <div class="navbar" id="menu">
        <navbar />
      </div>
      <div class="contain">
        <slot />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import navbar from "../components/navbar.vue";

export default defineComponent({
  components: {
    navbar,
  },
});
</script>

<style scoped></style>
