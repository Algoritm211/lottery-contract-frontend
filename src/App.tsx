import React from 'react';
import './App.css';
import {web3} from "./web3";


const App: React.FC = () => {
  web3.eth.getAccounts().then(console.log);
  return (
    <div className="App">
      <header className="App-header">
        Some text
      </header>
    </div>
  )
};

export default App;
