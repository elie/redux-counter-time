import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  increment = () => {
    this.props.dispatch({
      type: "INCREMENT"
    });
  };
  decrement = () => {
    this.props.dispatch({
      type: "DECREMENT"
    });
  };
  render() {
    return (
      <div>
        <h1>See the count! {this.props.count}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(App);
