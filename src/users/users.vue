<template>
  <div class="container mt-4">
    <h1>Users</h1>
    <keep-alive>
      <users-table :data="data" :fetching="fetching" />
    </keep-alive>
  </div>
</template>

<script>
import { useQuery } from "@urql/vue";
import { defineComponent } from "vue";

import usersTable from "./components/users-table/users-table.vue";

export default defineComponent({
  components: { usersTable },

  setup() {
    const { data, fetching } = useQuery({
      query: `{
        users {
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
