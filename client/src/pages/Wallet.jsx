import React from 'react'

import CommonSection from '../components/ui/Common-section/CommonSection';
import { Container,Row,Col, Button } from 'reactstrap';

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
    const action=false;
    const handleCheckMetamaskIsCanBeActive=()=>{
        console.log('bid',window.ethereum.request({method:'eth_requestAccounts'}))
        if (typeof window.ethereum !== 'undefined') {
            console.log('MetaMask is installed!');
          }else{
            console.log('problem')
          }
            console.log('problem')

    }
    const walletButton=()=>{
        if (typeof window.ethereum !== 'undefined') {
            
            return(<button>Connect Metamask</button>)
        }else{
            return(<h3 className='text-light'>not exsist metamask</h3>)
        }
    }
  return (
    <>
        <CommonSection title='Connect Wallet'/>

        <section>
            <Container>
                <Row>
                    <Col lg='12' className='mb-5 text-center'>
                        <div className="w-50 m-auto">
                            <h3 className='text-light'>Connect your wallet</h3>

                            {walletButton()}
                         

                            
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque voluptatem quidem natus maxime 
                                dignissimos alias expedita id, assumenda magni, amet hic ducimus earum quam quos eaque reiciendis
                                 molestiae, neque iure.
                            </p>
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
