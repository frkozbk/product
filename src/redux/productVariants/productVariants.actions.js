export const getVariants = variants => ({
  type: "GET_VARIANTS",
  payload: variants
});
export const filterVariants = filteredVariants => ({
  type: "FILTER_VARIANTS",
  payload: filteredVariants
});
export const changeSelectable = value => ({
  type: "CHANGE_SELECTABLE",
  payload: value
});
