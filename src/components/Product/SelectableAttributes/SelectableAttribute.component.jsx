import React from "react";
import "./SelectableAttribute.style.scss";
import Button from "./Button.component";
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

export default SelectableAttribute;
