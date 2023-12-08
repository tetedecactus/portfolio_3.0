<template>
  <section class="overflow-hidden">
    <!-- <navbar class="" /> -->
    <div class="">
      <slot />
    </div>
  </section>
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