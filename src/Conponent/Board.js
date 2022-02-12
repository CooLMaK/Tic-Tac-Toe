import React, { useState } from "react";
import Square from './Square'
import './Board.css';
import Result from "./Result";


const Board = (props) => {
    const [square, setSquare] = useState(Array(9).fill(null));
    const [value, setValue] = useState(true);

    const SquarePosition = (num) => {
        return <Square value={square[num]} onClick={() => squareClickHandeller(num)} />
    }

    const squareClickHandeller = (i) => {
        if (!winner) {
            const squares = square.slice();

            if (squares[i] === null) {
                squares[i] = value ? 'X' : 'O';
                setSquare(squares);
                setValue(!value);
            }
        }
    }

    const checkWinner = (square) => {
        const moves = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let i = 0; i < moves.length; i++) {
            const [a, b, c] = moves[i];
            if (square[a] === square[b] && square[a] === square[c]) {
                return square[a];
            }
        }
        return null;
    }

    const winner = checkWinner(square);
    let status;
    // player1 = props.inputNames[0];
    //player2 = props.inputNames[1];
    if (winner) {
        //status = 'Winner :' + winner;
        if (winner === 'X') {
            status = <Result winnerName={props.inputNames[0]} onClick={props.gameOver} />
        } else {
            status = <Result winnerName={props.inputNames[1]} onClick={props.gameOver} />
        }
    } else if (square.indexOf(null) === -1) {
        status = <Result winnerName="It's A Tie" onClick={props.gameOver} />
    }
    else {
        status = 'Player turn :\u00A0\u00A0' + (value ? props.inputNames[0] : props.inputNames[1]);
    }

    return (
        <div className="board">
            <div className="board-box">
                <div className="board-row">
                    {SquarePosition(0)}
                    {SquarePosition(1)}
                    {SquarePosition(2)}
                </div>
                <div className="board-row">
                    {SquarePosition(3)}
                    {SquarePosition(4)}
                    {SquarePosition(5)}
                </div>
                <div className="board-row">
                    {SquarePosition(6)}
                    {SquarePosition(7)}
                    {SquarePosition(8)}
                </div>
            </div>
            <div className="status">
                {status}
            </div>
        </div>
    )
}

export default Board;