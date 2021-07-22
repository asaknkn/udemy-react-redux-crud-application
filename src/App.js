import React from 'react';
import './App.css';

function App() {
  return (
    <React.Fragment>
    <label htmlFor="bar">
      bar
    </label>
    <input tyep="text" onChange={() => {console.log("I am")}}/>
    </React.Fragment>
  );
}

export default App;
