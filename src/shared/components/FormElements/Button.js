import React from 'react';
import { Link } from 'react-router-dom';

const Button = props => {
  if (props.href) {
    return (
      <a
        className={`2xs:p-2 2xs:m-2 button
        button--${props.size || 'default'}
        ${props.inverse && 'button--inverse'}
        ${props.danger && 'button--danger'}
        `}
        href={props.href}
       
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={`2xs:p-2 2xs:m-2 button button--${props.size || 'default'} ${props.inverse &&
          'button--inverse'} ${props.danger && 'button--danger'}` }
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`2xs:p-2 2xs:m-2 button button--${props.size || 'default'} ${props.inverse &&
        'button--inverse'} ${props.danger && 'button--danger'}` }
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
