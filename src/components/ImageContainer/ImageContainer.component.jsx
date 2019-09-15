import React from "react";
import ImageSlide from "./ImageSlide/ImageSlide.component";
import SelectedImage from "./SelectedImage/SelectedImage.component";
import "./ImageContainer.style.scss";
const ImageContainer = () => {
  return (
    <div className="imageContainer">
      <SelectedImage />
      <ImageSlide />
    </div>
  );
};

export default ImageContainer;
