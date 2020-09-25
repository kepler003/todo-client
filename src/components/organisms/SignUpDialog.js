
import React from 'react';
import {useHistory} from 'react-router-dom';

import Button from '../atoms/Button';
import InputBox from '../molecules/InputBox';

function SignUpDialog() {

  const history = useHistory();

  const handleGoToLogIn = (e) => {
    e.preventDefault();
    history.push('/');
  }

  return (
    <div className='dialog__container'>
      <form className='dialog'>
        <h1 className='dialog__heading'>Załóż konto</h1>

        <InputBox label='Podaj nazwę użytkownika'/>
        <InputBox label='Podaj hasło' password/>
        
        <div className='dialog__action-btns'>
          <Button secondary min>Załóż konto</Button>
          <span className='dialog__separator'>lub</span>
          <Button colorPrimary min onClick={handleGoToLogIn}>Zaloguj się</Button>
        </div>
      </form>
    </div>
  );
}

export default SignUpDialog;