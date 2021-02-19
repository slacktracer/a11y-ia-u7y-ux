import { reactive } from "vue";

import { makeFilterForObjectsInsideArray } from "../../../root/functions/makeFilterForObjectsInsideArray";
import { makeFilterForStringProperty } from "../../../root/functions/makeFilterForStringProperty";

const columns = {
  email: "",
  emsAgenciesAdministered: "",
  emsAgencyMemberships: "",
  hospitalMemberships: "",
  hospitalsAdministered: "",
  name: "",
  username: "",
};

const makeFilter = () => {
  const emsAgenciesAdministeredFilter = makeFilterForObjectsInsideArray({
    arrayPropertyName: "emsAgenciesAdministered",
    itemPropertyName: "name",
    string: filtering.columns.emsAgenciesAdministered,
  });
  const emsAgencyMembershipsFilter = makeFilterForObjectsInsideArray({
    arrayPropertyName: "emsAgencyMemberships",
    itemPropertyName: "name",
    string: filtering.columns.emsAgencyMemberships,
  });
  const emailFilter = makeFilterForStringProperty({
    string: filtering.columns.email,
  });
  const hospitalMembershipsFilter = makeFilterForObjectsInsideArray({
    arrayPropertyName: "hospitalMemberships",
    itemPropertyName: "name",
    string: filtering.columns.hospitalMemberships,
  });
  const hospitalsAdministeredFilter = makeFilterForObjectsInsideArray({
    arrayPropertyName: "hospitalsAdministered",
    itemPropertyName: "name",
    string: filtering.columns.hospitalsAdministered,
  });
  const nameFilter = makeFilterForStringProperty({
    string: filtering.columns.name,
  });
  const usernameFilter = makeFilterForStringProperty({
    string: filtering.columns.username,
  });

  return (user) =>
    usernameFilter(user.username) &&
    nameFilter(`${user.firstName} ${user.lastName}`) &&
    emailFilter(user.email) &&
    hospitalsAdministeredFilter(user) &&
    hospitalMembershipsFilter(user) &&
    emsAgenciesAdministeredFilter(user) &&
    emsAgencyMembershipsFilter(user);
};

export const filtering = reactive({
  columns,
  makeFilter,
});
