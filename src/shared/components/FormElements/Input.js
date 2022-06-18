import React, { useEffect, useReducer } from 'react';
import { validate } from '../../util/validators';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.payload,
        isValid: validate(action.payload, action.validators),
      };
      case 'BLUR':
        return {
          ...state,
          isBlur: true
        }
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: '',
    isValid: true,
    isBlur:false,
  });
  const {id, onChange} = props;
  const {value, isValid} = inputState;
  useEffect(()=>{
    onChange(props.id,value,isValid)
  },[id,isValid,onChange])

  // const onChange = (e) => {
  //   dispatch({
  //     type: 'CHANGE',
  //     payload: e.target.value,
  //     validators: props.validators,
  //   });
  // };
  const onBlur = () => {
    dispatch({
      type: 'BLUR'
    })
  }
  const element =
    props.element === 'input' ? (
      <input
        className={`block w-full border boder-slate-200 bg-[#f8f8f8] py-1 px-2 focus:outline-none focus:bg-[#ebebeb] focus:border focus:border-purple-800
        `}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        value={inputState.value}
        onChange={onChange}
        onBlur={onBlur}
      />
    ) : (
      <textarea
        className={`block w-full border boder-slate-200 bg-[#f8f8f8] py-1 px-2 focus:outline-none focus:bg-[#ebebeb] focus:border focus:border-purple-800
        `}
        id={props.id}
        rows={props.rows || 3}
        value={inputState.value}
        onChange={onChange}

      />
    );
  return (
    <div
      className={`my-4 ${!inputState.isValid && inputState.isBlur && 'text-red-600 bg-[#ffd1d1]'}`}
    >
      <label
        className={`block font-bold mb-2
      ${props.invalid && 'text-red-600'}`}
        htmlFor={props.id}
      >
        {props.label}
      </label>
      {element}
      {!inputState.isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
