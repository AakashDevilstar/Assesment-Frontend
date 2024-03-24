import React from 'react';
import { cartsLinks } from '../../data/cart-links';
import Design from './Design';

const Main = ({darkMode}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <p className='text-xl border border-blue-900 p-1 rounded cursor-pointer hover:bg-blue-900 hover:text-white' style={{ marginTop: "22rem", height: "2.4rem", marginLeft: "4rem", marginRight: "-6rem", textAlign: "center" }}>&lt;</p>
      {cartsLinks.map((data) => (
        <Design key={data.id} data={data} darkMode={darkMode}/>
      ))}
      <p className='text-xl border border-blue-900 p-1 rounded cursor-pointer hover:bg-blue-900 hover:text-white' style={{ marginTop: "22rem", height: "2.4rem", marginLeft: "4rem" }}>&gt;</p>
    </div>
  );
}

export default Main;
