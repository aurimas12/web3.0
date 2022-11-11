import React from 'react'
import {useState} from 'react'
import {ethers} from 'ethers';
const MetaMask=()=> {
    const [message,setMessage]=useState(null);
    const [defaultAccount,setDefaultAccount]=useState(null);
    const [userBalance,setUserBalance]=useState(null);
    const [connButtonText,setConnButtonText]=useState('Connect Wallet');

    const connectWalletHandler=()=>{
        if(window.ethereum){
            window.ethereum.request({method:'eth_requestAccounts'})
            .then(result=>{
                console.log(result)
                accountChangeHandler(result[0])
                setMessage('Connected')
            })
        }else{
            setMessage('Install MetaMask')
        }
    }

    const accountChangeHandler = (newAccount)=>{
        setDefaultAccount(newAccount)
        getUserBalance(newAccount.toString())
    }

    const getUserBalance=(address)=>{
        window.ethereum.request({method: 'eth_getBalance',params:[address,'latest']})
        .then(balance=>{
            setUserBalance(ethers.utils.formatEther(balance))
        })
    }
    const chainChangedHandler=()=>{
        window.location.reload()
    }
    window.ethereum.on('accountsChanged',accountChangeHandler)
    window.ethereum.on('chainChanged',chainChangedHandler)
  return (
    <div>
    <div className="walletCard">
        <h2>Connection to metamask</h2>
        <button onClick={connectWalletHandler}>{connButtonText}</button>
    </div>
    <div className="accountDisplay">
    <h2>Address: {defaultAccount}</h2>
    </div>
    <div className="balanceDisplay">
    <h2>Balance: {userBalance}</h2>
    </div>
    {message}
    </div>
  )
}

export default MetaMask
