import React from "react";
import { connect } from "react-redux";

import SelectableAttribute from "./SelectableAttributes/SelectableAttribute.component";
import BaremPrice from "./BaremPrice/BaremPrice.component";
import NumberOfProduct from "./NumberOfProduct/NumberOfProduct.component";
import TotalPrice from "./TotalPrice/TotalPrice.component";

import "./Product.style.scss";

const Product = ({ selectables, productTitle }) => {
  function renderSelectables() {
    return selectables.map(selectable => (
      <SelectableAttribute name={selectable.name} options={selectable.values} />
    ));
  }
  return (
    <div className="product">
      <h1 className="product-title">{productTitle}</h1>
      <strong className="product-price">2,00-2,32 TL</strong>
      <p className="product-info">100 Adet (Minumum Sipariş Adedi)</p>
      {renderSelectables()}
      <BaremPrice />
      <NumberOfProduct />
      <TotalPrice />
    </div>
  );
};
const mapStateToProps = state => ({
  productTitle: state.product.productTitle,
  selectables: state.product.selectableAttributes
});
export default connect(mapStateToProps)(Product);
