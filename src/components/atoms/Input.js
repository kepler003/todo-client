import React from 'react';

function Input({children, password, ...props}) {

  return (
    <input className='input' type={password ? 'password' : 'text'} {...props}>{children}</input>
  )
}

export default Input;
