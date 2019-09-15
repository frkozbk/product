import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ImageContainer from "./components/ImageContainer/ImageContainer";
import Product from "./components/Product/Product";

import { changeImages, selectImage } from "./redux/image/image.actions";
import { getOptions, selectProduct } from "./redux/options/options.action";
import {
  getVariants,
  filterVariants,
  changeSelectable
} from "./redux/productVariants/productVariants.actions";
import "./App.scss";

function App({
  images,
  changeImages,
  selectImage,
  getOptions,
  options,
  productVariants,
  getVariants,
  reducedProductVariants,
  productOptions,
  filterVariants,
  changeSelectable,
  selectProduct
}) {
  // mounted
  useEffect(() => {
    changeImages(images);
    selectImage(images[0]);
    getOptions(options);
    const variants = productVariants.reduce((products, product) => {
      const newObj = product.attributes.reduce(
        (newObj, value) => {
          return { ...newObj, [value.name]: value.value };
        },
        { id: product.id, images: product.images }
      );
      return [...products, newObj];
    }, []);
    getVariants(variants);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (productOptions) {
      let isCheckTime = true;
      let keys = Object.keys(options);
      for (let option of keys) {
        if (productOptions[option] === null) {
          isCheckTime = false;
        }
      }
      if (isCheckTime) {
        let filteredVariants = reducedProductVariants;
        for (let key of keys) {
          filteredVariants = filteredVariants.filter(value => {
            return value[key] === productOptions[key];
          });
        }
        filterVariants(filteredVariants);
        if (filteredVariants.length === 0) {
          changeSelectable(false);
        } else {
          changeSelectable(true);
          changeImages(filteredVariants[0].images);
          selectImage(filteredVariants[0].images[0]);
          selectProduct(filteredVariants[0].id);
        }
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productOptions]);
  return (
    <div className="App">
      <ImageContainer />
      <Product />
    </div>
  );
}
App.propTypes = {
  images: PropTypes.array.isRequired,
  changeImages: PropTypes.func.isRequired,
  selectImage: PropTypes.func.isRequired,
  getOptions: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
  productVariants: PropTypes.array.isRequired,
  getVariants: PropTypes.func.isRequired,
  reducedProductVariants: PropTypes.array.isRequired,
  productOptions: PropTypes.object,
  filterVariants: PropTypes.func.isRequired,
  changeSelectable: PropTypes.func.isRequired,
  selectProduct: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  images: state.product.productVariants.reduce((images, value) => {
    return [...images, ...value.images];
  }, []),
  min: state.product.baremList[0].minimumQuantity,
  options: state.product.selectableAttributes.reduce((options, value) => {
    return { ...options, [value.name]: null };
  }, {}),
  productVariants: state.product.productVariants,
  productOptions: state.options.productOptions,
  filteredVariants: state.variants.filteredVariants,
  reducedProductVariants: state.variants.productVariants,
  productId: state.options.productId
});
const mapDispatchToProps = dispatch => ({
  changeImages: images => dispatch(changeImages(images)),
  selectImage: image => dispatch(selectImage(image)),
  getOptions: options => dispatch(getOptions(options)),
  getVariants: variants => dispatch(getVariants(variants)),
  filterVariants: filteredVariants =>
    dispatch(filterVariants(filteredVariants)),
  changeSelectable: value => dispatch(changeSelectable(value)),
  selectProduct: productId => dispatch(selectProduct(productId))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
