import React, { useCallback, useContext, useReducer } from 'react';
import {VALIDATOR_MIN, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import Input from '../../shared/components/FormElements/Input';
import ErrorModal from '../../shared/components/UI/ErrorModal';
import LoadingSpinner from '../../shared/components/UI/LoadingSpinner';
import Button from '../../shared/components/FormElements/Button'

import ImageUpload from '../../shared/components/FormElements/ImageUpload'

import { VALIDATOR_REQUIRE } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/useForm';
import { useHttp } from '../../shared/hooks/useHttp';
import { UserContext } from '../../store/UserContext';
import { useNavigate } from 'react-router-dom';




const Newplace = () => {
  const userCtx = useContext(UserContext)
  
  const {isLoading, error, sendRequest,clearError} = useHttp()
  const navigate = useNavigate()
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
    },
    image: {
      value: null,
      isValid: false
    }
  },
  false
  );

  const placeSubmitHandler = async e => {
    e.preventDefault();
    
    try{
      const formData = new FormData()
      formData.append('title', formState.inputs.title.value)
      formData.append('description', formState.inputs.description.value)
      formData.append('address', formState.inputs.address.value)
      formData.append('creator', userCtx.userId)
      formData.append('image', formState.inputs.image.value)
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/places`,
        'POST',
        formData,
        {
          Authorization: 'Bearer ' + userCtx.token
        }
        );
        navigate('/');
    }catch(err){
    }
  }
  return (
    <>
    <ErrorModal error={error} onClear={clearError} />
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
      <ImageUpload id="image" onInput={inputHandler} errorText="Please provide an image" />
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
      <Button type="submit" disabled={!formState.isValid}>ADD PLACE{isLoading && <LoadingSpinner asOverlay />}</Button>
    </form>
    </>
  );
};

export default Newplace;





// const fs = require('fs');

// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

// const current = input[0].split(' ').map(Number);

// const currentHour = current[0];
// const currentMinute = current[1];
// const cookTime = Number(input[1]);
