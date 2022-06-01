import React from 'react';
import './App.scss';
import ContractInfo from "./components/ContractInfo/ContractInfo";
import EnterLotteryForm from "./components/EnterLotteryForm/EnterLotteryForm";
import PickWinner from "./components/PickWinner/PickWinner";


const App: React.FC = () => {
  return (
    <div className="container">
      <ContractInfo />
      <hr/>
      <EnterLotteryForm />
      <hr/>
      <PickWinner />
    </div>
  )
};

export default App;
