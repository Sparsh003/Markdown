import React from "react";

const Input = ({
  id,
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
  onClick,
  onBlur
}) => (
  <div className="">
    {label && (
      <label
        htmlFor="input-field"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
    )}
    <input
      type={type}
      value={value}
      name={name}
      id={id}
      className="shadow-sm  w-96 h-10 block  sm:text-sm border-gray-300 border-2"
      placeholder={placeholder}
      onChange={(e)=>{onChange(e)}}
      onClick={onClick}
      onBlur={onBlur}
    />
  </div>
);

export default Input;
