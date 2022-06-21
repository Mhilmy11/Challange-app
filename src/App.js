import './App.css';
import Container from './Component/Container';
import React, { useState, useEffect } from 'react';
import Modal from './Component/Modal';
import Card from './Component/Card';
import Button from './Component/Button';

function App() {
  const getDataFromLS=()=>{
    const data = localStorage.getItem('notes')
    if(data){
      return JSON.parse(data)
    }
    else{
      return []
    }
  }

  const [notes, setNotes] = useState(getDataFromLS())

  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const handleAddNoteSubmit=(e)=>{
    e.preventDefault()
    let note={
      title,
      body
    }
    setNotes([...notes,note])
    setTitle('')
    setBody('')
  }

  useEffect(()=>{
    localStorage.setItem('notes', JSON.stringify(notes))
  },[notes])

  const deleteNote=(title)=>{
    const filteredNotes=notes.filter((element, index) => {
      return element.title !== title
    })
    setNotes(filteredNotes)
  }

  

  return (
    <>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
      <div className=' w-full flex justify-center pt-6'>
        <h1 className=' font-bold'>Note App</h1>
      </div>

      <Container>

        <form onSubmit={handleAddNoteSubmit}>
          <div className=' mt-10'>
            <div className=" flex justify-between">
                <h2 className=' font-bold'>New Note</h2>
                <Button Class={'p-2 bg-green-500'}>Add Note</Button>
            </div>
            <div className=' mt-5'>
                <div>Title</div>
                <textarea className=' w-full border-2 border-black rounded-md' required onChange={(e) => setTitle(e.target.value)} value={title}></textarea>
            </div>
            <div>
                <div className=' mt-4'>Body</div>
                <textarea typeof='text' cols="30" rows="10" className=' w-full border-2 border-black rounded-md' required onChange={(e) => setBody(e.target.value)} value={body}></textarea>
            </div>
          </div>
        </form>

        <div>

          {notes.length>0 && 
            <>
            <div className=' mt-7'>
              <h2 className=' font-bold'>Note OF You</h2>
            </div>
              <Card updateNote={updateNote} notes={notes} deleteNote={deleteNote} isOpen={setIsOpen}></Card>
            </>
          }

        </div>

      </Container>
    </>
  );
}

export default App;
