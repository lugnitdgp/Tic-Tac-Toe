import React, { Component } from 'react';

import './App.css';

function declareWinner(squares){
  const win_lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [1,4,8],
    [2,4,6]
  ];
  for(let i=0;i<win_lines.length;i++){
    const [a,b,c] = win_lines[i];
    if(squares[a]&&squares[a]===squares[b]&&squares[a]===squares[c]){
      return squares[a];
    }
  }
  return null;
}

class Square extends Component{
  constructor(props){
    super(props);
    this.state = {
      val : ''
    };
  }

  render(){
    return(
      <button className='square' onClick={() => this.props.onClick()}> {this.props.value} </button>
    );
  }
}

class Grid extends Component{
  constructor(){
    super();
    this.state = {
      squares : Array(9).fill(),
      isNext : 'X'
    };

  }

  handleClick(i){
    const squares = this.state.squares.slice();
    if(declareWinner(squares)||squares[i]){
      return;
    }
    squares[i] = this.state.isNext ? 'X':'O';
    this.setState({
      squares:squares,
      isNext : !this.state.isNext
    });
  }

  rendersquare(i){
    return(
      <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />
      );
  }
  
  render(){
    const winner = declareWinner(this.state.squares);
    let status;
    if(winner){
      status = 'Winner : ' + winner;
    }
    else{
      status ='Next Turn ' + (this.state.isNext ? 'X' : 'O');
    }
    return(
      <div className='gridLayout'>
        <div className='square-grid'>
        <h1 className='Welcome-text'>Tick-Tac-Toe</h1>
          <div className='grid-row'>
            {this.rendersquare(0)}
            {this.rendersquare(1)}
            {this.rendersquare(2)}
          </div>
          <div className='grid-row'>
            {this.rendersquare(3)}
            {this.rendersquare(4)}
            {this.rendersquare(5)}
          </div>
          <div className='grid-row'>
            {this.rendersquare(6)}
            {this.rendersquare(7)}
            {this.rendersquare(8)}
          </div>
        </div>
        <p className='status'>{status}</p>
      </div>
    )
  }
}


export default class Game extends Component{
  render(){
    return(
    <div className='Grid'>
      <Grid />
    </div>
    );}
}