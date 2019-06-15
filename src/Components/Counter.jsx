import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };
  render() {
    return (
      <div>
        <button
          onClick={() => this.decrease()}
          className="btn btn-secondary btn-sm"
        >
          Decrease
        </button>
        <span className={this.getBadgesClass()}>{this.formatValue()}</span>
        <button
          onClick={() => this.increase()}
          className="btn btn-secondary btn-sm"
        >
          Increase
        </button>
      </div>
    );
  }

  formatValue() {
    return this.state.value === 0 ? "Zero" : this.state.value;
  }

  getBadgesClass() {
    let classes = "badge m-3 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  increase = product => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  decrease = product => {
    if (this.state.value === 0) {
    } else {
      console.log(product);
      this.setState({ value: this.state.value - 1 });
    }
  };
}

export default Counter;
