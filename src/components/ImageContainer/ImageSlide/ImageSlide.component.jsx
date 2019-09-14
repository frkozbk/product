import React from "react";
import { connect } from "react-redux";
import Image from "./Image/Image.component";
import "./ImageSlide.style.scss";
const ImageSlide = ({ images }) => {
  function renderImages() {
    return images.map(image => (
      <Image url={image} key={Math.floor(Math.random() * 100000)} />
    ));
  }
  return <div className="imageSlide">{renderImages()}</div>;
};
const mapStateToProps = ({ images }) => ({
  images: images.images
});
export default connect(mapStateToProps)(ImageSlide);
