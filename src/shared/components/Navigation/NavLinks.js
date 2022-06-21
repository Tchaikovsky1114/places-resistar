import React, { useContext } from 'react';
import {NavLink} from 'react-router-dom'
import { UserContext } from '../../../store/UserContext';


const activeStyle = {
  background: "#f8df00",
  borderColor: "#292929",
  color:"#292929"
}



const NavLinks = () => {
  const {isLoggedIn,logout} = useContext(UserContext);
  return (
    <ul className="list-none m-0 p-0 w-full h-full flex flex-col justify-center items-center md:flex-row md:justify-end md:flex 2xs:hidden xs:hidden">
      
      <li className="m-4 md:my-0 md:mx-2">
      <NavLink
      className='border-2 border-transparent text-amber-300 p-2 md:text-white'
      style={({isActive}) => isActive ? activeStyle : undefined }
      to="/">ALL USERS</NavLink>
      </li>
      
      {isLoggedIn &&
      <li className="m-4 md:my-0 md:mx-2">
      <NavLink
      className='border-2 border-transparent text-amber-300 p-2 md:text-white'
      style={({isActive}) => isActive ? activeStyle : undefined }
      to="/:dynamic/places">MY PLACES</NavLink>
      </li>
      }
      
      {isLoggedIn &&
      <li className="m-4 md:my-0 md:mx-2">
      <NavLink
      className='border-2 border-transparent text-amber-300 p-2 md:text-white'
      style={({isActive}) => isActive ? activeStyle : undefined }
      to="/places/new">ADD PLACE</NavLink>
      </li>
      }

     {!isLoggedIn && 
     <li className="m-4 md:my-0 md:mx-2">
      <NavLink
      className='border-2 border-transparent text-amber-300 p-2 md:text-white'
      style={({isActive}) => isActive ? activeStyle : undefined }
      to="/auth">AUTHENTICATE</NavLink>
      </li>}
      <li className="m-4 md:my-0 md:mx-2">
        {isLoggedIn && <button className="cursor-pointer border-2 text-amber-300 bg-transparent p-2 focus:bg-amber-700 md:focus:text-gray-600 md:focus:bg-yellow-400 hover:text-white focus:text-white"
        onClick={logout}>Log-Out</button>}
      </li>
    </ul>
  );
};

export default NavLinks;