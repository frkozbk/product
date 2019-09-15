import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeNumber } from "../../../redux/options/options.action";
import "./NumberOfProduct.scss";
const NumberOfProduct = ({ changeNumber, baremList }) => {
  const min = baremList[0].minimumQuantity;
  const max = baremList[baremList.length - 1].maximumQuantity;

  const [number, setNumber] = useState(min);
  useEffect(() => {
    changeNumber(number);
  }, [changeNumber, number]);
  function handleBlur() {
    if (number < min) {
      setNumber(min);
    } else if (number > max) {
      setNumber(max);
    }
  }

  return (
    <div className="numberOfProduct">
      <label>Adet</label>
      <input
        type="number"
        value={number}
        min={min}
        max={max}
        onChange={e => setNumber(e.target.value)}
        onBlur={handleBlur}
      />
      Adet
      <p className="numberOfProduct-stock">Stok Adeti:{max}</p>
    </div>
  );
};
NumberOfProduct.propTypes = {
  baremList: PropTypes.array.isRequired,
  changeNumber: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  baremList: state.product.baremList
});
const mapDispatchToProps = dispatch => ({
  changeNumber: number => dispatch(changeNumber(number))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NumberOfProduct);
