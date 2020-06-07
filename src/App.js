import React from 'react';

import './App.css';
import Welcome from './Welcome'

function App() {
  return (
    <div className="App">
      <Welcome user="Bunny" />
      <Welcome user="Waif" />
    </div>
  );
}

export default App;
