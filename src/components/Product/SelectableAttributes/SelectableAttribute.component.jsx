import React from "react";
import "./SelectableAttribute.style.scss";
const SelectableAttribute = ({ name, options }) => {
  function renderOptions() {
    return options.map(option => (
      <button className="selectableAttribute-option">{option}</button>
    ));
  }
  return (
    <div className="selectableAttribute">
      <label className="selectableAttribute-name">{name}</label>
      {renderOptions()}
    </div>
  );
};

export default SelectableAttribute;
