import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./TotalPrice.style.scss";
const TotalPrice = ({
  number,
  baremPrice,
  productOptions,
  selectable,
  selectedProductId
}) => {
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    checkDisabled();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectable, productOptions]);
  function checkDisabled() {
    const isDisable = () => {
      let isOptionsSelected = true;
      for (let key in productOptions) {
        if (productOptions[key] === null) {
          isOptionsSelected = false;
        }
      }
      return isOptionsSelected;
    };
    if (isDisable() && selectable) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }
  function currencyFormat(num = number * baremPrice) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  function handleSubmit() {
    console.log({ selectedProductId, number, baremPrice });
  }
  return (
    <>
      <div className="totalPrice">
        <label className="totalPrice-name">
          <strong>Toplam</strong>
        </label>
        <div className="totalPrice-price">
          <label>
            <strong>{currencyFormat()} TL</strong>
          </label>
          <small>
            Kargo ücreti: <span>Alıcı Öder.</span>
          </small>
        </div>
      </div>
      <div className="addBasket">
        <button
          className={`${disabled ? "disabled" : ""} addBasket-button`}
          disabled={disabled}
          onClick={handleSubmit}
        >
          SEPETE EKLE
        </button>
        <span>Ödeme Seçenekleri</span>
      </div>
    </>
  );
};
const mapStateToProps = state => ({
  number: state.options.number,
  baremPrice: state.options.baremPrice,
  selectedProductId: state.options.productId,
  productOptions: state.options.productOptions,
  selectable: state.variants.selectable
});
export default connect(mapStateToProps)(TotalPrice);
