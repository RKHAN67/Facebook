import React from 'react'
import { FaRegThumbsUp, FaRegCommentAlt, FaShareAlt } from 'react-icons/fa';

const ShowPosts = () => {
  const [state, setState] = React.useState([
    {
      id: .1,
      userImg: `./img/r3.webp`,
      name: "Fazal Ullah",
      time: "2h",
      text:
        `loremVideo provides a powerful way to help you prove your point. When you click Online,/
     keyword to search online for the video`, postImg: `./img/r3.webp`
    },

    {
      id: .2,
      userImg: `./img/r2.webp`,
      name: "Asad Khan",
      time: "2h",
      text: `loremVideo provides a powerful way to help you prove your point. When you click Online,/
     keyword to search online for the video`, postImg: `./img/r2.webp`
    },

    {
      id: .3,
      userImg: `./img/r1.webp`,
      name: "Adnan",
      time: "2h",

      text: `loremVideo provides a powerful way to help you prove your point. When you click Online,/
     keyword to search online for the video`, postImg: `./img/r1.webp`
    },

    {
      id: .4,
      userImg: `./img/r4.webp`,
      name: "Habib Ur Rehman",
      time: "2h",
      text: `loremVideo provides a powerful way to help you prove your point. When you click Online,/
     keyword to search online for the video`, postImg: `./img/r4.webp`
    },
    {
      id: .5,
      userImg: `./img/r5.webp`,
      name: "Rizwan Khan",
      time: "2h",
      text: `loremVideo provides a powerful way to help you prove your point. When you click Online,/
     keyword to search online for the video`, postImg: `./img/r5.webp`
    },
  ])
  return (
    <div className='look'>
      {state.map((post) => (
        <div key={post.id} className='emty'>
          <div className='show__header'>
            <div className='show__header-img'>
              <img src={post.userImg} loading='lazy' alt={post.name} />
            </div>
            <div className='show__header-name'>{post.name}<div className='date'>{post.time}</div>
            </div>

          </div>
          <div className='show__body'>
            <div className='show__body-text'>
              {post.text}

            </div>
            <div className='show__body-img'>
              <img src={post.postImg} alt={post.name} loading='lazy' />
            </div>
          </div>
          <div className='show__reaction'>
            <span className='reaction'>
              <FaRegThumbsUp />  <span className='reaction-text'>like</span>
            </span>
            <span className='reaction'>
              <FaRegCommentAlt />  <span className='reaction-text'>comments</span>
            </span>
            <span className='reaction'>
              <FaShareAlt />  <span className='reaction-text'>share</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  )
};

export default ShowPosts