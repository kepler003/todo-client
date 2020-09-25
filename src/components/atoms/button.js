import React from 'react';

function Button(props) {

  let className = '';

  if(props.primary) className += 'button--primary'
  else if(props.secondary) className += 'button--secondary'
  
  if(props.colorPrimary) className += ' button--color-primary'
  if(props.colorSecondary) className += ' button--color-secondary'

  if(props.min) className += ' button--min-w'

  return (
    <button className={`button ${className}`}>{props.children}</button>
  )
}

export default Button;
