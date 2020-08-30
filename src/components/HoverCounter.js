import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {
  render() {
    const count = this.props.count;
    const incrementCount = this.props.incrementCount;
    return (
      <div>
        <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
      </div>
    );
  }
}

export default withCounter(HoverCounter, 10);
