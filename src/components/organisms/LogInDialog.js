
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import Button from '../atoms/Button';
import InputBox from '../molecules/InputBox';

function LogInDialog(props) {

  const history = useHistory()
  const [data, setData] = useState({username: null, password: null})

  const handleSubmit = (e) => {
    e.preventDefault()

    if(data.username && data.password){
      console.log(data);
    }
  }

  const handleUsernameChange = (e) => {
    e.persist();
    setData(prev => {
      return {
        ...prev,
        username: e.target.value
      }
    })
  }

  const handlePasswordChange = (e) => {
    e.persist();
    setData(prev => {
      return {
        ...prev,
        password: e.target.value
      }
    })
  }

  const handleGoToSignUp = (e) => {
    e.preventDefault();
    history.push('/signup');
  }

  return (
    <div className='dialog__container'>
      <form className='dialog' onSubmit={handleSubmit}>
        <h1 className='dialog__heading'>Zaloguj się</h1>
        <InputBox label='Nazwa użytkownika' onChange={handleUsernameChange}/>
        <InputBox label='Hasło' password onChange={handlePasswordChange}/>
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
