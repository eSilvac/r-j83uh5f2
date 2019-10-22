import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.counter = this.counter.bind(this);

    this.state = {
      counter: 0
    }
  }
  
  render() {
    return (
      <div className="container">
        <textarea onChange={this.counter} rows="3"></textarea>
        <div className="counter">{this.state.counter}</div>
      </div>
    );
  }

  
  counter(event) {
    this.setState({
      counter: event.target.value.length
    });
  }
}

export default App;
