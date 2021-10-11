import React from "react";

const ProductSorting = ({ options, defaultValue, value, onChange }) => {
  return (
    <select value={value} onChange={(event) => onChange(event.target.value)} className="form-select form-select-sm mb-3  " aria-label=".form-select-sm example" id="form_select">
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default ProductSorting;
