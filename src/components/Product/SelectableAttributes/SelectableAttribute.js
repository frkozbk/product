import React from "react";
import PropTypes from "prop-types";
import "./SelectableAttribute.scss";
import Button from "./Button";
const SelectableAttribute = ({ name, options }) => {
  function renderOptions() {
    return options.map(option => (
      <Button option={option} categoryName={name} key={option} />
    ));
  }
  return (
    <div className="selectableAttribute">
      <label className="selectableAttribute-name">{name}</label>
      {renderOptions()}
    </div>
  );
};
SelectableAttribute.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
};
export default SelectableAttribute;
