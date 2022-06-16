import React from 'react';
import ReactDOM from 'react-dom';
const Backdrop = ({children,closeDrawer,show}) => {
  const content = <div
  className={`fixed top-0 left-0 w-full h-full bg-transparent z-10
  `}
  onClick={closeDrawer}>
    {children}
    </div>

  
  return ReactDOM.createPortal(content,document.getElementById('drawer-background'))
};

export default Backdrop;