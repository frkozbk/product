import React from "react";
import { connect } from "react-redux";
import "./BaremPrice.style.scss";
import BaremPriceOptionButton from "./BaremPriceOptionButton/BaremPriceOptionButton.component";
const BaremPrice = ({ baremList }) => {
  function renderBaremList() {
    return baremList.map((value, index) => {
      return (
        <li key={value.price}>
          <BaremPriceOptionButton
            {...value}
            last={index === baremList.length - 1}
          />
        </li>
      );
    });
  }
  return (
    <div className="baremPrice">
      <label>
        Toptan Fiyat
        <br />
        (Adet)
      </label>
      <div className="baremPrice-options">
        <ul>{renderBaremList()}</ul>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  baremList: state.product.baremList
});
export default connect(mapStateToProps)(BaremPrice);
