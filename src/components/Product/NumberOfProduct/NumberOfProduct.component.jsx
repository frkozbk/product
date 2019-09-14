import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { changeNumber } from "../../../redux/options/options.action";
import "./NumberOfProduct.style.scss";
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
