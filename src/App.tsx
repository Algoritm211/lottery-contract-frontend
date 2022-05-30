import React from 'react';
import './App.scss';
import ContractInfo from "./components/ContractInfo/ContractInfo";
import EnterLotteryForm from "./components/EnterLotteryForm/EnterLotteryForm";


const App: React.FC = () => {
  return (
    <div className="container">
      <ContractInfo />
      <hr/>
      <EnterLotteryForm />
    </div>
  )
};

export default App;
