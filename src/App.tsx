import React, {useContext} from 'react';
import './App.scss';
import {LotteryContext} from "./context/LotteryContext";


const App: React.FC = () => {
  const {manager, balance, players} = useContext(LotteryContext);
  return (
    <div className="container">
      <h1>
        Lottery manager
      </h1>
      <p>
        This contract is managed by {manager}.
        Contract balance is <strong>{balance}</strong>
      </p>
      <p>
        Currently {players.length} players in lottery
      </p>
      <p>Contract balance is <strong>{balance}</strong></p>
      <header className="App-header">
      </header>
    </div>
  )
};

export default App;
