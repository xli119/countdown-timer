import React, { Component } from 'react';
import Display from './Display';
import Buttons from './Buttons';
import Timer from './Timer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStart: false,
      numbers: [0, 0, 0, 0, 0]
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.closeTimer = this.closeTimer.bind(this);
    this.clearNum = this.clearNum.bind(this);
  }

  handleClick(num) {
    this.setState((prevState) => ({
      numbers: [...prevState.numbers.slice(1), num]
    }));
  }

  handleStart() {
    this.setState({
      isStart: true
    });
  }

  closeTimer() {
    this.setState({ isStart: false });
  }

  clearNum() {
    this.setState({ numbers: [0, 0, 0, 0, 0]});
  }

  render() {
    return (
      this.state.isStart? <Timer time={this.state.numbers} closeTimer={this.closeTimer} isStart={this.state.isStart} 
      clearNum={this.clearNum}/>: 
      <div className="App">
        <Display numbers={this.state.numbers}/>
        <Buttons handleClick={this.handleClick}/>
        <button onClick={this.handleStart}>Start</button>
      </div> 
    );
  }
}

export default App;
