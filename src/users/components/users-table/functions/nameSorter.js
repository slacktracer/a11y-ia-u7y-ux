export const nameSorter = ({ order }) => (userA, userB) => {
  const a = String(userA.firstName + " " + userA.lastName);
  const b = String(userB.firstName + " " + userB.lastName);

  if (order === "desc") {
    return b.localeCompare(a);
  }

  return a.localeCompare(b);
};
