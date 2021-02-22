<template>
  <div class="container mt-4">
    <h1>User</h1>
    <div>Username:</div>
    <input :value="data?.user.username">
    <br>
    <br>
    <div>Name:</div>
    <input :value="data?.user.firstName + ' ' + data?.user.lastName">
    <br>
    <br>
    <div>E-mail:</div>
    <input :value="data?.user.email">
    <br>
    <br>
    <div><b>Hospital Memberships:</b></div>
    <hospitals-table :data="hospitalMemberships" :fetching="fetching" />
  </div>
</template>

<script>
import { useQuery } from "@urql/vue";
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";

import hospitalsTable from "../hospitals/components/hospitals-table/hospitals-table.vue";

export default defineComponent({
  components: { hospitalsTable },

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
            city
            state
            addressLine1
            addressLine2
          }
          lastName
          username
        }
      }`,
    });

    const hospitalMemberships = computed(() => ({ hospitals: data.value?.user.hospitalMemberships || [] }));

    return {
      data,
      fetching,
      hospitalMemberships,
    };
  },
});
</script>
