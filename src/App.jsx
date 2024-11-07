import { useEffect, useState } from "react";
import { Post } from "./components/Post/Post.jsx";
import { getAllPosts } from "./services/Posts/getAllPosts.js";
import { createPost } from "./services/Posts/createPost.js";

export default function App() {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState("");

    useEffect(() =>{
        getAllPosts()
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
        createPost(noteToAddToState).then((json) => {
            setNotes((prevNotes) => prevNotes.concat(json))
        })
        setNewNote(``); 
    };

    return (
        <div>
            <h1>Notes</h1>
            <ol>
                {notes.map((note) => (
                    <Post key={note.id} {...note} />
                ))}
            </ol>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={newNote} />
                <button>Crear nota</button>
            </form>
        </div>
    );
}
