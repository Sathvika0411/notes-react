import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import AddNote from './components/AddNote';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
    const [notes, setNotes] = useState([
        {
            id: nanoid(),
            text: "Sample note 1",
            date: "06/07/2024"
        },
        {
            id: nanoid(),
            text: "Sample note 2",
            date: "06/07/2024"
        },
        {
            id: nanoid(),
            text: "Sample note 3",
            date: "06/07/2024"
        },
        {
            id: nanoid(),
            text: "Sample note 4",
            date: "06/07/2024"
        }
    ]);

    const [searchText, setSearchText] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
        if (savedNotes) {
            setNotes(savedNotes);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
    }, [notes]);

    const addNote = (text) => {
        const date = new Date().toLocaleDateString();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date
        };
        const newNotes = [...notes, newNote];
        setNotes(newNotes);
    };

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    };

    const editNote = (id, newText) => {
        const date = new Date().toLocaleDateString();
        const updatedNotes = notes.map((note) =>
            note.id === id ? { ...note, text: newText, date: date } : note
        );
        setNotes(updatedNotes);
    };

    const handleToggleDarkMode = () => {
        setDarkMode(prevDarkMode => !prevDarkMode);
    };

    return (
        <div className={`${darkMode && 'dark-mode'}`}>
            <div className='container'>
                <Header handleToggleDarkMode={handleToggleDarkMode} />
                <Search handleSearchNote={setSearchText} />
                <NotesList
                    notes={notes.filter((note) =>
                        note.text.toLowerCase().includes(searchText)
                    )}
                    handleAddNote={addNote}
                    handleDeleteNote={deleteNote}
                    handleEditNote={editNote}
                />
            </div>
        </div>
    );
};

export default App;
