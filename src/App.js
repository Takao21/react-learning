import React from "react";
import "./App.css";
import { Greet } from "./components/Greet.js";
import Welcome from "./components/Welcome";
// import Message from "./components/Message";
// import Count from "./components/Count.js";

function App() {
  return (
    <div className="App">
      {/* <Count /> */}
      <Greet name="Bruce" heroName="Batman" />
      <Welcome name="Aung" heroName="Takao" />
    </div>
  );
}

export default App;
