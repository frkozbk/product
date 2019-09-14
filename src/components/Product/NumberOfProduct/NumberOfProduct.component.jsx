import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { changeNumber } from "../../../redux/options/options.action";
import "./NumberOfProduct.style.scss";
const NumberOfProduct = ({ min, max, changeNumber }) => {
  const [number, setNumber] = useState(min);
  useEffect(() => {
    changeNumber(number);
  }, [changeNumber, number]);
  function handleBlur() {
    if (number < min) {
      setNumber(min);
    }
  }
  return (
    <div className="numberOfProduct">
      <label>Adet</label>
      <input
        type="number"
        value={number}
        min={min}
        onChange={e => setNumber(e.target.value)}
        onBlur={handleBlur}
      />
      Adet
      <p className="numberOfProduct-stock">Stok Adeti:{max}</p>
    </div>
  );
};
const mapStateToProps = state => ({
  min: state.product.baremList[0].minimumQuantity,
  max:
    state.product.baremList[state.product.baremList.length - 1].maximumQuantity
});
const mapDispatchToProps = dispatch => ({
  changeNumber: number => dispatch(changeNumber(number))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NumberOfProduct);
