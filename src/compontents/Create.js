import React from 'react'
import{FaRegFileImage, FaVideo,FaRegGrinAlt} from "react-icons/fa";
function Create() {
  return (
    <div className='create'>
        <div className='create__first'>
        <div className='create__first-img'>
            <span>
            <img src='./img/r5.PNG 'alt='user'/>
            </span>
            </div>
            <div className='create__first-input'>
                <input type='text' className='create__first-inputs'
                placeholder='Rizwan Khan what your mind?'/>
            </div>
        </div>
        <div className='create__second'>
        <span className='creat__second-icon'>
          <FaVideo className='redColor '/> <span className='texr'>Live Video</span>
        </span>
        <span className='creat__second-icon'>
          <FaRegFileImage className='greenColor'/> <span className='texr'>Photo / Video</span>
        </span>
        <span className='creat__second-icon'>
          <FaRegGrinAlt className='orangeColor'/> <span className='texr'>Feeling</span>
        </span>
        </div>
         </div>
  )
} 

export default Create 