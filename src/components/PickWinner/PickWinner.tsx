import React, {useContext, useState} from 'react';
import {LotteryContext} from "../../context/LotteryContext";
import {UserWalletInfoContext} from "../../context/UserWalletInfoContext";
import './PickWinner.scss'

const PickWinner: React.FC = () => {
  const [pickWinnerStatus, setPickWinnerStatus] = useState('');
  const {pickWinner, manager} = useContext(LotteryContext)
  const {userWallet} = useContext(UserWalletInfoContext);
  console.log(userWallet)

  const onPickWinner = async () => {
    if (userWallet !== manager) {
      return alert('You are not a manager')
    }
    setPickWinnerStatus('Picking winner')
    await pickWinner(userWallet)
    setPickWinnerStatus('Winner was picked')
  }

  return (
    <div className="pick_container">
      <h2>Pick the winner of the Lottery!</h2>
      <button onClick={onPickWinner} className="submit__button">
        Pick the winner
      </button>
      <span>
        {pickWinnerStatus}
      </span>
    </div>
  );
};

export default PickWinner;
