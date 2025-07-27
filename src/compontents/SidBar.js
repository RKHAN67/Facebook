import { useState } from "react";

const Sidebar = () => {
  const [state, setState] = useState([
    { id: 1, image: './img/r1.webp', name: `Adnan Khan` },
    { id: 2, image: './img/r2.webp', name: `Asad Khan` },
    { id: 3, image: './img/r3.webp', name: `Faizullah Khan` },
    { id: 4, image: './img/r4.webp', name: `Habib Ur Rehman` },
    { id: 5, image: './img/r6.webp', name: `Haq Nawaz Khan` },
    { id: 6, image: './img/r8.webp', name: `Kashif Khan` },
    { id: 6, image: './img/r10.webp', name: `Zeeshan Khan` },
    { id: 6, image: './img/r9.webp', name: `Kamran Khan` },
  ]);

  return (
    <div className='sidebar'>
      {state.map((info) => (
        <div className='sidebar__list' key={info.id}>
          <div className='show__header-img'>
            <img src={info.image} alt={info.name} loading="lazy" />
          </div>
          <div className='show__header-name'>
            {info.name}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Sidebar