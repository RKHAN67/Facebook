import { useState } from "react"
 const Sidebar = () => {
  const[state , setState]= useState([
   {id:1, image:'./img/r1.PNG', name:`Adnan Khan`},
   {id:2, image:'./img/r2.PNG', name:`Asad Khan`},
   {id:3, image:'./img/r3.PNG', name:`Faizullah Khan`},
   {id:4, image:'./img/r4.PNG', name:`Habib Ur Rehman`},
   {id:5, image:'./img/r6.PNG', name:`Haq Nawaz Khan`},
   {id:6, image:'./img/r8.PNG', name:`Kashif Khan`},
   {id:6, image:'./img/r10.PNG', name:`Zeeshan Khan`},
   {id:6, image:'./img/r9.PNG', name:`Kamran Khan`},
  ]);

  return ( 
  <div className='sidebar'> 
  {state.map((info) => ( 
    <div className='sidebar__list'key={info.id}>
     <div className='show__header-img'>
        <img src={info.image}alt='user'/>
    </div>
    <div className='show__header-name'>{info.name}
    </div>
    </div> 
  ))}      
    </div>
  );
};
export default Sidebar