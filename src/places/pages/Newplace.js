import React, { useCallback, useReducer } from 'react';
import {VALIDATOR_MIN } from '../../shared/util/validators';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE } from '../../shared/util/validators';

const formReducer = (state,action) => {

}

const Newplace = () => {

  const [formState,dispatch] = useReducer(formReducer,{
    inputs: {
      title: {
        value:'',
        isValid:false
      },
      description:{
        value:'',
        isValid:false
      }
    },
    isValid:''
  })

  const titleInputHandler = useCallback((id, value,isValid) => {
  },[])

  const descriptionInputHandler = useCallback((id, value,isValid) => {

  },[])
  return (
    <form className="list-none my-0 m-auto p-4 w-11/12 max-w-2xl shadow-md rounded-md bg-white">
      <Input
        id='title'
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="제목은 필수 입력사항입니다!"
        onChange={titleInputHandler}
      />
      <Input
       id='description'
        element="textarea"
        type="text"
        label="Description"
        validators={[VALIDATOR_MIN(20)]}
        errorText="최소 20자 이상 작성하셔야 해요"
        onChange={titleInputHandler}
      />
    </form>
  );
};

export default Newplace;
