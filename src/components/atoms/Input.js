import React from 'react';

function Input({children, password, className, pure, ...props}) {

  let condClassName = '';
  if(pure) condClassName += ' input--pure';

  return (
    <input className={`input ${condClassName} ${className}`} type={password ? 'password' : 'text'} {...props}>{children}</input>
  )
}

export default Input;
