import { computed, reactive } from "vue";

const columns = reactive({
  email: { name: "Email", visible: true },
  emsAgenciesAdministered: { name: "Agencies Administered", visible: true },
  emsAgencyMemberships: { name: "Agency Memberships", visible: true },
  hospitalMemberships: { name: "Hospital Memberships", visible: true },
  hospitalsAdministered: { name: "Hospitals Administered", visible: true },
  name: { name: "Name", visible: true },
  username: { name: "Username", visible: true },
});

const set = (column) => (columns[column].visible = !columns[column].visible);

const visibleColumnsCount = computed(() =>
  Object.values(columns).reduce((count, column) => {
    if (column.visible === true) {
      count += 1;
    }

    return count;
  }, 0),
);

export const visibility = reactive({
  columns,
  set,
  visibleColumnsCount,
});
