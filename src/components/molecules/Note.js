import React, {useContext, useState, Fragment} from 'react';
import AppContext from '../../contexts/AppContext';
import axios from 'axios';

import Button from '../atoms/Button';
import Input from '../atoms/Input';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faPen, faTimes, faSave } from '@fortawesome/free-solid-svg-icons';

function Note({id, body}) {

  const {setContext} = useContext(AppContext);
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(body);


  const handleEdit = () => {
    setEdit(true);
  }

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSave = async () => {

    try {

      const response = (await axios.put('/notes/' + id, {
        body: text
      })).data;

      setContext(prev => ({
        ...prev,
        notes: prev.notes.map(note => note.id === id ? ({
          id: response.id,
          body: response.body
        }) : note)
      }))

    } catch(err) {

      console.log(err.response.data.message || err);

    } finally {

      setEdit(false);
    } 
  }

  const handleDelete = async () => {
    
    try {

      await axios.delete('/notes/' + id);

      setContext(prev => ({
        ...prev,
        notes: prev.notes.length === 1 ? null : prev.notes.filter(note => note.id !== id)
      }))

    } catch(err) {

      console.log(err);
    }
  }

  const bodyContent = edit ? (
    <Input pure autoFocus value={text} onChange={handleChange}/>
  ) : (
    <p className='note__text'>{body}</p>
  );

  const btns = edit ? (
    <Button icon onClick={handleSave}>
      <Icon icon={faSave}/>
    </Button>
  ) : (
    <Fragment>
      <Button className='note__btn'icon onClick={handleEdit}>
        <Icon icon={faPen}/>
      </Button>
      <Button icon onClick={handleDelete}>
        <Icon icon={faTimes} size="lg"/>
      </Button>
    </Fragment>
  );

  return (
    <div className='note'>
      {bodyContent}
      <div className='note__btns'>{btns}</div>
    </div>
  );
}

export default Note;
