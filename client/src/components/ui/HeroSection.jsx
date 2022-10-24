import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Row,Col} from 'reactstrap'
import './hero-section.css';
import heroImg from'../../assets/images/hero.jpg'
const HeroSection = () => {
  return <section className="hero__section">
    <Container>
        <Row>
            <Col lg='6' md='6'>
                <div className="div hero__content">
                    <h2>Discover rare digital art and collect ,<span>sell extraordinary</span> NFTs</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit modi 
                        officiis expedita doloribus voluptates vel placeat, neque aliquam nihil 
                        qui voluptatibus cumque optio mollitia assumenda corrupti sed iure autem.
                    </p>
                    <div className="div hero__btns d-flex align-items-center gap-4">

                    
                        <button className='create__btn d-flex align-items-center gap-2'><i class='ri-rocket-line'></i><Link to='/market'>Explore</Link></button>
                        <button className='create__btn d-flex align-items-center gap-2'><i class='ri-ball-pen-line'></i><Link to='/create'>Create</Link></button>
                    </div>
                </div>
            </Col>
            <Col lg='6' md='6'>
                <div className="div hero__img">
                    <img src={heroImg} alt='' className='w-100'/>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default HeroSection
