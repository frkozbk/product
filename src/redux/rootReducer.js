import { combineReducers } from "redux";
import ProductReducer from "./product/product.reducer";
import ImageReducer from "./image/image.reducer";
import OptionsReducer from "./options/options.reducer";
export default combineReducers({
  product: ProductReducer,
  images: ImageReducer,
  options: OptionsReducer
});
