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
    value: props.initialValue || '',
    isBlur:false,
    isValid: props.initialValid || false,
  });
  const {id, onInput} = props;
  const {value, isValid} = inputState;

  useEffect(()=>{
    onInput(id,value,isValid)
  },[id,isValid,value,onInput])

  const onChange = (e) => {
    dispatch({
      type: 'CHANGE',
      payload: e.target.value,
      validators: props.validators,
    });
  };
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
        onBlur={onBlur}
      />
    );
  return (
    <div
      className={`my-4 `}
    >
      <label
        className={`block font-bold mb-2
        ${!inputState.isValid && inputState.isBlur && 'bg-red-100'}
      `}
        htmlFor={props.id}
      >
        {props.label}
      </label>
      {element}
      {!inputState.isValid && inputState.isBlur && <p className='text-red-600'>{props.errorText}</p>}
    </div>
  );
};

export default Input;
