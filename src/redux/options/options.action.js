export const getOptions = options => ({
  type: "GET_OPTIONS",
  payload: options
});
export const changeNumber = number => ({
  type: "CHANGE_NUMBER",
  payload: number
});
export const changeBaremPrice = price => ({
  type: "CHANGE_BAREM_PRICE",
  payload: price
});
export const selectOption = (categoryName, option) => ({
  type: "SELECT_OPTION",
  payload: { categoryName, option }
});
export const selectProduct = productId => ({
  type: "SELECT_PRODUCT",
  payload: productId
});
