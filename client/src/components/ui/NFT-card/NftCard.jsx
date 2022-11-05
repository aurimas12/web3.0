import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './nft-card.css'

import Modal from '../Modal/Modal'
// import'../Live-auction/live-auction.css'
const NftCard = (props) => {
    const {id,title,image,creator,current_bid}=props.item
    const [showModal,setShowModal]=useState(false)
  return <div className="single__nft__card">
  <div className="nft__img">
      <img src={image} alt='' height={240} className='w-100'/>
  </div>

  <div className="nft__content">
      <h5 className='nft__title'><Link to={`/market/${id}`}>{title}</Link></h5>
      <div className="creator__info-wrapper d-flex gap-3" >
          <div className="creator__img">
              <img src={creator.image} alt='' className='w-100'/>
          </div>
          <div className="creator__info w-100 d-flex align-items-center justify-content-between">
              <div>
                  <h6>Created By</h6>
                  <p>{creator.name}</p>
              </div>

              <div>
                  <h6>Current Bid</h6>
                  <p>{current_bid} ETH</p>
              </div>
          </div>

      </div>
      <div className='mt-3 d-flex align-items-center justify-content-between'>
          <button className='bid__btn d-flex align-items-center gap-1' onClick={()=>setShowModal(true)}>
            <i class='ri-shopping-bag-line'></i> Place Bid</button>


          {showModal && <Modal setShowModal={setShowModal} />}
          <span className='history__link'><Link to='#'>View History</Link></span>
      </div>
  </div>
</div>
}

export default NftCard
