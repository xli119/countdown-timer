import React, { Component } from 'react';
import './timer.css';


class Timer extends Component {
  state = {
    time: this.props.time[0] * 60 * 60 + (this.props.time[1] * 10 + this.props.time[2]) * 60 +
    this.props.time[3] * 10 + this.props.time[4]
  };

  spinnerStyle = {
    zIndex: 200,
    borderRadius: "125px 0 0 125px",
    borderRight: "none",
    background: "white",
    animation: `rota ${this.state.time}s linear infinite`,
}

  fillerStyle = {
    bordeRadius: "0 125px 125px 0",
    zIndex: "100",
    borderLeft: "none",
    animation: `fill ${this.state.time}s steps(1, end) infinite`,
    left: "50%",
    opacity: "0",
    background: "white"
  };

  maskStyle = {
    width: "50%",
    height: "100%",
    position: "absolute",
    zIndex: "300",
    opacity: "1",
    background: "inherit",
    animation: `mask ${this.state.time}s steps(1, end) infinite`
  };

  timerStyle = {
    zIndex: "300",
    position: "absolute",
    left: "110px",
    top: "110px"
  };
  render() {
    return(
      <div>
        <div className="wrapper">
          <div className="filler pie" style={this.fillerStyle}></div>
          <div className="spinner pie" style={this.spinnerStyle}></div>
          
          <div className="mask" style={this.maskStyle}></div>
          <div style={this.timerStyle}>{this.state.time / 3600 | 0  }:{this.state.time /60 | 0  }:{this.state.time % 60 }</div>
        </div>
        
        
      </div>
    );
  }

  componentDidMount() {
    this.startTimer();
  }

  startTimer() {
    const myTimer = setInterval(() => {
      this.props.isStart && this.setState({ time: this.state.time-1 });
      if (this.state.time <= 0) {
        this.props.closeTimer();
        clearInterval(myTimer);
        this.props.clearNum();
      }
    }, 1000);
    
  }
}

export default Timer;