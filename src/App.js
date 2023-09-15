// JavaScript 的 export 关键字使此函数可以在此文件之外访问。default 关键字表明它是文件中的主要函数
import { useState } from 'react';

function Square({value}) {
  // const [value, setValue] = useState(null);

  // function handleClick() {
  //   setValue("X");
  // }

  return (
    <button 
      className="square" 
      // onClick={handleClick}
    >
      {value}
    </button>);
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (    
    <>
      <div className="board-row">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
}
