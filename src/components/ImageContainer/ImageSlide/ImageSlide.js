import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Image from "./Image/Image";
import "./ImageSlide.scss";
const ImageSlide = ({ images }) => {
  function renderImages() {
    return images.map(image => (
      <Image url={image} key={Math.floor(Math.random() * 100000)} />
    ));
  }
  return <div className="imageSlide">{renderImages()}</div>;
};
ImageSlide.propTypes = {
  images: PropTypes.array.isRequired
};
const mapStateToProps = ({ images }) => ({
  images: images.images
});
export default connect(mapStateToProps)(ImageSlide);
