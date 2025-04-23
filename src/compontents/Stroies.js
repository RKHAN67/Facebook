import React from 'react'

const Stories =() => {
  const[state , setState]= React.useState([
    {id :1, image:'./img/r5.PNG ' , name:`floutter develooptment`},
    {id :2, image:'./img/r1.PNG ' , name:`php develooptment`},
    {id: 3, image:'./img/r3.PNG ' , name:`React develooptment`},
    {id: 4, image:'./img/r4.PNG ' , name:`Node Js develooptment`},
    
   ]);
  return (
    <div className='stories'>
    {state.map(story =>(
          <div className='stories__col' key={story.id}>
          <div className='stories__body'>
            <img src = {story.image} alt='stories'/>
            <div className='stories__body-overlay'>
            <div className='stories__body-overlay-img'>
              <img src={story.image}      />
              <div/>
              <div className='stories__body-name'>{story.name}</div>
          </div>
          </div>
      </div>
      </div>
    ))}
    </div>
  );
};

export default Stories