import React,{useEffect,useState} from 'react';
import './seller.css';
import { Container,Row,Col } from 'reactstrap';

const SellerSelection=() => {
    const [data,setData]=useState([])

    useEffect(()=>{
        const dataFetch= async() =>{
            const data= await(
                await fetch('http://127.0.0.1:8000/api/items/creator/')
            ).json();
            setData(data);
        };
        dataFetch();
    },[])
  return <section>
    <Container>
        <Row>
            <Col lg='12' className='mb-5'>
                <div className="seller__section-title">
                    <h3>Top Seller</h3>
                </div>
            </Col>
            {
                data.map((item)=>(
                    <Col lg='2' md='3' sm='4' xs='6' key={item.id} className='mb-4'>
                <div className="single__seller-card d-flex align-items-center gap-3">
                    <div className="seller__img">
                        <img src={item.image} alt='' className='w-100'/>
                    </div>

                    <div className="seller__content">
                        <h6>{item.name}</h6>
                        <h6>0.00 ETH</h6>
                    </div>
                </div>
            </Col>
                ))
            }
            
        </Row>
    </Container>
  </section>
}

export default SellerSelection
