import React, {useContext} from 'react';
import {LotteryContext} from "../../context/LotteryContext";
import './ContractInfo.scss'
import {cutWalletAddress} from "../utils/cutWalletAddress";

const ContractInfo: React.FC = () => {
  const {manager, balance, players} = useContext(LotteryContext);

  return (
    <div className="contract_info">
      <h1>
        Lottery manager
      </h1>
      <p>
        This contract is managed by {cutWalletAddress(manager)}.
      </p>
      <p>
        Currently {players.length} players in lottery
      </p>
      <p>Contract balance is <strong>{balance}</strong></p>
    </div>
  );
};

export default ContractInfo;
