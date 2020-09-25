import React from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function CreateNote() {
  return (
    <div className='note note--create'>
      <Input pure placeholder='Napisz notatkę...' />
      <div className='note__btns'>
        <Button icon>
          <Icon icon={faPlus}/>
        </Button>
      </div>
    </div>
  );
}

export default CreateNote;
