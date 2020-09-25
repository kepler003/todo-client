import React, {useContext} from 'react'
import AppContext from '../../contexts/AppContext'
import axios from 'axios'

import Button from '../atoms/Button'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

function Nav() {

  const {context, setContext} = useContext(AppContext)

  const handleLogOut = async () => {
    
    try {

      await axios.post('/user/logout')

    } catch (err) {

      console.log(err);

    } finally {
      
      setContext({
        user: {
          id: null,
          username: null
        },
        notes: null
      })
    }
  }

  return (
    <nav className='nav'>
      <p className='nav__welcome'>Hello <span className='nav__username'>{context.user.username}</span></p>
      <Button icon onClick={handleLogOut}>
        <Icon icon={faSignOutAlt} size="lg"/>
      </Button>
    </nav>
  );
}

export default Nav
