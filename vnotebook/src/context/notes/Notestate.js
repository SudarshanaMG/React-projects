
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:4000";
  const initialNotes = []
  const [notes, setNotes] = useState(initialNotes)
 
  // Get all notes
  const getNotes = async () => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`,
      {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxZDYzZTNlNTQ0YTU4MmU4MjhkOTkxIn0sImlhdCI6MTY5NjQyNTQyMn0.BhNnCl3jyKETX4yKiv2jBKY_Q-hXfyR-xcTwhSpuNsw"
        }
      })
    const json = await response.json();
    setNotes(json)
  }

  // Add an note
  const addNote = async (title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`,
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxZDYzZTNlNTQ0YTU4MmU4MjhkOTkxIn0sImlhdCI6MTY5NjQyNTQyMn0.BhNnCl3jyKETX4yKiv2jBKY_Q-hXfyR-xcTwhSpuNsw"
        },
        body: JSON.stringify({ title, description, tag })
      });
    const note = await response.json();
    setNotes(notes.concat(note))
  }

  // Delete a note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`,
      {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxZDYzZTNlNTQ0YTU4MmU4MjhkOTkxIn0sImlhdCI6MTY5NjQyNTQyMn0.BhNnCl3jyKETX4yKiv2jBKY_Q-hXfyR-xcTwhSpuNsw"
        }
      });
    const json = await response.json();

    const newNote = notes.filter((note) => { return note._id !== id });
    setNotes(newNote)
  }

  // Edit a note 
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`,
      {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxZDYzZTNlNTQ0YTU4MmU4MjhkOTkxIn0sImlhdCI6MTY5NjQyNTQyMn0.BhNnCl3jyKETX4yKiv2jBKY_Q-hXfyR-xcTwhSpuNsw"
        },
        body: JSON.stringify({ title, description, tag })
      });
    const json = await response.json();

    // Logic to edit in client
    let newNote = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < notes.length; index++) {
      const element = newNote[index];
      if (element._id === id) {
        newNote[index].title = title;
        newNote[index].description = description;
        newNote[index].tag = tag;
        break;
      }
    }
    setNotes(newNote);
  }
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
