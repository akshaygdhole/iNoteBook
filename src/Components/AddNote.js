import React, { useContext, useState } from "react";
import noteContext from "../Context/notes/noteContext"
import Notes from "./Notes";


const AddNote = (props) => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" });





    const handleOnClick = (e) => {
        e.preventDefault()
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" })
        props.showAlert("Added note Successfully", "success")
    }
    const handleOnChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })

    }



    return <div>
        <div className="container my-3">
            <h2>Add a Note</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={note.title} aria-describedby="emailHelp" onChange={handleOnChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={handleOnChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="description" name="tag" value={note.tag} onChange={handleOnChange} />
                </div>

                <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={handleOnClick}>Add Note</button>
            </form>
        </div>
    </div>;
};

export default AddNote;

