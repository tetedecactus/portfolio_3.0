<template>
    <div class="projects-page-container split-page">
        <projet_perso />
        <projet_42 />         
    </div>
</template>

<script lang="js">
import projet_perso from '../components/project_perso.vue';
import projet_42 from '../components/project_42.vue';

export default defineComponent({
    components: {
        projet_perso,
        projet_42,
    },
});

 
</script>

<style>

.projects-42-container {
    align-items: center;
}



</style>