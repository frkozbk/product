import React, { useEffect } from "react";
import { connect } from "react-redux";
import { changeBaremPrice } from "../../../../redux/options/options.action";
const BaremPriceOptionButton = props => {
  const {
    number,
    minimumQuantity,
    maximumQuantity,
    price,
    last,
    changeBaremPrice
  } = props;
  useEffect(() => {
    if (number >= minimumQuantity && number <= maximumQuantity) {
      changeBaremPrice(price);
    }
  }, [changeBaremPrice, maximumQuantity, minimumQuantity, number, price]);
  return (
    <button
      className="baremPrice-option"
      style={{
        backgroundColor:
          number >= minimumQuantity && number <= maximumQuantity
            ? "#fdedbf"
            : "transparent"
      }}
    >
      {minimumQuantity}
      {`${!last ? `-${maximumQuantity}` : "+"}`}
      <br />
      {price} TL
    </button>
  );
};
const mapStateToProps = state => ({
  number: state.options.number
});
const mapDispatchToProps = dispatch => ({
  changeBaremPrice: price => dispatch(changeBaremPrice(price))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BaremPriceOptionButton);
