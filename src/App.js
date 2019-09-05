import React from 'react';
import './App.css';
import Robot from './components/Robot';

function App() {
  return (
    <React.Fragment>
    <div className="App">
      <h1 className="App-Heading">ROBOTS</h1>
      <Robot/>
    </div>
    </React.Fragment>
  );
}

export default App;
