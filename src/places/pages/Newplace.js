import React from 'react';
import Input from '../../shared/components/FormElements/Input';

const Newplace = () => {
  return (
    <form className='list-none my-0 m-auto p-4 w-11/12 max-w-2xl shadow-md rounded-md bg-white'>
    
    <Input element="input" type="text" label="Title" />
    </form>
  );
};

export default Newplace;