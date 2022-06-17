import './App.css';
import Container from './Component/Container';
import React, { useState } from 'react';
import Modal from './Component/Modal';
import Card from './Component/Card';
import NewNote from './Component/NewNote';

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [notes, setIsNotes] = useState([])
  return (
    <>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
      <div className=' w-full flex justify-center pt-6'>
        <h1 className=' font-bold'>Note App</h1>
      </div>

      <Container>

        <NewNote></NewNote>

        <Card isOpen={setIsOpen}></Card>

      </Container>
    </>
  );
}

export default App;
