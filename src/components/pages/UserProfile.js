import React from 'react';
import Nav from '../organisms/Nav';
import Note from '../molecules/Note';
import CreateNote from '../molecules/CreateNote';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faPen, faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';

function UserProfile() {
  return (
    <div className='profile-container'>
      <Nav/>
      <div className='dialog__container'>
        
        <article className='dialog'>
          
          <h1 className='dialog__heading--sm'>Twoje rzeczy do zrobienia</h1>
          
          <form className='create__form'>
            <CreateNote/>
          </form>
          
          <section className='notes'>
            <Note/>
            <Note/>
            <Note/>
            <Note/>
          </section>
        </article>
      </div>
    </div>
  );
}

export default UserProfile;
