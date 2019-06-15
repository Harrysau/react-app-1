import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 2 },
      { id: 3, value: 2 },
      { id: 4, value: 2 },
      { id: 5, value: 2 }
    ]
  };
  render() {
    const divStyle = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      backgroundColor: "green",
      padding: "20px"
    };
    return (
      <div style={divStyle}>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} value={counter.value}>
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
