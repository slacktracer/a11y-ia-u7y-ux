<template>
  <div class="container mt-4">
    <h1>Hospitals</h1>
    <keep-alive>
      <hospitals-table :data="data" :fetching="fetching" />
    </keep-alive>
  </div>
</template>

<script>
import { useQuery } from "@urql/vue";
import { defineComponent } from "vue";

import hospitalsTable from "./components/hospitals-table/hospitals-table.vue";

export default defineComponent({
  components: { hospitalsTable },

  setup() {
    const { data, fetching } = useQuery({
      query: `{
        hospitals {
          _id
          name
          addressLine1
          addressLine2
          city
          state
        }
      }`,
    });

    return {
      data,
      fetching,
    };
  },
});
</script>
