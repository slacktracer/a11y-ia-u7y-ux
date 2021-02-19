export const makeFilterForStringProperty = ({ string }) => (property) => {
  return property.toLowerCase().includes(string.toLowerCase());
};
