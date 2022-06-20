import React, { useCallback, useContext,useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Input from '../../shared/components/FormElements/Input';
import { PlaceContext } from '../../store/PlaceContext';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../shared/util/validators';
import Button from '../../shared/components/FormElements/Button';
import { useForm } from '../../shared/hooks/useForm';


const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { placeId } = useParams();
  const placeCtx = useContext(PlaceContext);
  const places = placeCtx.items;
  const place = places.find((place) => place.id === placeId);

  
 const [formState,inputHandler,setFormData] = useForm({
    title:{
      value:'',
      isValid:true
    },
    description:{
      value:'',
      isValid:true
    }
  },true)
  
  useEffect(()=>{
    setFormData({
      title: {
        value: place.title,
        isValid: true
      },
      description: {
        value: place.description,
        isValid: true
      }
      
    },
    true
    );
    setIsLoading(false)
  },[setFormData,place])
  
  
  const placeUpdateSubmitHandler = (e) => {
    e.preventDefault()
    console.log(formState.inputs)
  }
  if (!place) {
    return (
      <div>couldn't found place</div>
    );
  }
  if(isLoading){
    return (
      <div>Loading...</div>
    );
  }
  return(
  <form className="list-none my-0 m-auto p-4 w-11/12 max-w-2xl shadow-md rounded-md bg-white"
  onSubmit={placeUpdateSubmitHandler}>
  <Input
    id="title"
    element="input"
    type="text"
    label="Title"
    validators={[VALIDATOR_REQUIRE()]}
    errorText="Please enter a valid title"
    onInput={inputHandler}
    initialValue={formState.inputs.title.value}
    initialValid={formState.inputs.title.isValid}
  />
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
  <Button type='submit' disabled={!formState.isValid}>Update Place</Button>
</form>)
};

export default UpdatePlace;
