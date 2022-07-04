import React, { useState, useContext } from 'react';

import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import ErrorModal from '../../shared/components/UI/ErrorModal';
import LoadingSpinner from '../../shared/components/UI/LoadingSpinner';
import ImageUpload from '../../shared/components/FormElements/ImageUpload';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/useForm';
import {useHttp} from '../../shared/hooks/useHttp'
import { UserContext } from '../../store/UserContext';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const {userId,login,token} = useContext(UserContext);
  const [isLogInMode, setIsLoginMode] = useState(true);
  const {sendRequest, isLoading, error, clearError} = useHttp()
  const [test,setTest] = useState()
  const [formState, inputHandler, setFormData] = useForm({
    email: {
      value:'',
      isValid:''
    },
    password: {
      value:'',
      isValid:''
    }
  },
  false
  );
  
  const navigate = useNavigate();

  const switchSignHandler = () => {
    if (!isLogInMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
          image: undefined
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false
          },
          image: {
            value: null,
            isValid:false
          }
        },
        false
      );
    }
    setIsLoginMode((prev) => !prev);
  };



  const authSubmitHandler = async(e) => {
    e.preventDefault();
    
    if(isLogInMode){
      
      try{
      const responseData =  await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/users/login`,
          'POST',
          JSON.stringify({
            email:formState.inputs.email.value,
            password:formState.inputs.password.value
          }),
          {
            'Content-Type': 'application/json',
          }
          );
          console.log(responseData)
          login(responseData.userId, responseData.token);
          navigate('/');
        
      }catch(err){
      }
    }else{
      try {
        // 
        const formData = new FormData()
        formData.append('email', formState.inputs.email.value)
        formData.append('name', formState.inputs.name.value)
        formData.append('password', formState.inputs.password.value)
        // multer에서 사용하는 key값으로 설정한다.(image)
        formData.append('image', formState.inputs.image.value)
        
       const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/users/signup`,
          'POST',
          formData,
        )  
        login(responseData.userId, responseData.token);

        navigate('/');
      }catch(err){}
    }
    }  

  return (
    <>
    <ErrorModal error={error} onClear={clearError} />
    <div className="w-11/12 max-w-md my-28 mx-auto text-center">
      
      <h2 className="text-white text-center">
        Open the public that place just only you know
      </h2>
      <hr />
      <form className="mb-4" onSubmit={authSubmitHandler}>
        {!isLogInMode && (
          <Input
            element="input"
            id="name"
            type="text"
            label="Nickname"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please write your name"
            onInput={inputHandler}
          />
        )}
        {!isLogInMode && <ImageUpload center id="image" onInput={inputHandler} new errorText="Please provide an image" />}
        <Input
          element="input"
          id="email"
          type="email"
          label="E-Mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid e-mail"
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(8)]}
          errorText="Please enter a valid password, at leat 10 words"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          {isLogInMode ? '로그인' : '회원가입'}
          {isLoading && <LoadingSpinner asOverlay />}
        </Button>
      </form>

      <Button inverse onClick={switchSignHandler}>
        {isLogInMode ? '회원가입' : '로그인'}하러 가기
      </Button>
    </div>
    </>
  );
};

export default Auth;
