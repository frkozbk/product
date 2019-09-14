import React, { useEffect } from "react";
import { connect } from "react-redux";
import ImageContainer from "./components/ImageContainer/ImageContainer.component";
import Product from "./components/Product/Product.component";

import "./App.scss";
import { changeImages, selectImage } from "./redux/image/image.actions";
import { changeNumber } from "./redux/options/options.action";

function App({ images, min, changeImages, selectImage, changeNumber }) {
  useEffect(() => {
    changeImages(images);
    selectImage(images[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App">
      <ImageContainer />
      <Product />
    </div>
  );
}
const mapStateToProps = state => ({
  images: state.product.productVariants.reduce((images, value) => {
    return [...images, ...value.images];
  }, []),
  min: state.product.baremList[0].minimumQuantity
});
const mapDispatchToProps = dispatch => ({
  changeImages: images => dispatch(changeImages(images)),
  selectImage: image => dispatch(selectImage(image)),
  changeNumber: number => dispatch(changeNumber(number))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
