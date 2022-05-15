import NoteContext from "./noteContext";
import { useState } from "react";


const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "62811dbb2338fce88cc04914",
            "user": "62811d5b2338fce88cc04912",
            "title": "Hello this is Title",
            "description": "This is description",
            "tag": "public",
            "date": "2022-05-15T15:35:23.674Z",
            "__v": 0
        },
        {
            "_id": "62811dc22338fce88cc04916",
            "user": "62811d5b2338fce88cc04912",
            "title": "Hello this is Title",
            "description": "This is description",
            "tag": "public",
            "date": "2022-05-15T15:35:30.842Z",
            "__v": 0
        },
        {
            "_id": "62811dc22338fce88cc04916",
            "user": "62811d5b2338fce88cc04912",
            "title": "Hello this is Title",
            "description": "This is description",
            "tag": "public",
            "date": "2022-05-15T15:35:30.842Z",
            "__v": 0
        },
        {
            "_id": "62811dc22338fce88cc04916",
            "user": "62811d5b2338fce88cc04912",
            "title": "Hello this is Title",
            "description": "This is description",
            "tag": "public",
            "date": "2022-05-15T15:35:30.842Z",
            "__v": 0
        },
        {
            "_id": "62811dc22338fce88cc04916",
            "user": "62811d5b2338fce88cc04912",
            "title": "Hello this is Title",
            "description": "This is description",
            "tag": "public",
            "date": "2022-05-15T15:35:30.842Z",
            "__v": 0
        },
        {
            "_id": "62811dc22338fce88cc04916",
            "user": "62811d5b2338fce88cc04912",
            "title": "Hello this is Title",
            "description": "This is description",
            "tag": "public",
            "date": "2022-05-15T15:35:30.842Z",
            "__v": 0
        },
        {
            "_id": "62811dc22338fce88cc04916",
            "user": "62811d5b2338fce88cc04912",
            "title": "Hello this is Title",
            "description": "This is description",
            "tag": "public",
            "date": "2022-05-15T15:35:30.842Z",
            "__v": 0
        },
        {
            "_id": "62811dc22338fce88cc04916",
            "user": "62811d5b2338fce88cc04912",
            "title": "Hello this is Title",
            "description": "This is description",
            "tag": "public",
            "date": "2022-05-15T15:35:30.842Z",
            "__v": 0
        },
        {
            "_id": "62811dc22338fce88cc04916",
            "user": "62811d5b2338fce88cc04912",
            "title": "Hello this is Title",
            "description": "This is description",
            "tag": "public",
            "date": "2022-05-15T15:35:30.842Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial);


    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;