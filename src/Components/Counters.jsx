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
      backgroundColor: "#B3A6F2",
      padding: "20px"
    };
    return (
      <div style={divStyle}>
        <button onClick={this.handleReset} className="btn btn-primary m-3">
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrease={this.handleDecrease}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleIncrement = counter => {
    const index = this.state.counters.indexOf(counter);
    const counters = [...this.state.counters];
    counters[index] = counter;
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrease = counter => {
    const index = this.state.counters.indexOf(counter);
    const counters = [...this.state.counters];
    counters[index] = counter;
    if (counters[index].value !== 0) counters[index].value--;
    this.setState({ counters });
  };
}

export default Counters;
