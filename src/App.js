import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Counters from "./Components/Counters";

class App extends Component {
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
    return (
      <React.Fragment>
        <NavBar counters={this.state.counters} />
        <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          onDecrease={this.handleDecrease}
          onIncrement={this.handleIncrement}
        />
      </React.Fragment>
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

export default App;
