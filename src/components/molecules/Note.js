import React from 'react';
import Button from '../atoms/Button';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';

function Note() {
  return (
    <div className='note'>
      <p className='note__text'>Lorem ipsum</p>
      <div className='note__btns'>
        <Button className='note__btn' icon>
          <Icon icon={faPen}/>
        </Button>
        <Button icon>
          <Icon icon={faTimes} size="lg"/>
        </Button>
      </div>
    </div>
  );
}

export default Note;
