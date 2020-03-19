import React from "react";
import "./App.css";
import APOD from './components/APOD';


function App() {
  return (
    <div className="App">
      <h1>
        NASA - Picture of the Day 
      </h1>
      <APOD />
    </div>
  );
}

export default App;
