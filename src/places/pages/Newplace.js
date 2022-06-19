import React, { useCallback, useReducer } from 'react';
import {VALIDATOR_MIN, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE } from '../../shared/util/validators';
import Button from '../../shared/components/FormElements/Button'
import { useForm } from '../../shared/hooks/useForm';

const Newplace = () => {
 const [formState,inputHandler] = useForm({
    title: {
      value:'',
      isValid: false
    },
    description: {
      value:'',
      isValid: false
    },
    address: {
      value:'',
      isValid: false
    }
  },false)



  const placeSubmitHandler = e => {
    e.preventDefault();
    console.log(formState.inputs)
  }
  return (
    <form
    className="list-none my-0 m-auto p-4 w-11/12 max-w-2xl shadow-md rounded-md bg-white"
    onSubmit={placeSubmitHandler}>
      <Input
        id='title'
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="제목은 필수 입력사항입니다!"
        onInput={inputHandler}
      />
      <Input
       id='description'
        element="textarea"
        type="text"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(20)]}
        errorText="20글자 이상 입력해주세요"
        onInput={inputHandler}
      />
       <Input
       id='address'
        element="input"
        type="text"
        label="address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="유효한 주소인지 확인해주세요"
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>ADD PLACE</Button>
    </form>
  );
};

export default Newplace;
