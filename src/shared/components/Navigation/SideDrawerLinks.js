import React from 'react';
import {NavLink} from 'react-router-dom'
const SideDrawerLinks = ({onClick}) => {
  const activeStyle = {
    background: "#f8df00",
    borderColor: "#292929",
    color:"#292929"
  }
  return (
    <ul className="list-none m-0 p-0 w-full h-full flex flex-col justify-center items-center md:flex-row md:justify-end md:flex">
      <li className="absolute top-0 right-0 m-2 md:my-0 md:mx-2">
        <button
        className="px-4 cursor-pointer border-2 text-amber-300 bg-transparent p-2 focus:bg-yellow-400 md:focus:text-gray-600 md:focus:bg-yellow-400 hover:text-black focus:text-black md:hidden">X</button>
      </li>
      <li className="m-4 md:my-0 md:mx-2">
      <NavLink
      className='border-2 border-transparent text-amber-300 p-2 md:text-white'
      style={({isActive}) => isActive ? activeStyle : undefined }
      to="/">ALL USERS</NavLink>
      </li>
      <li className="m-4 md:my-0 md:mx-2">
      <NavLink
      className='border-2 border-transparent text-amber-300 p-2 md:text-white'
      style={({isActive}) => isActive ? activeStyle : undefined }
      to="/:dynamic/places">MY PLACES</NavLink>
      </li>
      <li className="m-4 md:my-0 md:mx-2">
      <NavLink
      className='border-2 border-transparent text-amber-300 p-2 md:text-white'
      style={({isActive}) => isActive ? activeStyle : undefined }
      to="/places/new">ADD PLACE</NavLink>
      </li>
      <li className="m-4 md:my-0 md:mx-2">
      <NavLink
      className='border-2 border-transparent text-amber-300 p-2 md:text-white'
      style={({isActive}) => isActive ? activeStyle : undefined }
      to="/auth">AUTHENTICATE</NavLink>
      </li>
      
    </ul>
  );
};

export default SideDrawerLinks;