import React from 'react';

function Button({children, ...props}) {

  let className = '';

  if(props.primary) className += 'button--primary'
  else if(props.secondary) className += 'button--secondary'
  
  if(props.colorPrimary) className += ' button--color-primary'
  if(props.colorSecondary) className += ' button--color-secondary'

  if(props.min) className += ' button--min-w'

  if(props.icon) className += ' button--icon'

  return (
    <button className={`button ${className} ${props.className}`}>{children}</button>
  )
}

export default Button;
