<!-- Layout For About, Projects & Contact Page -->

<template>
  <div class="overflow-hidden">
    <main class="custom-layout-container">
      <div class="custom-layout-navbar" id="menu">
        <navbar />
      </div>
      <div class="custom-layout-contain">
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
