import React from 'react';

const Card = props => {
  return (
    <div className="relative m-0 shadow-lg shadow-gray-100 rounded-md p-4 overflow-hidden bg-slate-700 w-48 flex justify-center items-center group-hover:bg-yellow-400">
      {props.children}
    </div>
  );
};

export default Card;




