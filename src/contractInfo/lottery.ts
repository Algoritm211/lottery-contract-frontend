import {web3} from "../web3";
import lotteryAbi from './abi.json';
import {LOTTERY_CONTRACT_ADDRESS} from "./contractAddress";
import {AbiItem} from "ethereum-abi-types-generator";


export const lottery = new web3.eth.Contract((lotteryAbi as unknown as AbiItem), LOTTERY_CONTRACT_ADDRESS);
