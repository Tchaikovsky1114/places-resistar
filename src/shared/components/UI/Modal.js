import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';

const ModalOverlay = (props) => {
  const content = (
    <div
      className={`z-50 fixed top-20 left-1/4 w-4/5 bg-white shadow-md rounded-xl ${
        props.className
      } md:left-[calc(50%-21rem)] md:w-[42rem] 2xs:w-80 2xs:left-8 2xs:top-40 2xs:gap-0 2xs:m-0  duration-200
    ${props.show ? 'translate-y-0 opacity-100' : 'translate-y-[-9999px] opacity-0'}`}
    >
      <header
        className={`w-full px-2 py-4 bg-gradient-to-r from-sky-500 to-indigo-500 text-white ${props.headerClass} `}
      >
        <h2 className="m-2">{props.header}</h2>
      </header>
      
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      ></form>
      <div className={`py-4 px-2 ${props.contentClass}`}>{props.children}</div>
      <footer className={`py-4 px-2 ${props.footerClass}`}>
        {props.footer}
      </footer>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = (props) => {
  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <ModalOverlay {...props} />
    </>
  );
};

export default Modal;
