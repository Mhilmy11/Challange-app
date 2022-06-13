import './App.css';
import Container from './Component/Container';
import Button from './Component/Button';

function App() {
  return (
    <>
      <div className=' w-full flex justify-center pt-6'>
        <div className=' font-bold'>Note App</div>
      </div>
      <Container>
        <div>
          <div className=' font-bold'>New Note</div>
          <div>
            <div>Title</div>
            <input type="text" />
          </div>
          <div>
            <div>Body</div>
            <input type="text" />
          </div>
        </div>
        <Button>Add New Note</Button>
      </Container>
    </>
  );
}

export default App;
