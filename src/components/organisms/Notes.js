import React, {useContext} from 'react';
import AppContext from '../../contexts/AppContext';

import Note from '../molecules/Note';

function Notes() {

  const {context} = useContext(AppContext);

  const notes = context.notes !== null ? (
    context.notes.map(note => {
      return (
        <Note key={note.id} {...note}/>
      )
    })
  ).reverse() : (
    <p>Brak notatek</p>
  );

  return (
    <section className='notes'>{notes}</section>
  );
}

export default Notes;
