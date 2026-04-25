export const formatDate = (dateString) => {
  if (!dateString) return '';
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const isDateValid = (dateString) => {
  const date = new Date(dateString);
  return !isNaN(date.getTime());
};
