import React from 'react';
import './Header.css';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

function Header() {
  return (
    <div className='header'>
      <header>
        {' '}
        <h1>
          <NoteAddIcon /> Noted
        </h1>
      </header>
    </div>
  );
}

export default Header;
