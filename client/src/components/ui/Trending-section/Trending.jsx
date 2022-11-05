import React,{useState,useEffect} from 'react'
import './trending.css'
import {Container,Row,Col} from 'reactstrap'
import {NFT__DATA} from '../../../assets/data/data'
import NftCard from '../NFT-card/NftCard';


const Trending=()=> {
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
  return (
    <section>
        <Container>
            <Row>
                <Col lg='12' className='mb-5'>
                    <h3 className='trending__title'>Trending</h3>
                </Col>

                {
                    data.slice(0,8).map((item)=>(
                        <Col lg='3' md='4' sm='6' key={item.id} className='mb-4'>
                            <NftCard item={item} />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    </section>
  )
}

export default Trending
