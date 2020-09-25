import React from 'react';

import Nav from '../organisms/Nav';
import AddNoteForm from '../organisms/AddNoteForm';
import Notes from '../organisms/Notes';

function UserProfile() {

  return (
    <div className='profile-container'>
      <Nav/>
      <div className='dialog__container'>
        <article className='dialog'>
          <h1 className='dialog__heading--sm'>Twoje rzeczy do zrobienia</h1>
          <AddNoteForm/>
          <Notes/>
        </article>
      </div>
    </div>
  );
}

export default UserProfile;
