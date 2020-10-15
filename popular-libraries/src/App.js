import React, {useState} from 'react';
import './App.css';
import {IconContext} from 'react-icons';
import { FaBeer } from 'react-icons/fa';
import { BsFillArchiveFill } from 'react-icons/bs';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

const CustomToast = ({closeToast}) =>{
  return(
    <div> Please Close Me! <button onClick={closeToast}>Close</button></div>
  )
}

toast.configure()
function App() {

  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const notify = () =>{
    toast('Basic notification', {position: toast.POSITION.BOTTOM_CENTER, autoClose: 8000})
    toast.success('Basic notification', {position: toast.POSITION.TOP_LEFT,  autoClose: false})
    toast.info('Basic notification', {position: toast.POSITION.TOP_RIGHT})
    toast.warn(<CustomToast/>, {position: toast.POSITION.BOTTOM_LEFT})
  }


  return (
    <div className="App">
      <IconContext.Provider value={{color: 'green', size: '5rem'}}>
          <FaBeer />
          <BsFillArchiveFill color="blue" size= '10rem'/>
     </IconContext.Provider>
     <button onClick={notify}>Notify!</button>
     <Button variant="primary">Click Me!</Button>

     <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
     
    </div>
  );
}

export default App;
