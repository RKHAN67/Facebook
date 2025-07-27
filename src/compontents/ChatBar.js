import React from 'react';

const ChatBar = (props) => {
  const [state, setState] = React.useState([
    { id: 1, image: './img/r5.webp', name: 'Rizwan Khan' },
    { id: 2, image: './img/r2.webp', name: 'Asad Ullah' },
    { id: 3, image: './img/r3.webp', name: 'Fazal Ullah' },
    { id: 4, image: './img/r4.webp', name: 'Habib Ur Rehman' },
    { id: 5, image: './img/r6.webp', name: 'Haq Nawaz Khan' },
    { id: 6, image: './img/r7.webp', name: 'Sohail Nawaz' },
    { id: 7, image: './img/r8.webp', name: 'Kashif Khan' },
    { id: 8, image: './img/r9.webp', name: 'Kamran Khan' },
    { id: 9, image: './img/r10.webp', name: 'Zeeshan Khan' },
  ]);

  const openChat = (user) => {
    props.openChat(user);
  };

  return (
    <div className='chatbar'>
      {state.map((user) => (
        <div className='chatbar__list' key={user.id} onClick={() => openChat(user)}>
          <div className='chatbar__list-img'>
            <img src={user.image} alt={user.name} loading='lazy' />
            <span className='status'></span>
          </div>

          <div className='chatbar__list-name'>{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatBar