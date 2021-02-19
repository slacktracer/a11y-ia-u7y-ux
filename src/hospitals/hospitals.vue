<template>
  <div class="container mt-4">
    <h1>Hospitals</h1>
    <hr />
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Address</th>
          <th scope="col">City</th>
          <th scope="col">State</th>
        </tr>
      </thead>
      <tbody>
        <!--      <tr v-for="hospital in hospitals">-->
        <!--        <td>{{ hospital.name }}</td>-->
        <!--        <td>{{ hospital.addressLine1 + " " + hospital.addressLine2 }}</td>-->
        <!--        <td>{{ hospital.city }}</td>-->
        <!--        <td>{{ hospital.state }}</td>-->
        <!--      </tr>-->
      </tbody>
    </table>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    //   const { loading, result } = useQuery(gql`
    //     query hospitals {
    //       hospitals {
    //         _id
    //         name
    //         addressLine1
    //         addressLine2
    //         city
    //         state
    //       }
    //     }
    //   `);
    //
    //   const hospitals = useResult(result, null, data => data.hospitals);
    //
    //   return {
    //     loading,
    //     hospitals,
    //   };
  },
});
</script>
