import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./SelectedImage.scss";
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
SelectedImage.propTypes = {
  selectedImage: PropTypes.string.isRequired
};
const mapStateToProps = ({ images }) => ({
  selectedImage: images.selectedImage
});
export default connect(mapStateToProps)(SelectedImage);
