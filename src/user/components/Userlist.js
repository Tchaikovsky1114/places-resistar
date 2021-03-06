import React from 'react';

import UserItem from './UserItem';
import Card from '../../shared/components/UI/Card';

const Userlist = (props) => {
  if (props.items.length === 0) {
    return (
      <Card>
        <h2>No users found.</h2>
      </Card>
    );
  }
  
  return (
    <ul className="w-11/12 absolute left-1/2 -translate-x-1/2 flex justify-start items-center flex-wrap gap-12">
      {props.items.map((item) => (
        <UserItem
          key={item.id}
          image={item.image}
          id={item.id}
          name={item.name}
          // places는 other place가 아닌, place를 저장한 수. dataType:number.
          placeCount={item.places.length}
        />
      ))}
    </ul>
  );
};

export default Userlist;
