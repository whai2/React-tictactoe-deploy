/* 클래스형 컴포넌트 먼저 */
import React from "react";
import "./Square.css";

const Square = ({onClick,value}) => {

    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    )
}

export default Square