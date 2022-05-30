import React, {useEffect, useState} from "react";
import {web3} from "../web3";

interface UserInfo {
  userWallet: string
}

const {ethereum} = window;

export const UserWalletInfoContext = React.createContext({} as UserInfo)

type Props = {
  children: React.ReactNode
}

export const UserInfoProvider: React.FC<Props> = ({children}) => {
  const [userWallet, setUserWallet] = useState('');

  const loadWallet = async () => {
    try {
      if (!ethereum) {
        return alert('Please install Metamask to use application');
      }
      let accounts: string[] = []
      accounts = await web3.eth.getAccounts();
      if (accounts.length === 0) {
        accounts = await ethereum.request({method: 'eth_requestAccounts'});
      }
      setUserWallet(accounts[0]);
    } catch (error) {
      console.log(error)
      throw new Error('Some error was occurred in wallet connect process')
    }
  }

  useEffect(() => {
    void loadWallet();
  }, [])

  return (
    <UserWalletInfoContext.Provider value={{ userWallet }}>
      {children}
    </UserWalletInfoContext.Provider>
  )
};
