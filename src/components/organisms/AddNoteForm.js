import React, {useState, useContext} from 'react'
import AppContext from '../../contexts/AppContext'

import Input from '../atoms/Input'
import Button from '../atoms/Button'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function AddNoteForm() {

  const {setContext} = useContext(AppContext)
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if(text.length){
      setContext(prevContext => {
        return {
          ...prevContext,
          notes: [...prevContext.notes, {
            id: prevContext.notes.length + 1,
            body: text
          }]
        }
      })
    }

    setText('')
  }

  const handleChange = (e) => {
    setText(e.target.value);
  }

  return (
    <form className='create__form' onSubmit={handleSubmit}>
      <div className='note note--create'>
        <Input pure placeholder='Napisz notatkę...' value={text} onChange={handleChange}/>
        <div className='note__btns'>
          <Button icon>
            <Icon icon={faPlus}/>
          </Button>
        </div>
      </div>
    </form>
  );
}

export default AddNoteForm;
