
import React, {useState, useContext}  from 'react';
import {useHistory}                   from 'react-router-dom';
import axios                          from 'axios';
import url                            from '../../config';

import AppContext from '../../contexts/AppContext';
import Button     from '../atoms/Button';
import InputBox   from '../molecules/InputBox';

function LogInDialog(props) {

  const {setContext}        = useContext(AppContext);
  const history             = useHistory()

  const [data, setData]     = useState({username: null, password: null})
  const [error, setError]   = useState('');

  const handleSubmit = async (e) => {

    try {
      
      e.preventDefault()
  
      if(!data.username || !data.password) return;
  
      const response = (await axios.post(url + '/user/login',
      {
        username: data.username,
        password: data.password
      })).data;
      
      setContext({
        user: {
          id       : response.user.id,
          username : response.user.username
        },
        notes: response.notes
      })

      history.push('/profile');
      
    } catch(err) {

      console.log(err);
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
    setError('');
  }

  const handlePasswordChange = (e) => {
    e.persist();
    setData(prev => {
      return {
        ...prev,
        password: e.target.value
      }
    })
    setError('');
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
        <InputBox label='Hasło' error={error} password onChange={handlePasswordChange}/>
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
