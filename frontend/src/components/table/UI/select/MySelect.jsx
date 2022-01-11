import React from "react";

function MySelect({
  options,
  defaultValue,
  value,
  onChange,
  error,
  disabled = false,
}) {
  return (
    <select
      className="select_filter"
      disabled={error || disabled ? true : false}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
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
}

export default MySelect;
