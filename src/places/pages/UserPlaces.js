import React, { useContext } from 'react';
import Placelist from '../components/Placelist';
import {useParams} from 'react-router-dom'
import { PlaceContext } from '../../store/PlaceContext';
const UserPlaces = () => {
  const currentParams = useParams().userId;
  
  const placeCtx = useContext(PlaceContext) 
  const places = placeCtx.items

  const loadedPlaces = places.filter((place) => place.creator === currentParams);
  return (
    
      <Placelist items={loadedPlaces} />
    
  );
};

export default UserPlaces;