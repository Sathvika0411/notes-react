import React, { useState } from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote, handleEditNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [noteText, setNoteText] = useState(text);

  const characterLimit = 500; // Updated character limit

  const handleSaveEdit = () => {
    handleEditNote(id, noteText);
    setIsEditing(false);
  };

  return (
    <div className='note'>
      {isEditing ? (
        <textarea
          rows={Math.ceil(noteText.length / 60)} // Adjusted rows based on character count
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          className='edit-textarea' // Added class for styling
          maxLength={characterLimit} // Added max length attribute
        ></textarea>
      ) : (
        <span>{text}</span>
      )}
      <div className='note-footer'>
        <small>{date}</small>
        {isEditing ? (
          <button className='save' onClick={handleSaveEdit}>
            Save
          </button>
        ) : (
          <MdEdit onClick={() => setIsEditing(true)} className='edit-icon' size='1.3em' />
        )}
        <MdDeleteForever onClick={() => handleDeleteNote(id)} className='delete-icon' size='1.3em' />
      </div>
    </div>
  );
};

export default Note;
