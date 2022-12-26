import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Box from "./Components/Box";
function App() {
  const [board, setboard] = useState(Array(9).fill(''));
  const [val, setval] = useState("X");

  function checkWinner(board) {
     let flag=0;
    const condition = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];
    condition.forEach((element) => {
      if (
        board[element[0]] !== "" &&
        board[element[1]] !== "" &&
        board[element[2]] !== ""
      ) {
        if (
          board[element[0]] === board[element[1]] &&
          board[element[1]] === board[element[2]]
        ) 
        {
          flag=1;
        }
      }
    });
    return flag;
  }

  function Handler(event) {
    board[event]=val;
    if (val == "X") 
       setval("0");
    else
       setval("X");
    if (checkWinner(board)) 
    {
      if(val==="X")
        alert("Player A is Winner");
      else
        alert("Player B is Winner");
        setboard('');
    }
  }

  return (
  <div className='forc'>
    <div className="App">
      <h1 style={{color:"white"}}>Tic-Toe Game</h1>
      <Box wid="610" hei="610">
        <div1 style={{ display: "flex" }}>
          <Box wid="200" hei="200" id="0" onclick={Handler} value={board[0]} />
          <Box wid="200" hei="200" id="1" onclick={Handler} value={board[1]} />
          <Box wid="200" hei="200" id="2" onclick={Handler} value={board[2]} />
        </div1>
        <div2 style={{ display: "flex" }}>
          <Box wid="200" hei="200" id="3" onclick={Handler} value={board[3]} />
          <Box wid="200" hei="200" id="4" onclick={Handler} value={board[4]} />
          <Box wid="200" hei="200" id="5" onclick={Handler} value={board[5]} />
        </div2>
        <div3 style={{ display: "flex" }}>
          <Box wid="200" hei="200" id="6" onclick={Handler} value={board[6]} />
          <Box wid="200" hei="200" id="7" onclick={Handler} value={board[7]} />
          <Box wid="200" hei="200" id="8" onclick={Handler} value={board[8]} />
        </div3>
      </Box>
    </div>
    </div>
  );
}

export default App;
