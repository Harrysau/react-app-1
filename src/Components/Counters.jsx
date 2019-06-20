import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    const { onIncrement, onDecrease, onDelete, onReset } = this.props;
    return (
      <React.Fragment>
        <div>
          <button onClick={onReset} className="btn btn-primary m-3">
            Reset
          </button>
        </div>
        <div className="d-flex flex-wrap flex-row justify-content-between">
          <div className="d-flex flex-wrap flex-row justify-content-between">
            {this.props.counters.map(counter => (
              <Counter
                key={counter.id}
                counter={counter}
                onDelete={onDelete}
                onIncrement={onIncrement}
                onDecrease={onDecrease}
              >
                <h4>Counter #{counter.id}</h4>
              </Counter>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Counters;
