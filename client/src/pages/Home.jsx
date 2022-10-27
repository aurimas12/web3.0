import React from 'react'
import HeroSection from '../components/ui/HeroSection'
import LiveAuction from '../components/ui/Live-auction/LiveAuction'
import SellerSelection from '../components/ui/Seller-section/SellerSelection'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <LiveAuction/>
      <SellerSelection/>
    </>
  )
}

export default Home
