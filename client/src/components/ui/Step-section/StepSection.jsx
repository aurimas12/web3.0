import React from 'react'
import './step-section.css';
import {Container,Row,Col} from 'reactstrap'
import {Link} from 'react-router-dom'

const STEP__DATA=[
    {
        title:'Setup your wallet',
        desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt laudantium quia maiores reiciendis odit et sit repellendus neque, eveniet fugiat ad ipsam sed dolores animi saepe deleniti inventore doloremque aperiam.',
        icon:'ri-wallet-line',
    },
    {
        title:'Create your collections',
        desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt laudantium quia maiores reiciendis odit et sit repellendus neque, eveniet fugiat ad ipsam sed dolores animi saepe deleniti inventore doloremque aperiam.',
        icon:'ri-layout-masonry-line',
    },
    {
        title:'Add your Electric Data',
        desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt laudantium quia maiores reiciendis odit et sit repellendus neque, eveniet fugiat ad ipsam sed dolores animi saepe deleniti inventore doloremque aperiam.',
        icon:'ri-image-line',
    },
    {
        title:'List then for sale',
        desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt laudantium quia maiores reiciendis odit et sit repellendus neque, eveniet fugiat ad ipsam sed dolores animi saepe deleniti inventore doloremque aperiam.',
        icon:'ri-list-check',
    }
]
const StepSection=()=>{
  return <section>
    <Container>
        <Row>
            <Col lg='12' className='mb-4'>
                <h3 className='step__title'>Create and sell your Electric Data</h3>
            </Col>
            {
                STEP__DATA.map((item,index)=><Col lg='3' md='4' sm='6' className='mb-4' key={index}>
                <div className="single__step__item">
                    <span>
                        <i class={item.icon}></i>
                    </span>
                    <div className="step__item__content">
                        <h5>
                            <Link to='/wallet'>{item.title}</Link>
                        </h5>
                        <p className='mb-0'>{item.desc}</p>
                    </div>
                </div>
          
            </Col>)
            }
            
        </Row>
    </Container>
  </section>
}

export default StepSection
