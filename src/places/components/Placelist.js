import React from 'react';
import Card from '../../shared/components/UI/Card';
import { Link } from 'react-router-dom';
import PlaceItem from './PlaceItem';
import Button from '../../shared/components/FormElements/Button';
import ErrorCard from '../../shared/components/UI/ErrorCard';


const Placelist = (props) => {
  if (props.items.length === 0 || !props.items) {
    return (
        <ErrorCard>
          <h2 className='text-2xl'> No places found...<br /> Maybe create one ? </h2>
          <div className='mt-4'>
          <Button to='/places/new'> Share Place </Button>
        </div>
        </ErrorCard>
      
    );
  }
  return (
    <ul className="list-none my-8 m-auto p-0 w-5/6 max-w-2xl ">
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageURL}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default Placelist;
