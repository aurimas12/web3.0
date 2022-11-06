import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom';
import {Container,Row,Col} from 'reactstrap';
import LiveAuction from '../components/ui/Live-auction/LiveAuction'
import CommonSection from '../components/ui/Common-section/CommonSection'
import '../styles/nft-details.css'
import { Link } from 'react-router-dom';
import axios from 'axios'

const NftDetails=()=> {
    const {id}=useParams()
    const [product,setProduct]=useState("")
    const url = 'http://127.0.0.1:8000'

    const getSingleProduct = async()=>{
        const {data}=await axios.get(`http://127.0.0.1:8000/api/items/${id}/`)
        console.log(data)
        setProduct(data)
    }
    
    useEffect(()=>{
        getSingleProduct();
        console.log(product?.title)

    },[])
  
  return <>
    <CommonSection title={product.title}/>

    <section>
        <Container>
            <Row>
                <Col lg='6' md='6' sm='6'>
                    <img src={url+product.image} alt='' className='w-100 single__nft-img' />
                </Col>

                <Col lg='6' md='6' sm='6'>
                    <div className="single__nft__content">
                        <h2>{product.title}</h2>
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
                                <img src={url+product.creator?.image} alt='' className='w-100'/>
                            </div>

                            <div className="creator__detail">
                                <p>Created By</p>
                                <h6>{product.creator?.name}</h6>
                            </div>
                        </div>
                        <p className='my-4'>{product.description}</p>
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
// TODO modal uzdarymas turi veikti viena syki klikinus ant kryziuko
// TODO api gaut by id neveiki,problema su cross origin
// TODO item detail- created by skilti reik pakeistim i kategorija mineralo
// TODO item detail- jei clikinam kita item jo detail nerodo
