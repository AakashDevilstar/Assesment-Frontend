import React, { useState } from 'react';
import Main from './Component/Player/Main';
import Main1 from './Component/Carts/Main';

const App = () => {
  // Define state to track the current theme
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle between dark and light mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}>
      <p className="p-10 font-bold text-3xl">
        <span className="border-b-2 border-blue-500 mt-4">Sports</span>
      </p>
      <Main darkMode={darkMode}/>
      <button
        className="border border-black-100 text-white p-3"
        style={{ marginLeft: "660px", marginTop: "52px", backgroundColor: 'blue', width: '120px' }}
        onClick={toggleTheme} // Call toggleTheme function on button click
      >
        Change Theme
      </button>
      <p className='text-5xl font-bold' style={{ marginLeft: "30rem", marginTop: "6rem" }}>Collection Spotlight</p>
      <p className='text-xl' style={{ marginLeft: "20rem", marginTop: "1rem", marginRight: "20rem", textAlign: "center" }}>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
      <Main1 darkMode={darkMode}/>
    </div>
  );
}

export default App;
