import React, {useEffect, useState} from "react";
import {lottery} from "../contractInfo/lottery";


interface LotteryContextValues {
  manager: string;
}

export const LotteryContext = React.createContext({} as LotteryContextValues)

type Props = {
  children: React.ReactNode
}
export const LotteryContextProvider: React.FC<Props> = ({children}) => {
  const [manager, setManager] = useState('');

  const getManager = async () => {
    try {
      const manager = await lottery.methods.getManager().call();
      setManager(manager);
    } catch (error) {
      console.log('Some error was occurred while fetching manager data')
    }
  }

  useEffect(() => {
    void getManager();
  }, []);

  return (
    <LotteryContext.Provider value={{
      manager
    }}>
      {children}
    </LotteryContext.Provider>
  )
}
