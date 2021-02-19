<template>
  <div
    aria-hidden="true"
    aria-labelledby="userOrganisationsLabel"
    class="modal fade"
    id="userOrganisations"
    tabindex="-1"
    ref="modalRef"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="userOrganisationsLabel">
            {{ userOrganisations.listName }} {{ userOrganisations.userName }}
          </h5>
          <button
            aria-label="Close"
            class="btn-close"
            data-bs-dismiss="modal"
            type="button"
          ></button>
        </div>
        <div class="modal-body">
          <ul>
            <li
              :key="userOrganisation.id"
              v-for="userOrganisation in userOrganisations.list"
            >
              {{ userOrganisation.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap/dist/js/bootstrap.esm.min";
import { defineComponent, onMounted, reactive, ref } from "vue";

export default defineComponent({
  setup() {
    const modalRef = ref(null);

    let modal;

    onMounted(() => {
      modal = new Modal(modalRef.value);
    });

    const propertiesToTitleMap = {
      emsAgenciesAdministered: "Agencies Administered by",
      emsAgencyMemberships: "Agency Memberships of",
      hospitalsAdministered: "Hospitals Administered by",
      hospitalMemberships: "Hospital Memberships of",
    };

    const userOrganisations = reactive({});

    const showOrganisations = ({ organisationsPropertyName, user }) => {
      userOrganisations.list = user[organisationsPropertyName];
      userOrganisations.listName =
        propertiesToTitleMap[organisationsPropertyName];
      userOrganisations.userName = user.firstName + " " + user.lastName;

      modal.show();
    };

    return { modalRef, showOrganisations, userOrganisations };
  },
});
</script>
