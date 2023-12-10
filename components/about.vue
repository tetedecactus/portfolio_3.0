<template >
  <section class="about-container" id="#about">
      <h2>à propos</h2>
      <p>Au début de l'année 2019, lorsque j'ai quitté la maison familiale, je me suis muni d'un ordinateur. Jusque-là, j'avais travaillé dans le domaine de la construction et n'avais jamais touché a un pc. Très rapidement, je me suis intéressé à cet outil formidable qui pouvait accomplir des miracles entre les mains d'un véritable magicien du code. C'est à ce moment-là que j'ai commencé à programmer. Au début, pour acquérir les bases, j'ai suivi des tutoriels YouTube et des cours sur Udemy. J'étais devenu accro !
Puis, à l'hiver 2020, la Covid-19 a frappé à nos portes. Pour moi, c'était une opportunité rêvée. Je me suis renseigné sur les cours de programmation disponibles dans ma région et c'est là que je suis tombé sur cette nouvelle école qui ouvrait ses portes dans le quartier St-Roch, à seulement 5 minutes de chez moi. Tous les signes que j'attendais étaient présents. J'ai donc quitté la construction pour devenir étudiant en programmation. J'ai fait partie de la première cohorte d'élèves de 42 Québec. Rapidement, nous avons commencé à coder en langage C, en passant par la création de notre propre library C, jusqu'à une reproduction impressionnante de Bash. Nous avons réalisé des projets graphiques captivants, et bien d'autres choses encore.
Et voilà, trois ans  plus tard, j'ai terminé mon tronc commun à 42 Québec et je suis à la recherche d'un stage et de nouveau défi.</p>
      </section>
</template>

<script>
import { defineComponent } from 'vue';
import submenu from './menu.vue'

export default defineComponent({
  components: {    

    submenu,
  },
});
</script>

<style scoped>
.about-container {
  position: relative;
  animation-name: example;
  animation-duration: 1s;
  animation-delay: 2s;
  animation: slide-down 1.5s ease;
}

@keyframes slide-down {
  0% {
    left: 0px;
    top: -50rem;
  }
  100% {
    left: 0px;
    top: 0px;
  }
}
</style>