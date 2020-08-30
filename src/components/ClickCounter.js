import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
  render() {
    const count = this.props.count;
    const incrementCount = this.props.incrementCount;
    return (
      <div>
        <button onClick={incrementCount}>Clicked {count} Times</button>
      </div>
    );
  }
}

export default withCounter(ClickCounter, 5);
