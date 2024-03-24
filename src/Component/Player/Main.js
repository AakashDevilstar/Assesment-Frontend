import React from 'react';
import Design1 from './Design1';
import Design2 from './Design2';
import { playersLinks } from '../../data/player-links';

const Main = ({darkMode}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
       {playersLinks.map((data) => (
            <div key={data.id}>
                {data.id <= 4 ? (
                    <Design1 data={data} darkMode={darkMode}/>
                ) : (
                    <Design2 data={data} darkMode={darkMode}/>
                )}
            </div>
        ))}
    </div>
  );
}

export default Main;
