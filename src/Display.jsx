import React from 'react';

class Display extends React.Component {
  render() {
    return(
      <div style={{display: 'flex'}}>
        <div>{this.props.numbers[0]}H</div>
        <div>{this.props.numbers[1]}{this.props.numbers[2]}M</div>
        <div>{this.props.numbers[3]}{this.props.numbers[4]}S</div>
      </div>
    );
  }
}

export default Display;