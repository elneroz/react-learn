import { useEffect, useState } from "react";
import { Note } from "./components/Note";
import { getAllNotes } from "./services/notes/getAllNotes.js";
import { createNote } from "./services/notes/createNote.js";

export default function App() {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState("");

    useEffect(() =>{
        getAllNotes()
            .then((json) => {
                setNotes(json);
            });
    }, []);

    const handleChange = (event) => {
        setNewNote(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const noteToAddToState = {
            title: newNote,
            body: newNote,
            userId: 1
        };
        createNote(noteToAddToState).then((json) => {
            setNotes((prevNotes) => prevNotes.concat(json))
        })
        setNewNote(``); 
    };

    return (
        <div>
            <h1>Notes</h1>
            <ol>
                {notes.map((note) => (
                    <Note key={note.id} {...note} />
                ))}
            </ol>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={newNote} />
                <button>Crear nota</button>
            </form>
        </div>
    );
}
