import React from "react";
import { connect } from "react-redux";
import "./TotalPrice.style.scss";
const TotalPrice = ({ number, baremPrice }) => {
  function currencyFormat(num = number * baremPrice) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
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
        <button className="addBasket-button">SEPETE EKLE</button>
        <span>Ödeme Seçenekleri</span>
      </div>
    </>
  );
};
const mapStateToProps = state => ({
  number: state.options.number,
  baremPrice: state.options.baremPrice
});
export default connect(mapStateToProps)(TotalPrice);
