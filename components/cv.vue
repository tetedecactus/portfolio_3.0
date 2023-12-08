<template>
    <ul>
        <li>
            <a :href="cv" download="Cv.pdf">
                <p id="cv-btn">
                    DOWNLOAD C.V
                </p>
            </a>
        </li>
    </ul>
</template>

<script>
import { defineComponent } from 'vue';
import cv from '../assets/images/Cv.pdf'

export default defineComponent({
    data() {
    return {
      cv: cv,
    }
  },
});

</script>