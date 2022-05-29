import React, {useContext} from 'react';
import './App.scss';
import {web3} from "./web3";
import {LotteryContext} from "./context/LotteryContext";


const App: React.FC = () => {
  const {manager} = useContext(LotteryContext);
  return (
    <div className="container">
      <h1>
        Lottery manager
      </h1>
      <p>
        This contract is managed by {manager}
      </p>
      <header className="App-header">
      </header>
    </div>
  )
};

export default App;
