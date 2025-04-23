import React from 'react'

const ChatBar =(props)=> {
  const[state , setState]= React.useState([
    {id: 1, image:'./img/r5.PNG', name:'Rizwan Khan'},
    {id: 2, image:'./img/r2.PNG', name:'Asad Ullah'},
    {id: 3, image:'./img/r3.PNG', name:'Fazal Ullah'},
    {id: 4, image:'./img/r4.PNG', name:'Habib Ur Rehman'},
    {id: 5, image:'./img/r6.PNG', name:'Haq Nawaz Khan'},
    {id: 6, image:'./img/r7.PNG', name:'Sohail Nawaz'},
    {id: 7, image:'./img/r8.PNG', name:'Kashif Khan'},
    {id: 8, image:'./img/r9.PNG', name:'Kamran Khan'},
    {id: 9, image:'./img/r10.PNG', name:'Zeeshan Khan'},
  
     ]) 
     const openChat=(user)=>{
      props.openChat(user);
     };
        return (
    <div className='chatbar'>
      {state.map((user) =>(
        <div className='chatbar__list' key={user.id} onClick={() => openChat (user)}>
<div className='chatbar__list-img'>
  <img src={user.image}/>
  <span className='status'></span>
</div>

<div className='chatbar__list-name'>{user.name}</div>
  </div>
      ))}

    </div>
  )
}

export default ChatBar