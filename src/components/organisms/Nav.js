import React from 'react';
import Button from '../atoms/Button';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  return (
    <nav className='nav'>
      <p className='nav__welcome'>Hello <span className='nav__username'>Kepler003</span></p>
      <Button icon>
        <Icon icon={faSignOutAlt} size="lg"/>
      </Button>
    </nav>
  );
}

export default Nav;
