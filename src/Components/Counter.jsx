import React, { Component } from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Counter extends Component {
  render() {
    const buttonStyle = {
      padding: "10px"
    };
    const divStyle = {
      position: "relative",
      left: "50%",
      top: "50%",
      transform: "translate(-50%,-50%)",
      padding: "0 0 20px 0"
    };
    return (
      <div>
        <div style={divStyle}>
          {this.props.children}
          <button
            style={buttonStyle}
            onClick={() => this.props.onDecrease(this.props.counter)}
            className="btn btn-danger btn-sm"
          >
            -
          </button>
          <span className={this.getBadgesClass()}>{this.formatValue()}</span>
          <button
            style={buttonStyle}
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-danger btn-sm"
          >
            +
          </button>
          <div>
            <button
              className="btn btn-warning btn-sm m-3"
              onClick={() => this.props.onDelete(this.props.counter.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }

  formatValue() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }

  getBadgesClass() {
    let classes = "badge m-3 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
