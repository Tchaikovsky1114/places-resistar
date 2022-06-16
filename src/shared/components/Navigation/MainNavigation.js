import React, {useState} from 'react';
import MainHeader from './MainHeader';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import SideDrawerLinks from './SideDrawerLinks'
import Backdrop from '../UI/Backdrop';
const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawer = () => {
    setDrawerIsOpen(true)
  }
  const closeDrawer = () => {
    setDrawerIsOpen(false)
  }
  console.log(drawerIsOpen);
  return (
    <>
    {drawerIsOpen && <Backdrop closeDrawer={closeDrawer}></Backdrop>}
    <SideDrawer show={drawerIsOpen} closeDrawer={closeDrawer} >
        <SideDrawerLinks closeDrawer={closeDrawer}/>
    </SideDrawer>
    
    
    <MainHeader >
      <button
      className="w-12 h-8 bg-transparent border-none flex flex-col justify-around mr-8 cursor-pointer md:hidden"
      onClick={openDrawer}>
        <span className="block w-8 h-1 bg-white"></span>
        <span className="block w-8 h-1 bg-white"></span>
        <span className="block w-8 h-1 bg-white"></span>
      </button>
      <h1 className="text-white text-2xl text-left md:w-40">
        <Link className="text-white text-left" to="/">Your Places</Link>
      </h1>
      <NavLinks />
    </MainHeader>
    </>
  );
};

export default MainNavigation;
