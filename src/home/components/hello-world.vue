<template>
  <div class="mt-5 splash">
    <h1>{{ msg }}</h1>
    <div>
      <p>
        {{ greeting }} ({{ val }}) World! from env: {{ envvar }}::{{
          stuff("test-", 42)
        }}::from env: {{ crazy }}
      </p>
    </div>
    <a
      href="https://www.deviantart.com/dio-03/art/MEKANO-Retrofix-d-201919932"
      target="_blank"
    >
      <img
        alt="Mekano"
        class="image mb-2"
        src="src/home/assets/mekano-big-screenRS.jpg"
      />
    </a>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";

import x, { notTest } from "../services/something";

console.log(import.meta.env.VITE_DATA);
console.log(import.meta.env.VITE_FF_CTHULHU);

export default defineComponent({
  props: {
    msg: { default: "", type: String },
  },
  setup() {
    const crazy = import.meta.env.VITE_FF_CTHULHU;
    const envvar = import.meta.env.VITE_DATA;
    const greeting = "Hello";

    const stuff = (a, b) => {
      notTest(8, "some string");
      return "test-" + a + b;
    };

    const val = computed(() => x());

    return {
      crazy,
      envvar,
      greeting,
      stuff,
      val,
    };
  },
});
</script>

<style scoped>
.splash {
  text-align: center;
}
.image {
  max-width: 100vw;
  width: 600px;
}
</style>
