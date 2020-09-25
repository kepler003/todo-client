import React, {useContext} from 'react';
import AppContext from '../../contexts/AppContext';

import Button from '../atoms/Button';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';

function Note({id, body}) {

  const {setContext} = useContext(AppContext);

  const handleDelete = () => {
    setContext(prev => {
      return {
        ...prev,
        notes: prev.notes.filter(note => note.id != id)
      }
    })
  }

  return (
    <div className='note'>
      <p className='note__text'>{body}</p>
      <div className='note__btns'>
        <Button className='note__btn' icon>
          <Icon icon={faPen}/>
        </Button>
        <Button icon onClick={handleDelete}>
          <Icon icon={faTimes} size="lg"/>
        </Button>
      </div>
    </div>
  );
}

export default Note;
