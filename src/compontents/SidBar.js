import { useState } from "react"
 const Sidebar = () => {
  const[state , setState]= useState([
   {id:1, image:'./img/r1.PNG', name:`floutter develooptment`},
   {id:2, image:'./img/r2.PNG', name:`php develooptment`},
   {id:3, image:'./img/r3.PNG', name:`React develooptment`},
   {id:4, image:'./img/r4.PNG', name:`Node Js develooptment`},
   {id:5, image:'./img/r6.PNG', name:`Vue Js develooptment`},
   {id:6, image:'./img/r7.PNG', name:`React develooptment`},
  ]);

  return ( 
  <div className='sidebar'> 
  {state.map((info) => ( 
    <div className='sidebar__list'key={info.id}>
    <div className='sidebar__list-img'>
      <img src={info.image} alt='group image'/>
  </div>
  <div className='sedbar__list-name'>{info.name}</div>
    </div> 
  ))}      
    </div>
  );
};
export default Sidebar