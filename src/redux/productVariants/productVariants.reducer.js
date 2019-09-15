const INITIAL_STATE = {
  productVariants: [],
  filteredVariants: null,
  selectable: true
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_VARIANTS":
      return { ...state, productVariants: action.payload };
    case "FILTER_VARIANTS":
      return {
        ...state,
        filteredVariants: action.payload
      };
    case "CHANGE_SELECTABLE":
      return { ...state, selectable: action.payload };
    default:
      return state;
  }
};
