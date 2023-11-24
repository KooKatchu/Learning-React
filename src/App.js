// App.js
import logo from './logo.svg';
import './App.css';
import './style.css';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Presentation from './Presentation';
import React, { useState } from 'react';
import Default from './DefaultProfile';
import Bard from './Bard';
import Sorcerer from './Sorcerer';
import Wizard from './Wizard';



function App() {
  const [selectedClass, setSelectedClass] = useState('Default');

  const handleClassSelection = (className) => {
    setSelectedClass(className);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Your existing code
        <img src={logo} className="App-logo" alt="logo" /> */}

        {/* Add buttons for class selection */}
        <div>
          <button onClick={() => handleClassSelection('Bard')}>Bard</button>
          <button onClick={() => handleClassSelection('Sorcerer')}>Sorcerer</button>
          <button onClick={() => handleClassSelection('Wizard')}>Wizard</button>
        </div>

        <section id="profile">
          {selectedClass === 'Default' && <Default />}
          {selectedClass === 'Bard' && <Bard />}
          {selectedClass === 'Sorcerer' && <Sorcerer />}
          {selectedClass === 'Wizard' && <Wizard />}
        </section>
      </header>
    </div>
  );
}

export default App;