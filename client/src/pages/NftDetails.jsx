import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom';
import {Container,Row,Col} from 'reactstrap';
import {NFT__DATA} from '../assets/data/data'
import LiveAuction from '../components/ui/Live-auction/LiveAuction'
import CommonSection from '../components/ui/Common-section/CommonSection'
import '../styles/nft-details.css'
import { Link } from 'react-router-dom';
const NftDetails=()=> {
    const {id}=useParams()
    // const singleNft=NFT__DATA.find(item=> item.id===id)
    // http://127.0.0.1:8000/api/items/1/
    console.log(id)

    
    // http://127.0.0.1:8000/api/items/1/
    const [data,setData]=useState([])

    useEffect(()=>{
        const dataFetch= async() =>{
            const data= await(
                await fetch('http://127.0.0.1:8000/api/items/')
            ).json();
            setData(data);
        };
        dataFetch();
    },[])
    console.log(data)
    const singleNft=data.filter(item=> item.id===parseInt(id))
    console.log(2122,id,{id},parseInt(id))
    console.log(212,data)
    console.log(21,singleNft)
    console.log(20,singleNft[0].title)
  return <>
    <CommonSection title={singleNft[0].title}/>

    <section>
        <Container>
            <Row>
                <Col lg='6' md='6' sm='6'>
                    <img src={singleNft[0].image} alt='' className='w-100 single__nft-img' />
                </Col>

                <Col lg='6' md='6' sm='6'>
                    <div className="single__nft__content">
                        <h2>{singleNft[0].title}</h2>

                        <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                            <div className='d-flex align-items-center gap-4 single__nft-seen'>
                                <span>
                                    <i class='ri-eye-line'></i>234
                                </span>
                                <span>
                                    <i class='ri-heart-line'></i>123
                                </span>
                            </div>

                            <div className='d-flex align-items-center gap-2 single__nft-more'>
                                <span>
                                    <i class='ri-send-plane-line'></i>
                                </span>
                                <span>
                                    <i class='ri-more-2-line'></i>
                                </span>
                            </div>
                        </div>
                        <div className="nft__creator d-flex gap-3 align-items-center">
                            <div className="creator__img">
                                <img src={singleNft[0].creator.image} alt='' className='w-100'/>
                            </div>

                            <div className="creator__detail">
                                <p>Created By</p>
                                <h6>{singleNft[0].creator.name}</h6>
                            </div>
                        </div>
                        <p className='my-4'>{singleNft[0].description}</p>
                        <button className='singleNft-btn d-flex align-items-center gap-2 w-100'>
                            <i class='ri-shopping-bag-line'></i>
                            <Link to='/wallet'>Place a Bid</Link>
                        </button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    <LiveAuction/>
  </>
}

export default NftDetails
