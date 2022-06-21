import React, { useState, useContext, useEffect } from 'react';
import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/useForm';
import { UserContext } from '../../store/UserContext';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const { login, isLoggedIn } = useContext(UserContext);

  const [formState, inputHandler, setFormData] = useForm({
    email: {},
    password: {},
  });
  const [isLogInMode, setisLogInMode] = useState(true);
  const navigate = useNavigate();

  const authSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
    login();
    navigate('/');
  };

  const switchSignHandler = () => {
    if (!isLogInMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: '',
          isValid: false,
        },
        false
      );
    }
    setisLogInMode((prev) => !prev);
  };

  return (
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
          validators={[VALIDATOR_MINLENGTH(10)]}
          errorText="Please enter a valid password, at leat 10 words"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          {isLogInMode ? '로그인' : '회원가입'}
        </Button>
      </form>

      <Button inverse onClick={switchSignHandler}>
        {isLogInMode ? '회원가입' : '로그인'}하러 가기
      </Button>
    </div>
  );
};

export default Auth;
