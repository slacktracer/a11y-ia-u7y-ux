<template>
  <div class="container mt-4">
    <h1>Agencies</h1>
    <hr />
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Complaint Set</th>
          <th scope="col">Case Details</th>
        </tr>
      </thead>
      <tbody>
        <!--      <tr v-for="agency in agencies">-->
        <!--        <td>{{ agency.name }}</td>-->
        <!--        <td>{{ agency.complaintSet }}</td>-->
        <!--        <td>{{ agency.canViewCaseDetails }}</td>-->
        <!--      </tr>-->
      </tbody>
    </table>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    // const { loading, result } = useQuery(gql`
    //   query {
    //     emsAgencies {
    //       _id
    //       name
    //       canViewCaseDetails
    //       complaintSet
    //     }
    //   }
    // `);
    //
    // const agencies = useResult(result, null, data => data.emsAgencies);
    //
    // return {
    //   loading,
    //   agencies,
    // };
  },
});
</script>
