import React, { useState } from "react";
import './PlayerDetails.css';

const PlayerDetails = (props) => {
    const [plName1, setPlName1] = useState('');
    const [plName2, setPlName2] = useState('');


    const player_1 = (event) => {
        setPlName1(event.target.value);
    }

    const player_2 = (event) => {
        setPlName2(event.target.value);
    }

    const submitHandeller = (event) => {
        event.preventDefault();
        if (plName1 === '' && plName2 === '') {
            alert('Name should Not Empty');
            return;
        }
        const names = [plName1, plName2];
        props.onSaveName(names);
        setPlName1('');
        setPlName2('');

    }

    return (
        <div>
            <div className="main-content">
                <form onSubmit={submitHandeller}>
                    <div className="input-content">
                        <label>Player 1</label>
                        <input type='text' value={plName1} onChange={player_1} />
                    </div>
                    <div className="input-content">
                        <label>Player 2</label>
                        <input type='text' value={plName2} onChange={player_2} />
                    </div>
                    <div className="input-action">
                        <button type="submit">Start</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PlayerDetails;