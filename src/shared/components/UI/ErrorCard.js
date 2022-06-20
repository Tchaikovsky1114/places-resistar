import React from 'react';

const ErrorCard = ({children}) => {
  return (
    <div className='bg-white p-4 whitespace-nowrap absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col rounded-lg'>
      {children}
    </div>
  );
};

export default ErrorCard;