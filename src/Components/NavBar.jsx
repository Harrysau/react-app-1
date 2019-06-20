import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="nav navbar-default navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap flex-row justify-content-between">
            <div className="navbar-header">
              <span className="navbar-brand">React</span>
            </div>
            {this.props.counters.map(counter => (
              <div key={counter.id} className="navbar-header">
                <span className="navbar-brand">{counter.value}</span>
              </div>
            ))}
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
