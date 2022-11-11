import React,{useState} from 'react'

import CommonSection from '../components/ui/Common-section/CommonSection';
import { Container,Row,Col } from 'reactstrap';
import {ethers} from 'ethers';
import '../styles/wallet.css'

const wallet__data=[
    {
        title:'Bitcoin',
        desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque voluptatem quidem natus maxime dignissimos alias expedita id, assumenda magni, ',
        icon:'ri-bit-coin-line'
    },
    {
        title:'CoinBase',
        desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque voluptatem quidem natus maxime dignissimos alias expedita id, assumenda magni, ',
        icon:'ri-coin-line'
    },
    {
        title:'Metamask',
        desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque voluptatem quidem natus maxime dignissimos alias expedita id, assumenda magni, ',
        icon:'ri-money-cny-circle-line'
    },
    {
        title:'Authereum',
        desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque voluptatem quidem natus maxime dignissimos alias expedita id, assumenda magni, ',
        icon:'ri-bit-coin-line'
    }
]
const Wallet=()=> {
    const [message,setMessage]=useState(null);
    const [defaultAccount,setDefaultAccount]=useState(null);
    const [userBalance,setUserBalance]=useState(null);
    const [connButtonText,setConnButtonText]=useState('Connect Wallet');
    const [connected,setConnected] = useState(false)
    const connectWalletHandler=()=>{
        if(window.ethereum){
            window.ethereum.request({method:'eth_requestAccounts'})
            .then(result=>{
                console.log(result)
                accountChangeHandler(result[0])
                setMessage('MetaMask Connected')
                setConnected(true)
            })
        }else{
            setMessage('Install MetaMask')
            setConnected(false)
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

    const buttonConnected = ()=>{
        if(connected){
            return <h2>{message}</h2>
        }else{
            return(
                <div><button className='btn__connect align-items-center' onClick={connectWalletHandler}>{connButtonText}</button>
             <h2>{message}</h2></div>
            ) 
        }
    }

    window.ethereum.on('accountsChanged',accountChangeHandler)
    window.ethereum.on('chainChanged',chainChangedHandler)
  return (
    <>
        <CommonSection title='Connect Wallet'/>

        <section>
            <Container>
                <Row>
                    <Col lg='12' className='mb-5 text-center'>
                        <div className="w-50 m-auto">
                            <h3 className='text-light'>Connect your wallet</h3>
                                {buttonConnected()}
                        </div>
                    </Col>
                    {
                        wallet__data.map((item,index)=>(
                            <Col lg='3' md='4' sm='6' key={index} className='mb-4'>
                        <div className="wallet__item">
                            <span>
                                <i class={item.icon}></i>
                            </span>
                            <h5>{item.title}</h5>
                            <p>
                                {item.desc}
                            </p>
                        </div>
                    </Col>
                        ))
                    }
                    
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Wallet
