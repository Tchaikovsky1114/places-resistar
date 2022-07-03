import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Input from '../../shared/components/FormElements/Input';
import { useNavigate } from 'react-router-dom';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../shared/util/validators';
import Button from '../../shared/components/FormElements/Button';
import { useForm } from '../../shared/hooks/useForm';
import { UserContext } from '../../store/UserContext';
import ErrorCard from '../../shared/components/UI/ErrorCard';
import { useHttp } from '../../shared/hooks/useHttp';
import ErrorModal from '../../shared/components/UI/ErrorModal';
import LoadingSpinner from '../../shared/components/UI/LoadingSpinner';
import ImageUpload from '../../shared/components/FormElements/ImageUpload';

const UpdatePlace = () => {
  const {userId,token} = useContext(UserContext);
  const { isLoading, error, sendRequest, clearError } = useHttp();
  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: true,
      },
      description: {
        value: '',
        isValid: true,
      },
      image:{
        value: '',
        isValid: true
      }
    },
    true
  );

  const [loadedPlace, setLoadedPlace] = useState();
  
  const { placeId } = useParams();
  const navigate = useNavigate();
  
  
  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/places/${placeId}`
        );
        setLoadedPlace(responseData.place);
        setFormData(
          {
            title: {
              value: responseData.place.title,
              isValid: true,
            },
            description: {
              value: responseData.place.description,
              isValid: true,
            },
            image: {
              value: responseData.place.image,
              isValid: true,
            }
          },
          true
        );
        
      } catch (err) {}
    };
    fetchPlace();
  }, [sendRequest, placeId, setFormData]);
  
  const placeUpdateSubmitHandler = async (e) => {
    e.preventDefault();

    
    try {
      const formData = new FormData()
      formData.append("title", formState.inputs.title.value)
      formData.append("description", formState.inputs.description.value)
      formData.append("image",formState.inputs.image.value)
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/places/${placeId}`,
        'PATCH',
        formData,
        {
          Authorization: 'Bearer ' + token
        }
      );
     
      navigate(`/${userId}/places`)
    } catch (err) {}
  };

  if (isLoading) {
    return <LoadingSpinner large />;
  }

  if (!loadedPlace && !error) {
    return (
      <ErrorCard>
        <p>couldn't found place</p>
      </ErrorCard>
    );
  }
  console.log(loadedPlace.image);
  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {!isLoading && loadedPlace && (
        <form
          className="list-none my-0 m-auto p-4 w-11/12 max-w-2xl shadow-md rounded-md bg-white"
          onSubmit={placeUpdateSubmitHandler}
        >
          <Input
            id="title"
            element="input"
            type="text"
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title"
            onInput={inputHandler}
            initialValue={formState.inputs.title.value} // or loadedPlace.title
            initialValid={formState.inputs.title.isValid}
          />
          <ImageUpload id="image" onInput={inputHandler} initialImage={loadedPlace.image} updating center/>
          <Input
            id="description"
            element="textarea"
            type="text"
            label="Description"
            validators={[VALIDATOR_MINLENGTH(20)]}
            errorText="Please enter a valid description"
            onInput={inputHandler}
            initialValue={formState.inputs.description.value}
            initialValid={formState.inputs.description.isValid}
          />
          <Button type="submit" disabled={!formState.isValid}>
            Update Place
          </Button>
        </form>
      )}
    </>
  );
};

export default UpdatePlace;
