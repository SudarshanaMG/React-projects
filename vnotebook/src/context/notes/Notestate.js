
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const initialNotes = [
    {
      "_id": "651fde0sa19cd89448e1217913",
      "user": "651d63e3e544a582e828d991",
      "title": "react",
      "description": "react projects",
      "tag": "personal",
      "date": "2023-10-06T10:14:34.782Z",
      "__v": 0
    },
    {
      "_id": "651fde0a19cdx89448e1217923",
      "user": "651d63e3e544a582e828d991",
      "title": "react",
      "description": "react projects",
      "tag": "personal",
      "date": "2023-10-06T10:14:34.782Z",
      "__v": 0
    },
    {
      "_id": "651fde0a19cdsa89448e1217933",
      "user": "651d63e3e544a582e828d991",
      "title": "react",
      "description": "react projects",
      "tag": "personal",
      "date": "2023-10-06T10:14:34.782Z",
      "__v": 0
    },
    {
      "_id": "651fde0a19cdf89448e1217943",
      "user": "651d63e3e544a582e828d991",
      "title": "react",
      "description": "react projects",
      "tag": "personal",
      "date": "2023-10-06T10:14:34.782Z",
      "__v": 0
    },
    {
      "_id": "651fde0a19cdg89448e1217953",
      "user": "651d63e3e544a582e828d991",
      "title": "react",
      "description": "react projects",
      "tag": "personal",
      "date": "2023-10-06T10:14:34.782Z",
      "__v": 0
    },
    {
      "_id": "651fde0a19cdc89448e1217963",
      "user": "651d63e3e544a582e828d991",
      "title": "react",
      "description": "react projects",
      "tag": "personal",
      "date": "2023-10-06T10:14:34.782Z",
      "__v": 0
    },
    {
      "_id": "651fde0a19cdf89448e1217973",
      "user": "651d63e3e544a582e828d991",
      "title": "react",
      "description": "react projects",
      "tag": "personal",
      "date": "2023-10-06T10:14:34.782Z",
      "__v": 0
    },
    {
      "_id": "651fde0a19cd589448e1217983",
      "user": "651d63e3e544a582e828d991",
      "title": "react",
      "description": "react projects",
      "tag": "personal",
      "date": "2023-10-06T10:14:34.782Z",
      "__v": 0
    }
  ]
  const [notes, setNotes] = useState(initialNotes)

  const addNote=(title,description,tag)=>{
    const note = {
      "_id": "651afde0a19cd89448e121793",
      "user": "651d63e3e544a582e828d991",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-10-06T10:14:34.782Z",
      "__v": 0
    }
setNotes(notes.concat(note))
  }
  
  const deleteNote=(id)=>{
    const newNote = notes.filter((note)=>{return note._id!==id});
    setNotes(newNote)
  }

  // const updateNote=(id,title,description,tag)=>{
    
  // }
  return (
    <NoteContext.Provider value={{notes, addNote, deleteNote}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
