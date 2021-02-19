<template>
  <div class="container mt-4">
    <h1>Users</h1>
    <users-table />
  </div>
</template>

<script>
import { defineComponent } from "vue";

import usersTable from "./components/users-table/users-table.vue";

export default defineComponent({
  components: { usersTable },
});
</script>
