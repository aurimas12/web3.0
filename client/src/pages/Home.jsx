import React from 'react'
import HeroSection from '../components/ui/HeroSection'
import LiveAuction from '../components/ui/Live-auction/LiveAuction'
import SellerSelection from '../components/ui/Seller-section/SellerSelection'
import StepSection from '../components/ui/Step-section/StepSection'
import Trending from '../components/ui/Trending-section/Trending'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <LiveAuction/>
      <SellerSelection/>
      <Trending/>
      <StepSection/>
    </>
  )
}

export default Home
