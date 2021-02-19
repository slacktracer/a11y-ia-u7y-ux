import { reactive } from "vue";

import { makeBasicSorter } from "../../../root/functions/makeBasicSorter";
import { makeByArrayLengthSorter } from "../../../root/functions/makeByArrayLengthSorter";
import { nameSorter } from "./functions/nameSorter";

const columns = {
  email: makeBasicSorter,
  emsAgenciesAdministered: makeByArrayLengthSorter,
  emsAgencyMemberships: makeByArrayLengthSorter,
  hospitalMemberships: makeByArrayLengthSorter,
  hospitalsAdministered: makeByArrayLengthSorter,
  name: nameSorter,
  username: makeBasicSorter,
};

const makeSorter = ({ column, order }) => columns[column]({ column, order });

const set = (column) => {
  if (sorting.column === column) {
    sorting.order = sorting.order === "desc" ? "asc" : "desc";

    return;
  }

  sorting.column = column;
  sorting.order = "asc";
};

export const sorting = reactive({
  column: "username",
  makeSorter,
  order: "asc",
  set,
});
