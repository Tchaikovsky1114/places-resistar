import React from 'react';

const Input = (props) => {
  const element =
    props.element === 'input' ? (
      <input
        className={`block w-full border boder-slate-200 bg-[#f8f8f8] py-1 px-2 focus:outline-none focus:bg-[#ebebeb] focus:border focus:border-purple-800
        ${props.invalid && 'text-red-600 bg-[#ffd1d1]'}`}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
      />
    ) : (
      <textarea
        className={`block w-full border boder-slate-200 bg-[#f8f8f8] py-1 px-2 focus:outline-none focus:bg-[#ebebeb] focus:border focus:border-purple-800
        ${props.invalid && 'text-red-600 bg-[#ffd1d1]'}`}
        id={props.id}
        rows={props.rows || 3}
      />
    );
  return (
    <div className={`my-4`}>
      <label className={`block font-bold mb-2
      ${props.invalid && 'text-red-600'}`} htmlFor={props.id}>
        {props.label}
      </label>
      {element}
    </div>
  );
};

export default Input;
