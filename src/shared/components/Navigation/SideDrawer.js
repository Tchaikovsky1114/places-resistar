import React from 'react';
import ReactDOM from 'react-dom';

const SideDrawer = (props) => {
  const content = (
      <aside className={`fixed left-0 top-0 z-50 h-full w-7/12 bg-white shadow-md shadow-transparent md:hidden duration-300 ease-in-out
        ${props.show ? "translate-x-0" : "-translate-x-full"
      }`}
      onClick={props.onClick}
      >
        {props.children}
      </aside>
    
  );

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;
