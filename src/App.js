import React, { useState } from "react";
import "./App.css"
import Board from "./components/Board";

function App() {
  const [history, setHistory] = useState([{squares: Array(9).fill(null)}]);
  const [xIsNext, setxIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  //var [count,setcount] = useState(0);

  const CalculateWinner = (squares) => {
      const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [0,4,8]
      ]
      for (let i = 0; i < lines.length; i++) {
        const [a,b,c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
  }

  const current = history[stepNumber];
  const winner = CalculateWinner(current.squares);
  
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if  (stepNumber === 9) {
    status = 'Draw';
  } else {
    status = `Next player ${xIsNext? 'X':'O'}`;
  }

  const handleClick = (i) => {
    const newHistory = history.slice(0,stepNumber+1);
    const newCurrent = newHistory[newHistory.length - 1];
    const newSquares = newCurrent.squares.slice();

    if (CalculateWinner(newSquares) || newSquares[i]) {
      return;
    }

    newSquares[i] = xIsNext? 'X': 'O' ;
    setHistory([...newHistory,{squares : newSquares}]); //append와 유사.
    setxIsNext(prev => !prev);
    setStepNumber(newHistory.length);
    //setcount(count + 1);
  }

  const moves = history.map((step, move) => {
    const desc = move ? 'Go to move #' + move : 'Go to game start';
    return (
      <li key={move}>
        <button className="move-button" onClick={() => JumpTo(move)}>{desc}</button>
      </li>
    );
  });

  const JumpTo = (step) => {
    setStepNumber(step);
    setxIsNext((step % 2 === 0));
    //setcount(step);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares}
         onClick={(i)=>handleClick(i)}/>
      </div>
      <div className="game-info">
        <div className="status">{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default App;
