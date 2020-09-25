import React from 'react';
import Button from '../atoms/Button';
import InputBox from '../molecules/InputBox';

function SignUpDialog() {
  return (
    <div className='dialog__container'>
      <form className='dialog'>
        <h1 className='dialog__heading'>Załóż konto</h1>

        <InputBox label='Podaj nazwę użytkownika'/>
        <InputBox label='Podaj hasło' password/>
        
        <div className='dialog__action-btns'>
          <Button secondary min>Załóż konto</Button>
          <span className='dialog__separator'>lub</span>
          <Button colorPrimary min>Zaloguj się</Button>
        </div>
      </form>
    </div>
  );
}

export default SignUpDialog;
