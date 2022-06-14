import './App.css';
import Container from './Component/Container';
import Button from './Component/Button';
import React, {useState} from 'react';
import Modal from './Component/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <Modal></Modal>
      <div className=' w-full flex justify-center pt-6'>
        <h1 className=' font-bold'>Note App</h1>
      </div>

      <Container>
        <div className=' mt-10'>
          <h2 className=' font-bold'>New Note</h2>
          <div className=' mt-5'>
            <div>Title</div>
            <textarea name="" id="" className=' w-full border-2 border-black rounded-md'></textarea>
          </div>
          <div>
            <div className=' mt-4'>Body</div>
            <textarea typeof='text' cols="30" rows="10" className=' w-full border-2 border-black rounded-md'></textarea>
          </div>
        </div>
        <div className=' mt-3'>
          <Button>Add New Note</Button>
        </div>
        
        <div className=' mt-11'>
          <h2 className=' font-bold'>Note OF You</h2>
        </div>
      </Container>
    </>
  );
}

export default App;
