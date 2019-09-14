import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { selectOption } from "../../../redux/options/options.action";
import { filterVariants } from "../../../redux/producVariants/productVariants.actions";
const Button = ({
  option,
  categoryName,
  selectOption,
  selectedOptions,
  selectable,
  productOptions
}) => {
  const [disabled, setDisabled] = useState(false);
  function handleClick() {
    selectOption(categoryName, option);
    // filterVariants(categoryName, option);
  }
  function checkSelectedButton() {
    if (selectedOptions) {
      return option === selectedOptions[categoryName];
    }
  }
  useEffect(() => {
    if (checkButtonDisabled()) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectable, productOptions]);
  function checkButtonDisabled() {
    if (
      !selectable &&
      selectedOptions &&
      selectedOptions[categoryName] === option
    ) {
      return true;
    }
    return false;
  }
  return (
    <button
      className={`${disabled ? "disabled" : ""} selectableAttribute-option ${
        checkSelectedButton() ? "selected" : ""
      }`}
      onClick={handleClick}
      disabled={checkButtonDisabled()}
    >
      {option}
    </button>
  );
};
const mapStateToProps = state => ({
  selectedOptions: state.options.productOptions,
  filteredVariants: state.variants.filteredVariants,
  productOptions: state.options.productOptions,
  selectable: state.variants.selectable
});
const mapDispatchToProps = dispatch => ({
  selectOption: (categoryName, option) =>
    dispatch(selectOption(categoryName, option)),
  filterVariants: (category, option) =>
    dispatch(filterVariants(category, option))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
