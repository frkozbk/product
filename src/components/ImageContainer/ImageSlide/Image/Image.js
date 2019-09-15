import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { selectImage } from "../../../../redux/image/image.actions";
import "./Image.scss";
const Image = ({ url, selectImage, selectedImage }) => {
  function handleClick() {
    selectImage(url);
  }

  return (
    <img
      src={url}
      style={{ borderColor: `${url === selectedImage ? "#000" : "#eee"}` }}
      alt="product"
      className="thumbnail"
      onClick={handleClick}
    />
  );
};
Image.propTypes = {
  url: PropTypes.string.isRequired,
  selectImage: PropTypes.func.isRequired,
  selectedImage: PropTypes.string.isRequired
};

const mapStateToProps = ({ images }) => ({
  selectedImage: images.selectedImage
});
const mapDispatchToProps = dispatch => ({
  selectImage: image => dispatch(selectImage(image))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Image);
