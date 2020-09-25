import React from 'react';

function Button({children, className, icon, min, colorPrimary, colorSecondary, primary, secondary, ...props}) {

  let condClassName = '';

  if(primary) className += 'button--primary'
  else if(secondary) className += 'button--secondary'
  
  if(colorPrimary) className += ' button--color-primary'
  if(colorSecondary) className += ' button--color-secondary'

  if(min) className += ' button--min-w'

  if(icon) className += ' button--icon'

  return (
    <button className={`button ${condClassName} ${className}`} {...props}>{children}</button>
  )
}

export default Button;
