<template>
  <hello-world msg="Admin" />
</template>

<script>
import { defineComponent } from "vue";

import helloWorld from "./components/hello-world.vue";

export default defineComponent({
  components: {
    helloWorld,
  },
});
</script>
