import React, { useState } from 'react';
import './CreateArea.css';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [fullNote, setFullNote] = useState({
    title: '',
    content: '',
  });

  function handleChange(e) {
    const { value, name } = e.target;

    setFullNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function submitNote(e) {
    props.onAdd(fullNote);
    setFullNote({
      title: '',
      content: '',
    });
    e.preventDefault();
  }

  function expanded() {
    setExpanded(true);
  }

  return (
    <div>
      <form className='create-note'>
        {isExpanded && (
          <input
            value={fullNote.title}
            onChange={handleChange}
            name='title'
            placeholder='Title'
          />
        )}

        <textarea
          value={fullNote.content}
          onClick={expanded}
          onChange={handleChange}
          name='content'
          placeholder='Take a note...'
          rows={isExpanded ? '3' : '1'}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
