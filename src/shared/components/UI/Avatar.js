import React from 'react';

const Avatar = props => {
  return (
    <div className=" w-12 h-12 rounded-full overflow-hidden ring-2 flex justify-center items-center">
      <img
        src={props.image}
        alt={props.alt}
        className="block object-cover"
        style={{ width: props.width, height: props.width }}
      />
    </div>
  );
};

export default Avatar;
