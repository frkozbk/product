const INITIAL_STATE = {
  number: null,
  baremPrice: null,
  productId: null
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_NUMBER":
      return { ...state, number: +action.payload };
    case "CHANGE_BAREM_PRICE":
      return { ...state, baremPrice: action.payload };
    case "GET_OPTIONS":
      return { ...state, productOptions: action.payload };
    case "SELECT_OPTION":
      return {
        ...state,
        productOptions: {
          ...state.productOptions,
          [action.payload.categoryName]: action.payload.option
        }
      };
    case "SELECT_PRODUCT":
      return { ...state, productId: action.payload };
    default:
      return state;
  }
};
