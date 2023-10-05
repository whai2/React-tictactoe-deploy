import "./Board.css"
//import React, { useState } from 'react'
import Square from './Square'

const Board = ({squares,onClick}) => {

  const renderSquare = (i) => {
    return <Square value = {squares[i]}
     onClick={()=>onClick(i)} />
  }

  return (
      <div>
        <div className='board-row'>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className='board-row'>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className='board-row'>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
      </div>
  )
  
}

export default Board
// 파일 이름을 기반으로 컴포넌트 만듦
