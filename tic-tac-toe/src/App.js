// import Board from './TicTacToeGame/Board';
// import './App.css';
// function App() {
//   return (
//     <div className="App">
//       <Board />
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css'; // Import the CSS file

const WIN_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]             // Diagonals
];

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(squares);

  const handleClick = (index) => {
    if (squares[index] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[index] = isXNext ? 'X' : 'O';
    setSquares(nextSquares);
    setIsXNext(!isXNext);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  const renderStatus = () => {
    if (winner) return `Winner: ${winner}`;
    if (!squares.includes(null)) return "Draw!";
    return `Next Player: ${isXNext ? 'X' : 'O'}`;
  };

  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>
      <div className="status">{renderStatus()}</div>
      <div className="board">
        {squares.map((value, index) => (
          <Square key={index} value={value} onClick={() => handleClick(index)} />
        ))}
      </div>
      <button className="reset-button" onClick={handleReset}>Restart Game</button>
    </div>
  );
}

function calculateWinner(squares) {
  for (let [a, b, c] of WIN_COMBINATIONS) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default TicTacToe;

