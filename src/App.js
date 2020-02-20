import React from "react";
import "./App.css";
import APOD from './components/APOD';
import styled from 'styled-components';

const AppContainer = styled.div `
  background-image: url('https://www.nasa.gov/sites/default/files/thumbnails/image/darkrift-orig_full.jpg');
  color: white;
`

function App() {
  return (
    <AppContainer className="App">
      <h1>
        NASA - Picture of the Day 
      </h1>
      <APOD />
    </AppContainer>
  );
}

export default App;
