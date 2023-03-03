import React from 'react'
import Helmet from '../components/Helmet/Helmet';
import { Col, Container, Row } from 'reactstrap'
import heroImg from '../assets/images/hero.png'
import '../styles/hero-section.css'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <Helmet title="Home">
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div className='hero-content'>
                                <h5 className='mb-3'>The website will help you order pizza and more...</h5>
                                <h1 className='mb-4 hero-title'>Are you hungry? <span>Order now</span></h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum rerum ipsum quis tenetur corrupti, consequuntur quidem. Vitae sequi provident eum id possimus eius harum aut repellendus, saepe illo, illum dicta?</p>
                                <div className='hero-btns mt-4 d-flex align-items-center gap-4 justify-content-center'>
                                    <button className='btn btn-order d-flex align-items-center justify-content-center'>
                                        Order now
                                        <i className="ri-arrow-right-s-line"></i>
                                    </button>
                                    <button className='btn btn-see-all-foods'>
                                        <Link to="/foods" className='link'>See all foods</Link>
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6" md="6">
                            <div className='hero-img'>
                                <img src={heroImg} alt='hero-img' className='w-100' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}
