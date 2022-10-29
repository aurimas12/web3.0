import React from 'react'
import './modal.css'

const Modal=() => {
  return <div className="modal__wrapper">
    <div className="modal">
        <h6>Place a Bid</h6>
        <p>You must bid at least <span>5.89 ETH</span></p>

        <div className="input__item">
            <input type="number" placeholder='00 : 00 ETH'/>
        </div>

        <div className="input__item">
            <h6>Enter Quantity, 7 available</h6>
            <input type="number" placeholder='00 : 00 ETH'/>
        </div>

        <div className="d-flex align-items-center justify-content-between">
            <p>You must bid at least</p>
            <span>5.89 ETH</span>
        </div>

        <div className="d-flex align-items-center justify-content-between">
            <p>Service Feet</p>
            <span>5.89 ETH</span>
        </div>

        <div className="d-flex align-items-center justify-content-between">
            <p>Total Bid Amount</p>
            <span>5.89 ETH</span>
        </div>
        <button className='place__bid-btn'>
            Place a Bid
        </button>
    </div>
  </div>
}

export default Modal
