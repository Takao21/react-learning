import React from "react";
import "./App.css";
import { isCompositeComponent } from "react-dom/test-utils";
// import { Greet } from "./components/Greet.js";
// import Welcome from "./components/Welcome";
// import Message from "./components/Message";
// import Count from "./components/Count.js";
import FunctionClick from "./components/FunctionClick.js";
import ClassClick from "./components/ClassClick";

function App() {
  return (
    <div className="App">
      {/* <Count /> */}
      {/* <Greet name="Bruce" heroName="Batman" />
      <Welcome name="Aung" heroName="Takao" /> */}
      <FunctionClick />
      <ClassClick />
    </div>
  );
}

export default App;
