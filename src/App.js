import React from "react";
import "./App.css";
import ParentComponent from "./components/ParentComponent";
// import { Greet } from "./components/Greet.js";
// import Welcome from "./components/Welcome";
// import Message from "./components/Message";
// import Count from "./components/Count.js";
// import FunctionClick from "./components/FunctionClick.js";
// import ClassClick from "./components/ClassClick";
// import EventBind from "./components/EventBind";

function App() {
  return (
    <div className="App">
      {/* <Count /> */}
      {/* <Greet name="Bruce" heroName="Batman" />
      <Welcome name="Aung" heroName="Takao" /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      <ParentComponent />
    </div>
  );
}

export default App;
