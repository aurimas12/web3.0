import React,{useState,useEffect} from "react";
// import {ethers} from 'ethers';
import Layout from "./components/Layout/Layout";
import "./App.css";

function App() {
  // const [greet,setGreet]=useState('');
  // const [balance,setBalance]=useState('');
  // const [depositValue,setDepositValue]=useState('');
  // const [greetingValue,setGreetingValue]=useState('');

  // const provider = new ethers.providers.Web3Provider(window.ethereum);
  // const signer = provider.getSigner();
  // const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
  // // const walletAddress = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';

  // const ABI = [
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "string",
  //           "name": "_greeting",
  //           "type": "string"
  //         }
  //       ],
  //       "stateMutability": "nonpayable",
  //       "type": "constructor"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "deposit",
  //       "outputs": [],
  //       "stateMutability": "payable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "greet",
  //       "outputs": [
  //         {
  //           "internalType": "string",
  //           "name": "",
  //           "type": "string"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "string",
  //           "name": "_greeting",
  //           "type": "string"
  //         }
  //       ],
  //       "name": "setGreeting",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     }
  //   ]
  // ;

  // // The Contract object
  // const contract = new ethers.Contract(contractAddress, ABI, signer);


  // useEffect(()=>{
  //   const connectWallet= async ()=> {
  //     await provider.send("eth_requestAccounts", []);
  //   }
  //   const getBalance = async () => {
  //     const balance = await provider.getBalance(contractAddress)
  //     const balanceFormatted =ethers.utils.formatEther(balance);
  //     setBalance(balanceFormatted)
  //   }
  //   const getGreeting = async() => {
  //     const greeting= await contract.greet();
  //     setGreet(greeting);
  //   }
  //   connectWallet().catch(console.error);
  //   getBalance().catch(console.error);
  //   getGreeting().catch(console.error);
  
  // })
  

  // const handleDepositChange=(e)=>{
  //   setDepositValue(e.target.value);
  // }
  // const handleGreetingChange=(e)=>{
  //   setGreetingValue(e.target.value);
  // }
  // const handleDepositSubmit=async(e)=>{
  //   e.preventDefault();
  //   console.log(depositValue);
  //   const ethValue =  ethers.utils.parseEther(depositValue);
  //   const depositETH =  await contract.deposit({value:ethValue});
  //   await depositETH.wait();
  //   const balance = await provider.getBalance(contractAddress)
  //   const balanceFormatted =ethers.utils.formatEther(balance);
  //   setBalance(balanceFormatted)
  //   setDepositValue(0)
  // }
  // const handleGreetingSubmit=async(e)=>{
  //   e.preventDefault();
  //   const greetingUpdate = await contract.setGreeting(greetingValue);
  //   await greetingUpdate.wait();
  //   setGreet(greetingValue)
  //   setGreetingValue('')

  // }
  return (
    // <div className="container">
    //   <div className="container">
    //     <div className="row mt-5">
    //       <div className="col">
    //         <h3>{greet}</h3>
    //         <p>
    //           Contract balance: {balance}
    //         </p>
    //       </div>

    //       <div className="col">
    //         <form onSubmit={handleDepositSubmit}>
    //             <div className="mb-3">
    //               <input type="number" className="form-control" placeholder="0" onChange={handleDepositChange} value={depositValue}/>
    //             </div>
    //             <button type="submit" className="btn btn-success">Deposit</button>
    //         </form>

    //         <form onSubmit={handleGreetingSubmit} className="mt-5">
    //             <div className="mb-3">
    //               <input type="text" className="form-control" onChange={handleGreetingChange} value={greetingValue}/>
    //             </div>
    //             <button type="submit" className="btn btn-dark">Change</button>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <Layout/>
    <Layout/>
  );
}

export default App;
