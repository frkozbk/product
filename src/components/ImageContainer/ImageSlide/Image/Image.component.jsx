import React from "react";
import { connect } from "react-redux";
import "./Image.style.scss";
import { selectImage } from "../../../../redux/image/image.actions";
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
