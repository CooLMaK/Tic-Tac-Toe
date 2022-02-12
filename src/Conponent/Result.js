import React from "react";
import './Result.css';

const Result = (props) => {

    let heading = <h2>WINNER!!!</h2>
    if (props.winnerName === "It's A Tie") {
        heading = <h2>OH NO!!!!</h2>
    }
    return (
        <div className="result-content">
            <div className="result-content__inner">
                {heading}
                <h3 className="winner-name">{props.winnerName}</h3>
                <button onClick={props.onClick}>Restart</button>
            </div>
        </div>
    )
}

export default Result;