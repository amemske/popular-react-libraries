import React from 'react';
import './App.css';
import {IconContext} from 'react-icons';
import { FaBeer } from 'react-icons/fa';
import { BsFillArchiveFill } from 'react-icons/bs';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomToast = ({closeToast}) =>{
  return(
    <div> Please Close Me! <button onClick={closeToast}>Close</button></div>
  )
}

toast.configure()
function App() {

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
    </div>
  );
}

export default App;
