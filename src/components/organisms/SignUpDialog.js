
import React, {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import url from '../../config';

import AppContext from '../../contexts/AppContext';
import Button from '../atoms/Button';
import InputBox from '../molecules/InputBox';

function SignUpDialog() {

  const {setContext} = useContext(AppContext);
  const history = useHistory();
  const [data, setData] = useState({username: null, password: null})

  const handleSubmit = async (e) => {
    
    try {
      
      e.preventDefault();

      const response = (await axios.post(url + '/user', {
        username: data.username,
        password: data.password
      })).data;

      setContext({
        user: {
          id: response.id,
          username: response.username
        },
        notes: null
      })

    } catch (err) {

      console.log(err);
    }
  }

  const handleUsernameChange = (e) => {
    
    e.persist();
    
    setData(prev => ({
      ...prev,
      username: e.target.value
    }))
  }

  const handlePasswordChange = (e) => {
    
    e.persist();

    setData(prev => ({
      ...prev,
      password: e.target.value
    }))
  }

  const handleGoToLogIn = (e) => {
    e.preventDefault();
    history.push('/');
  }

  return (
    <div className='dialog__container'>
      <form className='dialog'>
        <h1 className='dialog__heading'>Załóż konto</h1>

        <InputBox label='Podaj nazwę użytkownika' onChange={handleUsernameChange}/>
        <InputBox label='Podaj hasło' password onChange={handlePasswordChange}/>
        
        <div className='dialog__action-btns'>
          <Button secondary min onClick={handleSubmit}>Załóż konto</Button>
          <span className='dialog__separator'>lub</span>
          <Button colorPrimary min onClick={handleGoToLogIn}>Zaloguj się</Button>
        </div>
      </form>
    </div>
  );
}

export default SignUpDialog;