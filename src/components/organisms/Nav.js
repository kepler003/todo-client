import React, {useContext} from 'react';
import Button from '../atoms/Button';
import AppContext from '../../contexts/AppContext';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Nav() {

  const {context} = useContext(AppContext);

  return (
    <nav className='nav'>
      <p className='nav__welcome'>Hello <span className='nav__username'>{context.user.username}</span></p>
      <Button icon>
        <Icon icon={faSignOutAlt} size="lg"/>
      </Button>
    </nav>
  );
}

export default Nav;
