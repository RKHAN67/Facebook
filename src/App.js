import React from 'react';
import './App.css';
import Navbar from './compontents/Navbar';
import SidBar from './compontents/SidBar';
import Post from './compontents/Post';
import ChatBox from './compontents/ChatBox';
import ChatBar from './compontents/ChatBar';
function App() {
  const[state,setState]=React.useState(false);
  const[Current,setCurrent]=React.useState({});
  const openChat=(user) =>{
    setState(true);
    setCurrent(user);
  };
  const closeChat=()=>{
    setState(false);

  }
  return (<div className="App">
    <Navbar/>
    <div className='facebook'>  
    <SidBar/>
    <Post/>
    <ChatBar openChat={openChat}/>
    <ChatBox state= {state} Current={Current}closeChat={closeChat}/>
    </div>
  </div>
  )
}

export default App;