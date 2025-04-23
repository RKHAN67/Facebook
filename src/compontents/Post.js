import React from 'react'
import Stroies from './Stroies'
import Create from './Create';
import ShowPost from './ShowPost'
import ChatBar from'./ChatBar'

const Post =()=> {
  return (
    <div className='posts'>
        <Stroies/>
        <ChatBar/>
        <Create/>
        <ShowPost />
         </div>

  )
}

export default Post