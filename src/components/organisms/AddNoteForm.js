import React, {useState, useContext}  from 'react'
import AppContext                     from '../../contexts/AppContext'
import axios                          from 'axios';

import Input                        from '../atoms/Input'
import Button                       from '../atoms/Button'
import { FontAwesomeIcon as Icon }  from '@fortawesome/react-fontawesome'
import { faPlus }                   from '@fortawesome/free-solid-svg-icons'

function AddNoteForm() {

  const {setContext}    = useContext(AppContext)
  const [text, setText] = useState('')

  const handleSubmit = async (e) => {
    
    try {

      e.preventDefault()

      if(!text.length) return;
  
      const response = (await axios.post('/notes', {
        body: text
      })).data

      setContext(prev => {
        return {
          ...prev,
          notes: prev.notes === null ? [{
            id: response.id,
            body: response.body
          }] : [
            ...prev.notes,
            {
              id: response.id,
              body: response.body
            }
          ]
        }
      })

    } catch (err) {

      console.log(err);

    } finally {

      setText('')
    }
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
