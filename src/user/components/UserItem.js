import React from 'react';
import Avatar from '../../shared/components/UI/Avatar';
import Card from '../../shared/components/UI/Card';
import {Link} from 'react-router-dom'
const UserItem = (props) => {
  return (
    <li className='group'>
      
        <Card>
      <Link className="flex justify-center items-center gap-4 z-30 cursor-pointer" to={`/${props.id}/places`}>
        <div>
          <Avatar image={props.image} alt={props.name} />
        </div>
      <div>
        <h2>{props.name}</h2>
        <h3>{props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}</h3>
      </div>
      </Link>
      </Card>
      
    </li>
    
  );
};

export default UserItem;