import React from 'react'
import HeroSection from '../components/ui/HeroSection'
import LiveAuction from '../components/ui/Live-auction/LiveAuction'
import SellerSelection from '../components/ui/Seller-section/SellerSelection'
import Trending from '../components/ui/Trending-section/Trending'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <LiveAuction/>
      <SellerSelection/>
      <Trending/>
    </>
  )
}

export default Home
