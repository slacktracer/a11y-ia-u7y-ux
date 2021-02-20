<template>
  <div class="mt-4">
    <div v-if="fetching">Loading... Please wait...</div>
    <div v-if="!fetching">
      <div class="align-items-center d-flex mb-3" style="overflow-x: auto">
        <div>
          Showing <i>{{ users?.length }}</i> of {{ total }} users
        </div>
        <div class="btn-group ms-auto" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-sm btn-outline-dark">Add</button>
          <button type="button" class="btn btn-sm btn-outline-dark">
            Download
          </button>
          <button type="button" class="btn btn-sm btn-outline-dark">
            Refresh
          </button>
        </div>
      </div>
      <div>
        <div class="dropdown">
          <button
            aria-expanded="false"
            class="btn btn-outline-dark btn-sm dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
          >
            Showing <i>{{ visibility.visibleColumnsCount }}</i> of 7 columns
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li
              :key="columnName"
              v-for="(columnInfo, columnName) in visibility.columns"
            >
              <button
                class="dropdown-item"
                @click.prevent.stop="visibility.set(columnName)"
              >
                <span
                  v-if="!columnInfo.visible"
                  style="display: inline-block; height: 18px; width: 16px"
                ></span>
                <i class="bi bi-check2" v-if="columnInfo.visible"></i>
                {{ columnInfo.name }}
              </button>
            </li>
          </ul>
        </div>
      </div>
      <form class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <lo-th
                column="username"
                :sorting="sorting"
                :visibility="visibility"
              >
                Username
              </lo-th>
              <lo-th column="name" :sorting="sorting" :visibility="visibility">
                Name
              </lo-th>
              <lo-th column="email" :sorting="sorting" :visibility="visibility">
                E-mail
              </lo-th>
              <lo-th
                :sorting="sorting"
                :visibility="visibility"
                column="hospitalsAdministered"
              >
                Hospitals Administered
              </lo-th>
              <lo-th
                :sorting="sorting"
                :visibility="visibility"
                column="hospitalMemberships"
              >
                Hospital Memberships
              </lo-th>
              <lo-th
                :sorting="sorting"
                :visibility="visibility"
                column="emsAgenciesAdministered"
              >
                Agencies Administered
              </lo-th>
              <lo-th
                :sorting="sorting"
                :visibility="visibility"
                column="emsAgencyMemberships"
              >
                Agency Memberships
              </lo-th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td v-if="visibility.columns.username.visible">
                <input
                  class="form-control form-control-sm"
                  placeholder="Search by username"
                  type="search"
                  v-model="filtering.columns.username"
                />
              </td>
              <td v-if="visibility.columns.name.visible">
                <input
                  class="form-control form-control-sm"
                  placeholder="Search by first and last name"
                  type="search"
                  v-model="filtering.columns.name"
                />
              </td>
              <td v-if="visibility.columns.email.visible">
                <input
                  class="form-control form-control-sm"
                  placeholder="Search by e-mail"
                  type="search"
                  v-model="filtering.columns.email"
                />
              </td>
              <td v-if="visibility.columns.hospitalsAdministered.visible">
                <input
                  class="form-control form-control-sm"
                  placeholder="Search by hospitals administered"
                  type="search"
                  v-model="filtering.columns.hospitalsAdministered"
                />
              </td>
              <td v-if="visibility.columns.hospitalMemberships.visible">
                <input
                  class="form-control form-control-sm"
                  placeholder="Search by hospital memberships"
                  type="search"
                  v-model="filtering.columns.hospitalMemberships"
                />
              </td>
              <td v-if="visibility.columns.emsAgenciesAdministered.visible">
                <input
                  class="form-control form-control-sm"
                  placeholder="Search by agencies administered"
                  type="search"
                  v-model="filtering.columns.emsAgenciesAdministered"
                />
              </td>
              <td v-if="visibility.columns.emsAgencyMemberships.visible">
                <input
                  class="form-control form-control-sm"
                  placeholder="Search by agency memberships"
                  type="search"
                  v-model="filtering.columns.emsAgencyMemberships"
                />
              </td>
            </tr>
            <tr
              @click="goToUser({ _id: user._id })"
              @key-up.enter="goToUser({ _id: user._id })"
              :key="user._id"
              v-for="user in users"
              tabindex="0"
            >
              <td v-if="visibility.columns.username.visible">
                {{ user.username }}
              </td>
              <td v-if="visibility.columns.name.visible">
                {{ `${user.firstName} ${user.lastName}` }}
              </td>
              <td v-if="visibility.columns.email.visible">{{ user.email }}</td>
              <lo-td-show-organisations
                :user="user"
                :showOrganisations="showUserOrganisations"
                :visibility="visibility"
                column="hospitalsAdministered"
              />
              <lo-td-show-organisations
                :user="user"
                :showOrganisations="showUserOrganisations"
                :visibility="visibility"
                column="hospitalMemberships"
              />
              <lo-td-show-organisations
                :user="user"
                :showOrganisations="showUserOrganisations"
                :visibility="visibility"
                column="emsAgenciesAdministered"
              />
              <lo-td-show-organisations
                :user="user"
                :showOrganisations="showUserOrganisations"
                :visibility="visibility"
                column="emsAgencyMemberships"
              />
            </tr>
          </tbody>
        </table>
      </form>
    </div>

    <organisations ref="organisationsRef"></organisations>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

import lo_td_show_organisations from "../../../root/components/lo-table/lo-td-show-organisations.vue";
import lo_th from "../../../root/components/lo-table/lo-th.vue";
import organisations from "./components/users-table.organisations.vue";

import { filtering } from "./users-table.filtering";
import { sorting } from "./users-table.sorting";
import { visibility } from "./users-table.visibility";

export default defineComponent({
  components: {
    "lo-td-show-organisations": lo_td_show_organisations,
    "lo-th": lo_th,
    organisations,
  },

  props: ["data", "fetching"],

  setup(props) {
    const total = computed(() => props.data?.users.length);

    const users = computed(() => {
      if (props.data !== undefined) {
        const allUsers = props.data.users.slice(0, 200);

        const filteredUsers = allUsers.filter(filtering.makeFilter());

        const filteredSortedUsers = filteredUsers.sort(
          sorting.makeSorter({ column: sorting.column, order: sorting.order }),
        );

        return filteredSortedUsers;
      }

      return [];
    });

    const organisationsRef = ref(null);

    const showUserOrganisations = ({ organisationsPropertyName, user }) => {
      organisationsRef.value.showOrganisations({
        organisationsPropertyName,
        user,
      });
    };

    const router = useRouter();

    const goToUser = ({ _id }) => {
      router.push({ path: `/user/${_id}` });
    };

    return {
      filtering,
      goToUser,
      organisationsRef,
      showUserOrganisations,
      sorting,
      total,
      users,
      visibility,
    };
  },
});
</script>
