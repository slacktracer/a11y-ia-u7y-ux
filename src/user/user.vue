<template>
  <div class="container mt-4">
    <h1>User</h1>
    <div>{{ data }}</div>
  </div>
</template>

<script>
import { useQuery } from "@urql/vue";
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();

    const { data, fetching } = useQuery({
      query: `{
        user(_id: "${route.params.id}") {
          _id
          email
          emsAgenciesAdministered {
            _id
            name
          }
          emsAgencyMemberships {
            _id
            name
          }
          firstName
          hospitalsAdministered {
            _id
            name
          }
          hospitalMemberships {
            _id
            name
          }
          lastName
          username
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
