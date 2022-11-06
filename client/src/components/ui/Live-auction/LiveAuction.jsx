import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import {Container, Row,Col} from 'reactstrap';
import './live-auction.css';

import NftCard from '../NFT-card/NftCard';

const LiveAuction=()=> {
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
    return <section>
    <Container>
        <Row>
            <Col lg='12' className='mb-5'>
                <div className="live__auction__top d-flex align-items-center justify-content-between">
                    <h3>Live Auction</h3>
                    <span><Link to='/market'>Explore more</Link></span>
                </div>
            </Col>
                {
                    data.slice(0,4).map((item)=>(
                        <Col lg='3' md='4' sm='6' className='mb-4'>
                        <NftCard key={item.id} item={item} />
                        </Col>
                    ))
                }    
        </Row>
    </Container>
  </section>
}

export default LiveAuction
