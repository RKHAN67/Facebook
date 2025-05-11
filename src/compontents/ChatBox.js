import React from 'react'
import { FaPhone, FaVideo ,FaRegWindowClose} from 'react-icons/fa'

const ChatBox =(props) => {
    const closeChat=()=>{
        props.closeChat();

    }
  return (
    <>
    {props.state ? (  <div className='chat'>
<div className='chat__header'>
<div className='chat__first'>
<div className='chat__header-img'>
   <img src={props.Current.image ? props.Current.image: ""}alt='user'/>
    </div> 
    <div className='chat__header-name'>{props.Current.name ? props.Current.name: ""}</div>
</div>
<div className='chat__second'>
    <FaVideo className='chat__header-icons'/>
    <FaPhone className='chat__header-icons'/>
    <FaRegWindowClose className='chat__header-icons' onClick={closeChat}/>
</div>
    </div>
    <div className='chat__body'>
    <div className='chat__left'>
        <p className='msg'>Hi bro</p>
    </div>
    <div className='chat__right'>
        <p className='msg'>Hi How are you </p>
    </div>
    <div className='chat__left'>
        <p className='msg'>I'm fine?</p>
        <p className='msg'>what about you</p>
    </div>
    <div className='chat__right'>
        <p className='msg'>I'm good ! can I help ypu</p>
    </div>
    <div className='chat__left'>
        <p className='msg'>No Thank yoy</p>
    </div>
    <div className='chat__right'>
        <p className='msg'>thank</p>
    </div>
    </div>
    
    <div className='chat__footer'>
        <input type='text'className='chat__input' placeholder='Aa'></input>
    </div>
    </div>):''} 
  
</>
  )
}

export default ChatBox