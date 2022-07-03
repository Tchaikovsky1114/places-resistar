import React from 'react';

const LoadingSpinner = props => {
  if (props.large) {
    return (
      <div className='h-full w-full absolute top-0 left-0 bg-white opacity-90 flex  justify-center items-center'>
      <div after="" className="
      inline-block w-16 h-16
      after:block after:w-12 after:h-12 after:m-1 after:rounded-full after:border-4 after:border-t-purple-600 after:border-b-purple-600 after:border-l-transparent after:border-r-transparent after:animate-spin"></div>
    </div>
    );
  }
  

  return (<div after="" className={`inline-block w-4 h-4 after:content-[attr(after)] after:block after:w-4 after:h-4 after:m-1 after:rounded-full after:border-2 after:border-t-purple-400 after:border-b-purple-400 after:border-l-transparent after:border-r-transparent after:animate-spin`}></div>);
};

export default LoadingSpinner;
