import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name="Takao">
        <p>This is a child.</p>   
      </Greet>
      <Greet name="Aung" />
      <Greet name="Shifu" />
      { /* <Welcome /> */ }
    </div>
  );
}

export default App;
