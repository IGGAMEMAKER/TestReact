import React, { Component } from 'react';

export default class Timer extends Component {
  state = {
    seconds: 0,
    fiveSeconds: 0
  };
  
  componentDidMount() {
    setInterval(() => this.setState({
      seconds: ++this.state.seconds
    }), 1000);
    
    setInterval(() => this.setState({
      fiveSeconds: ++this.state.fiveSeconds
    }), 5000);
  }
  
  render() {
    return (
      <div>
        <div>{this.state.seconds}</div>
        <div>{this.state.fiveSeconds}</div>
      </div>
    );
  }
}