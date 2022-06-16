import React from 'react';
import Card from '../../shared/components/UI/Card';
import { Link } from 'react-router-dom';
import PlaceItem from './PlaceItem';
const Placelist = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <Card>
          <h2> No places found.Maybe create one ? </h2>{' '}
          <button> Share Place </button>{' '}
        </Card>{' '}
      </div>
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
