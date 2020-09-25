
import React from 'react';
import {useHistory} from 'react-router-dom';

import Button from '../atoms/Button';
import InputBox from '../molecules/InputBox';

function LogInDialog(props) {

  const history = useHistory();

  const handleGoToSignUp = (e) => {
    e.preventDefault();
    history.push('/signup');
  }

  return (
    <div className='dialog__container'>
      <form className='dialog'>
        <h1 className='dialog__heading'>Zaloguj się</h1>
        <InputBox label='Nazwa użytkownika'/>
        <InputBox label='Hasło' password/>
        <div className='dialog__action-btns'>
          <Button primary min>Zaloguj się</Button>
          <span className='dialog__separator'>lub</span>
          <Button colorSecondary min onClick={handleGoToSignUp}>Załóż konto</Button>
        </div>
      </form>
    </div>
  );
}

export default LogInDialog;
