const INITIAL_STATE = {
  number: null,
  baremPrice: null
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_NUMBER":
      return { ...state, number: +action.payload };
    case "CHANGE_BAREM_PRICE":
      return { ...state, baremPrice: action.payload };
    default:
      return state;
  }
};
