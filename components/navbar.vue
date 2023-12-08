<template>
  <div class="navbar-container">
    <div class="title-container">
		<a href="/">
          <h2 class="title-portfolio reveal-text">
            O<span>livier</span>
            <br /> Lab<span>recque</span>
            <br /> Lac<span>asse</span>
          </h2>
        </a>
		<p><span>-</span> étudiant 42 Quebec <span>-</span></p>
      	<p><span>-</span> développeur web <span>-</span></p>
		<social_icons id="social-icons-mobile" />
    </div>
    <section class="sub-menu">
        <submenu />
	</section>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import submenu from './menu.vue';
import social_icons from './social_icons_link.vue';

export default defineComponent({
  components: {
    submenu,
    social_icons,
  },
});
</script>

<style scoped>
.reveal-text,
.reveal-text::after {
	animation-delay: var(--animation-delay, 0s);
	animation-iteration-count: var(--iterations, 1);
	animation-duration: var(--duration, 5000ms);
	animation-fill-mode: both;
	animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
}

.reveal-text {
	--animation-delay: var(--delay, 0);
	--animation-duration: var(--duration, 4000ms);
	--animation-iterations: var(--iterations, 1);
	position: relative;
	animation-name: clip-text;
	white-space: nowrap;
	cursor: default;
	
	&::after {
		content: "";
		position: absolute;
		z-index: 999;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #3F4E4F;
		transform: scaleX(0);
		transform-origin: 0 50%;
		pointer-events: none;
		animation-name: text-revealer;
	}
	
}


@keyframes clip-text {
	from {
		clip-path: inset(0 100% 0 0);
	}
	to {
		clip-path: inset(0 0 0 0);
	}
}


@keyframes text-revealer {
	
	0%, 50% {
		transform-origin: 0 50%;
	}
	
	60%, 100% {
		transform-origin: 100% 50%;		
	}

	
	60% {
		transform: scaleX(1);
	}
	
	100% {
		transform: scaleX(0);
	}
}

</style>