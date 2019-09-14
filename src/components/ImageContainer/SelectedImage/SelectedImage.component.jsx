import React from "react";
import { connect } from "react-redux";
import "./SelectedImage.style.scss";
const SelectedImage = ({ selectedImage }) => {
  return (
    <div className="selectedImage">
      <img
        src={selectedImage}
        alt="selectedImage"
        className="selectedImage-image"
      />
    </div>
  );
};
const mapStateToProps = ({ images }) => ({
  selectedImage: images.selectedImage
});
export default connect(mapStateToProps)(SelectedImage);
