import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem';
import AddNote from './AddNote';

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  const [note, setNote] = useState({id:"", etitle: "", edescription: "", etag: "" })
  const refOpen = useRef(null);
  const refClose = useRef(null);
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, [])
  const handleSubmit = () => {
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
}
const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
}
  const updateNotes = (currentNote) => {
    //  console.log(refName.current);
    refOpen.current.click();
    setNote({id:currentNote._id, etitle:currentNote.title, edescription:currentNote.description, etag:currentNote.tag})
  }
  return (
    <>
      <AddNote />
      <button ref={refOpen} type="button" className="btn btn-primary d-none" data-toggle="modal" data-target="#exampleModal">
        update note
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Update Note</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <form className='my-3'>
                <div className="mb-3">
                    <label htmlFor="etitle" className="form-label">Title</label>
                    <input type="text" className="form-control" autoComplete="etitle" id="etitle" name="etitle" value={note.etitle || ''} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="edescription" className="form-label">Description</label>
                    <input type="text" className="form-control" autoComplete="edescription" id="edescription" name="edescription" value={note.edescription || ''} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="etag" className="form-label">Tag</label>
                    <input type="text" className="form-control" autoComplete="etag" id="etag" name="etag" value={note.etag || ''} onChange={onChange} />
                </div>
            </form>
            </div>
            <div className="modal-footer">
              <button type="button" ref={refClose} className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button disabled={note.etitle.length<3 || note.edescription.length<5} type="submit" className="btn btn-primary" onClick={handleSubmit}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2>Your note</h2>
        <div className="container">
          {notes.length===0 && 'No Notes to display'}
        </div>
        {notes.map((note) => {
          return <Noteitem key={note._id} updateNotes={updateNotes} note={note} />
        })}
      </div>
    </>
  )
}

export default Notes
