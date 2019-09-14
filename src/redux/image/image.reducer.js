const INITIAL_STATE = {
  images: [],
  selectedImage: ""
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_IMAGES":
      return { ...state, images: action.payload };
    case "SELECT_IMAGE":
      return { ...state, selectedImage: action.payload };
    default:
      return state;
  }
};
