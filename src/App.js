import React, { Component } from 'react';
import './App.css';
import { Board } from './Board';

class App extends Component {
  sanitizeInput(input, dimension) {
    let output;
    output = parseInt(input, 10);
    if (Number.isNaN(output)) {
      return {
        valid: false,
        msg: `${input} not valid entry. 
        Ooooh NO!, Please enter a valid integer for ${dimension}`
      };
    } else if (output < 0) {
      return {
        valid: false,
        msg: `${input} not valid entry. 
        Ooooh NO!, Please enter a positive integer for ${dimension}`
      };
    } else {
      return {
        valid: true,
        output
      };
    }

  }
  render() {
    let width = this.sanitizeInput(
      prompt("Please enter number of columns"),
      'width'
    );
    while (!width.valid) {
      width = this.sanitizeInput(prompt(width.msg), 'width');
    }

    let height = this.sanitizeInput(
      prompt("Please enter number of rows"),
      'height'
    );
    while (!height.valid) {
      height = this.sanitizeInput(prompt(height.msg), 'height');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board width={width.output} height={height.output} />
        </div>
      </div>
    );
  }
}

export default App;
