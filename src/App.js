//import logo from './logo.svg';
//import './App.css';
import React, { useState } from 'react';
import Board from './Conponent/Board'
import PlayerDetails from './Conponent/PlayerDetails';
import Result from './Conponent/Result';

function App() {
  const [details, setDetails] = useState(true);
  const [names, setNames] = useState(Array(2).fill(null))

  const playerName = (name) => {
    const namesOfPlayers = name.slice();
    setNames(namesOfPlayers);
    setDetails(false);
  }
  const restartGame = () => {
    setDetails(true);
  }

  return (
    <div className="App">
      <h1 className='header'>Tic Toc Toe</h1>
      {details && <PlayerDetails onSaveName={playerName} />}
      {!details && <Board inputNames={names} gameOver={restartGame} />}
    </div>
  );
}

export default App;
