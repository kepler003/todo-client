import React from 'react';
import Button from '../atoms/button';

function WelcomeDialog() {
  return (
    <div className='container'>
      <div className='dialog__container'>
        <article className='dialog'>
          <h1 className='dialog__heading'> <span className='color--secondary'>To Do</span> App</h1>
          <Button primary min>Zaloguj się</Button>
          <span className='dialog__separator'>lub</span>
          <Button secondary min>Załóż konto</Button>
        </article>
      </div>
    </div>
  );
}

export default WelcomeDialog;
