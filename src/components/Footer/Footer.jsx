import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row, ListGroupItem, ListGroup } from 'reactstrap'
import logo from '../../assets/images/res-logo.png'
import '../../styles/footer.css'

export default function Footer() {
    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col lg="3" md="4" sm="6" className='pt-4'>
                        <div className='footer-logo'>
                            <img src={logo} alt="logo" />
                            <h5>Pizza365</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                        </div>
                    </Col>
                    <Col lg="3" md="4" sm="6" className='pt-4'>
                        <h5 className='footer-title'>Delivery Time</h5>
                        <ListGroup className='delivery-time-list'>
                            <ListGroupItem className='delivery-time-item border-0 ps-0'>
                                <span>Sunday - Thursday:</span>
                                <p>10:00am - 11:00pm</p>
                            </ListGroupItem>
                            <ListGroupItem className='delivery-time-item border-0 ps-0'>
                                <span>Friday - Saturday:</span>
                                <p>Off day</p>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col lg="3" md="4" sm="6" className='pt-4'>
                        <h5 className='footer-title'>Contact</h5>
                        <ListGroup className='contact-list'>
                            <ListGroupItem className='contact-item border-0 ps-0'>
                                <p>Location: Man Thien, Thu Duc city, Ho Chi Minh city, Viet Nam</p>
                            </ListGroupItem>
                            <ListGroupItem className='contact-item border-0 ps-0'>
                                <p>Phone: <a href='tel:0123456789'>0123456789</a></p>
                            </ListGroupItem>
                            <ListGroupItem className='contact-item border-0 ps-0'>
                                <p>Email: <a href='mailto:example@gmail.com'>example@gmail.com</a></p>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col lg="3" md="4" sm="6" className='pt-4'   >
                        <h5 className='footer-title'>Newsletter</h5>
                        <p>Subscribe our newsletter:</p>
                        <div className='newsletter'>
                            <input type="email" placeholder='Enter your email' />
                            <span>
                                <i className="ri-send-plane-line"></i>
                            </span>
                        </div>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col lg="6" md="6" sm="12">
                        <p className='copyright-text'>&copy;Copyright - 2022, website made by Nguyen Thoai. All Rights Reserved</p>
                    </Col>
                    <Col lg="6" md="6" sm="12">
                        <div className='social-links d-flex align-items-center gap-4 justify-content-center'>
                            <p className='m-0'>Follow me:</p>
                            <span>
                                <Link className='link' to="https://www.facebook.com/Ng.AnhThoai/">
                                    <i className="ri-facebook-circle-fill"></i>
                                </Link>
                            </span>
                            <span>
                                <Link className='link' to="https://www.instagram.com/_nat_0311/">
                                    <i className="ri-instagram-line"></i>
                                </Link>
                            </span>
                            <span>
                                <Link className='link' to="https://github.com/NQDtotty">
                                    <i className="ri-github-fill"></i>
                                </Link>
                            </span>
                            <span>
                                <Link className='link' to="https://www.linkedin.com/in/nguyen-anh-thoai-84756b242/">
                                    <i className="ri-linkedin-fill"></i>
                                </Link>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
