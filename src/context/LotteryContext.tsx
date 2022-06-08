import React, {useEffect, useState} from "react";
import {lottery} from "../contractInfo/lottery";
import {web3} from "../web3";


interface LotteryContextValues {
  manager: string;
  players: string[];
  balance: number;
  enterLottery: (wallet: string, amount: number) => Promise<void>;
  pickWinner: (wallet: string) => Promise<void>
}

export const LotteryContext = React.createContext({} as LotteryContextValues)

type Props = {
  children: React.ReactNode
}
export const LotteryContextProvider: React.FC<Props> = ({children}) => {
  const [manager, setManager] = useState('');
  const [contractBalance, setContractBalance] = useState(0);
  const [players, setPlayers] = useState([]);

  const getManager = async () => {
    try {
      const manager = await lottery.methods.getManager().call();
      setManager(manager);
    } catch (error) {
      console.log('Some error was occurred while fetching manager data')
    }
  }

  const getPlayers = async () => {
    try {
      const players = await lottery.methods.getPlayers().call();
      setPlayers(players);
    } catch (error) {
      console.log('Some error was occurred while fetching players data')
    }
  }

  const enterLottery = async (wallet: string, amount: number) => {
    try {
      await lottery.methods.enter().send({
        from: wallet,
        value: web3.utils.toWei(amount.toString(), 'ether'),
      })
      await getPlayers();
      await getCurrentBalance();
    } catch (error) {
      console.log('Some error was occurred while entering the lottery')
    }
  }

  const pickWinner = async (wallet: string) => {
    try {
      await lottery.methods.pickWinner().send({
        from: wallet
      });
      await getPlayers();
      await getCurrentBalance();
    } catch (error) {
      console.log(error);
      console.log('Something went wrong with picking winner')
    }
  }

  const getCurrentBalance = async () => {
    try {
      const currentBalance = Number(await web3.eth.getBalance(lottery.options.address));
      setContractBalance(currentBalance);
    } catch (error) {
      console.log('Some error was occurred while fetching players data')
    }
  }

  useEffect(() => {
    void getManager();
    void getPlayers();
    void getCurrentBalance();
  }, []);

  return (
    <LotteryContext.Provider value={{
      manager,
      players,
      balance: contractBalance,
      enterLottery,
      pickWinner,
    }}>
      {children}
    </LotteryContext.Provider>
  )
}
