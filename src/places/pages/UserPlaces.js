import React, {useEffect, useState } from 'react';
import Placelist from '../components/Placelist';
import { useParams } from 'react-router-dom';
import { useHttp } from '../../shared/hooks/useHttp';
import ErrorModal from '../../shared/components/UI/ErrorModal';
import LoadingSpinner from '../../shared/components/UI/LoadingSpinner';
const UserPlaces = () => {
  const {sendRequest,error,clearError,isLoading} = useHttp()
  const [loadedPlaces,setLoadedPlaces] = useState()
  const userId = useParams().userId;
  
  // const placeCtx = useContext(PlaceContext) 
  // const places = placeCtx.items

  useEffect(()=>{
    const fetchPlaces = async () => {
      try{
        const responseData =  await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/places/user/${userId}`)
        setLoadedPlaces(responseData.places)
      }catch(err){}
    }
    fetchPlaces()
  },[sendRequest,userId])

  const placeDeleteHandler = (deletedPlaceId) => {
    setLoadedPlaces(prev => prev.filter(place => place.id !== deletedPlaceId))
  }
  
  return (
    <>
    <ErrorModal error={error} onClear={clearError} />
    {isLoading && <LoadingSpinner large="large" /> }
      {!isLoading && loadedPlaces && <Placelist items={loadedPlaces} onDeletePlace={placeDeleteHandler}/>}
      </>
  );
};

export default UserPlaces;