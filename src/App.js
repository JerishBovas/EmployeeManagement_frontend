import './App.css';
import { useState, useEffect } from 'react'
import Home from './components/Home';
import View from './components/View';
import { NavBar } from './components/NavBar';
import {List} from './components/List';
import Update from './components/Update';
import Delete from './components/Delete';
import Add from './components/Add';
import {ToastContainer, Toast} from 'react-bootstrap'

function App() {
  const [state, setState] = useState('home');
  const [id, setId] = useState(0);
  const [message, setMessage] = useState('')
  const [show, setShow] = useState(true)

  useEffect(() => {
    if(message != ''){
      setShow(true)
    }else{
      setShow(false)
    }
    
  }, [])

  return (
    <div>
      <NavBar currState={state} stateChanger={setState} />
      <div class="m-5">
        {state === 'home' && (
          <Home stateChanger={setState} setMessage={setMessage}/>
        )}
        {state === 'list' && (
          <List stateChanger={setState} idChanger={setId} setMessage={setMessage}/>
        )}
        {state === 'view' && (
          <View stateChanger={setState} id={id} setMessage={setMessage}/>
        )}
        {state === 'add' && (
          <Add stateChanger={setState} idChanger={setId} setMessage={setMessage}/>
        )}
        {state === 'update' && (
          <Update stateChanger={setState} id={id} setMessage={setMessage}/>
        )}
        {state === 'delete' && (
          <Delete stateChanger={setState} id={id} setMessage={setMessage}/>
        )}
      </div>
      {
        show && (
          <ToastContainer className="p-3" position={'bottom-end'}>
          <Toast onClose={() => setShow(false)} show={show} animation={true}>
            <Toast.Header closeButton={true}>
              <strong className="me-auto">Status Message</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>{message}</Toast.Body>
          </Toast>
        </ToastContainer>
        )
      }
    </div>
  );
}

export default App;
