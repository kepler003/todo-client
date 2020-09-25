import React from 'react';

function Label({children, ...props}) {

  return (
    <label className='input__label' {...props}>{children}</label>
  )
}

export default Label;
