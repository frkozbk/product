import React from "react";
import ImageSlide from "./ImageSlide/ImageSlide";
import SelectedImage from "./SelectedImage/SelectedImage";
import "./ImageContainer.scss";
const ImageContainer = () => {
  return (
    <div className="imageContainer">
      <SelectedImage />
      <ImageSlide />
    </div>
  );
};

export default ImageContainer;
