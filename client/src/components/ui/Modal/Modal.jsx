import React,{useState} from 'react'
import {useParams} from 'react-router-dom'
import './modal.css'

const Modal=({setShowModal,props}) => {
    const {id} =useParams('')
    const [box,setBox]=useState(true)

    const handleBid=()=>{
        console.log('bid',window.ethereum.request({method:'eth_requestAccounts'}))
        if (typeof window.ethereum !== 'undefined') {
            console.log('MetaMask is installed!');
          }else{
            console.log('problem')
          }
            console.log('problem')

    }


  return <div className="modal__wrapper" onClick={()=> setShowModal(box)}>
    <div className="single__modal">
        <span className='close__modal'><i class='ri-close-line' onClick={()=> {
            setBox(false)
            setShowModal(false)
 
            }}></i></span>
        <h6 className='text-center text-light'>Place a Bid</h6>
        <p className='text-center text-light'>You must bid at least <span className='money'>5.89 ETH</span></p>

        <div className="input__item mb-4">
            <input type="number" placeholder='00 : 00 ETH'/>
        </div>

        <div className="input__item mb-3">
            <h6>Enter Quantity, 7 available</h6>
            <input type="number" placeholder='Enter quantity'/>
        </div>

        <div className="d-flex align-items-center justify-content-between">
            <p>You must bid at least</p>
            <span className='money'>5.89 ETH</span>
        </div>

        <div className="d-flex align-items-center justify-content-between">
            <p>Service Fee</p>
            <span className='money'>5.89 ETH</span>
        </div>

        <div className="d-flex align-items-center justify-content-between">
            <p>Total Bid Amount</p>
            <span className='money'>5.89 ETH</span>
        </div>
        <button className='place__bid-btn' onClick={handleBid}>
            Place a Bid
        </button>
    </div>
  </div>
}

export default Modal
