import React from 'react';

const MainHeader = ({children}) => {
  return (
    <header className='w-full h-16 flex items-center justify-between fixed top-0 left-0 bg-rose-600 shadow-md shadow-stone-50 px-4 z-10 md:justify-between'>
      {children}
    </header>
  );
};

export default MainHeader;