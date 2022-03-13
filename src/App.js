
import './App.css';
import Navbar from './Coponents/Navbar';
import Text from './Coponents/Text';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('dark');
  return (
    <>
      <Navbar tittle="Text" mode={mode} />
      <div className="container" >
        <Text heading='Enter text to analyze' />
      </div>

    </>
  );
}

export default App;
