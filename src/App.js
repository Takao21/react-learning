import React from "react";
import "./App.css";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
// import RefDemo from "./components/RefDemo";
// import ParentComponent from "./components/ParentComponent";
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
      {/* <ParentComponent /> */}
      {/* <RefDemo /> */}
      <ClickCounter />
      <HoverCounter />
    </div>
  );
}

export default App;
