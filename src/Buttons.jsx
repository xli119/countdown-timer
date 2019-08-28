import React, { Component } from 'react';

class Buttons extends Component {
  render() {
    return(
      <div>
        <div>
        <button onClick={() => this.props.handleClick(1)}>1</button>
        <button onClick={() => this.props.handleClick(2)}>2</button>
        <button onClick={() => this.props.handleClick(3)}>3</button>
        </div>
        <div>
        <button onClick={() => this.props.handleClick(4)}>4</button>
        <button onClick={() => this.props.handleClick(5)}>5</button>
        <button onClick={() => this.props.handleClick(6)}>6</button>
        </div>
        <div>
        <button onClick={() => this.props.handleClick(7)}>7</button>
        <button onClick={() => this.props.handleClick(8)}>8</button>
        <button onClick={() => this.props.handleClick(9)}>9</button>
        </div>
        <button onClick={() => this.props.handleClick(0)}>0</button>
      </div>
    );
  }
}

export default Buttons;