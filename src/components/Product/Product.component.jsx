import React from "react";
import { connect } from "react-redux";

import SelectableAttribute from "./SelectableAttributes/SelectableAttribute.component";
import BaremPrice from "./BaremPrice/BaremPrice.component";
import NumberOfProduct from "./NumberOfProduct/NumberOfProduct.component";
import TotalPrice from "./TotalPrice/TotalPrice.component";

import "./Product.style.scss";

const Product = ({ selectables, productTitle, baremList }) => {
  const minimumQuantity = baremList[0].minimumQuantity;
  const maxPrice = baremList[0].price;
  const minPrice = baremList[baremList.length - 1].price;
  function renderSelectables() {
    return selectables.map(selectable => (
      <SelectableAttribute
        name={selectable.name}
        options={selectable.values}
        key={selectable.name}
      />
    ));
  }
  function currencyFormat(num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  return (
    <div className="product">
      <h1 className="product-title">{productTitle}</h1>
      <strong className="product-price">
        {currencyFormat(minPrice)}
        {`${maxPrice !== minPrice ? `-${currencyFormat(maxPrice)}` : ""}`} TL
      </strong>
      <p className="product-info">
        {minimumQuantity} Adet (Minimum Sipariş Adedi)
      </p>
      {renderSelectables()}
      <BaremPrice />
      <NumberOfProduct />
      <TotalPrice />
    </div>
  );
};
const mapStateToProps = state => ({
  productTitle: state.product.productTitle,
  selectables: state.product.selectableAttributes,
  baremList: state.product.baremList
});
export default connect(mapStateToProps)(Product);
