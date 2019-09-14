import React from "react";
import "./ImageContainer.style.scss";
import ImageSlide from "./ImageSlide/ImageSlide.component";
import SelectedImage from "./SelectedImage/SelectedImage.component";
const ImageContainer = () => {
  return (
    <div className="imageContainer">
      <SelectedImage />
      <ImageSlide />
    </div>
  );
};

export default ImageContainer;
