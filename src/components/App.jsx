import React, { useState } from 'react';

import Header from './Header';
import CreateArea from './CreateArea';
import Note from './Note';
import Footer from './Footer';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(fullNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, fullNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className='App'>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
