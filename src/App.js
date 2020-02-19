import React from "react";
import "./App.css";
import CardGrid from './components/CardGrid'

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <p>Enter the Date here (yyyy-mm-dd)</p>
      <input type='date' value='2020-02-19'></input>
      <CardGrid />
    </div>
  );
}

export default App;
