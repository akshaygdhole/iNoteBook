import NoteContext from "./noteContext";
import { useState } from "react";


const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial);
    // Get All Note
    const getNotes = async () => {
        //   API call  
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                // 'Accept': 'application/json',
                "auth-token": localStorage.getItem('auth-token')
            },
        });
        const json = await response.json()
        setNotes(json)

    }
    // Add A Note
    const addNote = async (title, description, tag) => {

        //TODO: API call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('auth-token')
            },
            body: JSON.stringify({ title, description, tag })
        });
        const note = await response.json()
        setNotes(notes.concat(note))

    }

    // Delete A Note 
    const deleteNote = async (id) => {
        //TODO :API call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                // 'Accept': 'application/json',
                "auth-token": localStorage.getItem('auth-token')
            },
        });
        const json = await response.json()

        console.log("deleting the note with id" + id)
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes);
    }


    //Edit A Note 
    const editNote = async (id, title, description, tag) => {
        //TODO: API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('auth-token')
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json()
        // setNotes(newNotes)
        // let newNotes = notes.map(note => {
        //     if (note._id === id) {
        //         return { ...note, title, description, tag };
        //     }
        //     return note;
        // });
        // // logic to edit in client
        // setNotes(prev => newNotes);
        getNotes()

    }
    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;