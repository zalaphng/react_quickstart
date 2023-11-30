import React, { useState } from "react";
import Square from "../components/TicTacToe/Square";
// import styled from "styled-components";

function Board() {
   const [xIsNext, setXIsNext] = useState(true);
   const [squares, setSquares] = useState(Array(9).fill(null));
   const winner = calculateWinner(squares);
   let status;
   if (winner) {
      status = "Winner: " + winner;
   } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
   }

   function handleClick(i) {
      if (squares[i] || calculateWinner(squares)) {
         return;
      }
      const nextSquares = squares.slice();
      if (xIsNext) {
         nextSquares[i] = "X";
      } else {
         nextSquares[i] = "O";
      }
      setSquares(nextSquares);
      setXIsNext(!xIsNext);
   }

   return (
      <div>
         <p className="text-sky-800 text-center font-bold text-3xl">
            TicTacToe
         </p>
         <div className="mx-auto container h-screen w-screen flex justify-center items-center p-0 m-0">
            <div>
               <div className="status">{status}</div>
               <div>
                  <Square
                     value={squares[0]}
                     onSquareClick={() => handleClick(0)}
                  />
                  <Square
                     value={squares[1]}
                     onSquareClick={() => handleClick(1)}
                  />
                  <Square
                     value={squares[2]}
                     onSquareClick={() => handleClick(2)}
                  />
               </div>
               <div>
                  <Square
                     value={squares[3]}
                     onSquareClick={() => handleClick(3)}
                  />
                  <Square
                     value={squares[4]}
                     onSquareClick={() => handleClick(4)}
                  />
                  <Square
                     value={squares[5]}
                     onSquareClick={() => handleClick(5)}
                  />
               </div>
               <div>
                  <Square
                     value={squares[6]}
                     onSquareClick={() => handleClick(6)}
                  />
                  <Square
                     value={squares[7]}
                     onSquareClick={() => handleClick(7)}
                  />
                  <Square
                     value={squares[8]}
                     onSquareClick={() => handleClick(8)}
                  />
               </div>
            </div>
            <div className="p-4">Content</div>
         </div>
      </div>
   );
}

function calculateWinner(squares) {
   const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
   ];
   for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
         squares[a] &&
         squares[a] === squares[b] &&
         squares[a] === squares[c]
      ) {
         return squares[a];
      }
   }
   return null;
}

export default function TicTacToe() {
   const [xIsNext, setXIsNext] = useState(true);
   const [history, setHistory] = useState([Array(9).fill(null)]);
   const currentSquares = history[history.length - 1];

   function handlePlay(nextSquares) {}

   return (
      <div className="game">
         <div className="game-board">
            <Board
               xIsNext={xIsNext}
               squares={currentSquares}
               onPlay={handlePlay}
            />
         </div>
         <div className="game-info">
            <ol>{/*TODO*/}</ol>
         </div>
      </div>
   );
}
