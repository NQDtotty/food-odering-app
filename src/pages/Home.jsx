import React, { useEffect, useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Col, Container, Row } from 'reactstrap';
import heroImg from '../assets/images/hero.png';
import '../styles/hero-section.css';
import '../styles/home.css';
import { Link } from 'react-router-dom';
import Category from '../components/UI/Category/Category';

import serviceImg01 from '../assets/images/service-01.png';
import serviceImg02 from '../assets/images/service-02.png';
import serviceImg03 from '../assets/images/service-03.png';

import burgerCategoryImg from '../assets/images/hamburger.png';
import pizzaCategoryImg from '../assets/images/pizza.png';
import breadCategoryImg from '../assets/images/bread.png';

import products from '../assets/data/products';
import ProductCart from '../components/UI/ProductCart/ProductCart';

import tastyImg from '../assets/images/location.png';

import networkImg from '../assets/images/network.png';

import TestimonialSlider from '../components/UI/Slider/TestimonialSlider';

const serviceData = [
    {
        title: "Quick Delivery",
        imgUrl: serviceImg01,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, sit"
    },
    {
        title: "Super Dine In",
        imgUrl: serviceImg02,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, sit"
    },
    {
        title: "Easy Pick Up",
        imgUrl: serviceImg03,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, sit"
    }
];

export default function Home() {
    const [category, setCategory] = useState("ALL");
    const [allProducts, setAllProducts] = useState(products);
    const [hotPizza, setHotPizza] = useState([]);

    useEffect(() => {
        const filteredProducts = products.filter(item => item.category === 'Pizza');
        setHotPizza(filteredProducts.slice(0, 4));
    }, []);

    useEffect(() => {
        if (category === 'ALL') {
            setAllProducts(products);
        }
        else if (category === 'BURGER') {
            const filteredProducts = products.filter(item => item.category === 'Burger');
            setAllProducts(filteredProducts);
        }
        else if (category === 'PIZZA') {
            const filteredProducts = products.filter(item => item.category === 'Pizza');
            setAllProducts(filteredProducts);
        }
        else if (category === 'BREAD') {
            const filteredProducts = products.filter(item => item.category === 'Bread');
            setAllProducts(filteredProducts);
        }
    }, [category]);

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

            {/* Category */}
            <section className='pt-0'>
                <Category></Category>
            </section>

            {/* What we serve */}
            <section>
                <Container>
                    <Row>
                        <Col lg="12" className='text-center'>
                            <h5 className='service-subtitle mb-4'>What we serve</h5>
                            <h2 className='service-title'>Just sit back at home</h2>
                            <h2 className='service-title'>we will <span>take care</span></h2>
                            <p className='mb-1 mt-4 service-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, rem!</p>
                            <p className='service-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, rem!</p>
                        </Col>
                    </Row>
                    <Row className='mt-5'>
                        {serviceData.map((item, index) => (
                            <Col lg="4" md="4" sm="12" key={index} className='text-center pt-4'>
                                <img src={item.imgUrl} alt="service-img" className='servie-img mb-2' />
                                <h5 className='mb-3'>{item.title}</h5>
                                <p className='service-desc'>{item.desc}</p>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Popular foods */}
            <section>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2>Popular Foods</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="12">
                            <div className='food-category-btn d-flex align-items-center justify-content-center'>
                                <button onClick={() => setCategory('ALL')} className={`btn d-flex align-items-center justify-content-center gap-1 ${category === 'ALL' ? 'active-category-btn' : ''} `}>All</button>
                                <button onClick={() => setCategory('BURGER')} className={`btn d-flex align-items-center justify-content-center gap-1 ${category === 'BURGER' ? 'active-category-btn' : ''} `}>
                                    <img src={burgerCategoryImg} alt="burger-category-img" />
                                    Burger
                                </button>
                                <button onClick={() => setCategory('PIZZA')} className={`btn d-flex align-items-center justify-content-center gap-1 ${category === 'PIZZA' ? 'active-category-btn' : ''} `}>
                                    <img src={pizzaCategoryImg} alt="pizza-category-img" />
                                    Pizza
                                </button>
                                <button onClick={() => setCategory('BREAD')} className={`btn d-flex align-items-center justify-content-center gap-1 ${category === 'BREAD' ? 'active-category-btn' : ''} `}>
                                    <img src={breadCategoryImg} alt="bread-category-img" />
                                    Bread
                                </button>
                            </div>
                        </Col>
                    </Row>
                    {/* List of popular foods, filter */}
                    <Row>
                        {allProducts.map(item => (
                            <Col lg='3' md='4' sm='6' key={item.id}>
                                <ProductCart item={item}></ProductCart>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Why tasty treat page */}
            <section>
                <Container>
                    <Row>
                        <Col lg='6' md='6' sm='12'>
                            <div className='tasty-img'>
                                <img src={tastyImg} alt="tasty-img" />
                            </div>
                        </Col>
                        <Col lg='6' md='6' sm='12'>
                            <h2 className='tasty-title mb-4'>
                                Why <span>Tasty Treat?</span>
                            </h2>
                            <p className='tasty-desc mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, minus. Tempora reprehenderit a corporis velit, laboriosam vitae ullam, repellat illo sequi odio esse iste fugiat dolor, optio incidunt eligendi deleniti!</p>
                            <div className='tasty-content'>
                                <div className='mb-5'>
                                    <h6>
                                        <i className="ri-checkbox-circle-line"></i>
                                        Fresh and tasty foods
                                    </h6>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, voluptatibus.</p>
                                </div>
                                <div className='mb-5'>
                                    <h6>
                                        <i className="ri-checkbox-circle-line"></i>
                                        Quality support
                                    </h6>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, voluptatibus.</p>
                                </div>
                                <div className='mb-5'>
                                    <h6>
                                        <i className="ri-checkbox-circle-line"></i>
                                        Order from any location
                                    </h6>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, earum.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Hot pizza */}
            <section className='mt-0'>
                <Container>
                    <Row>
                        <Col lg="12" md="12" sm="12">
                            <h2 className='text-center'>Hot Pizza</h2>
                        </Col>
                    </Row>
                    <Row>
                        {hotPizza.map((item, index) => (
                            <Col lg="3" md="4" sm="6" key={index}>
                                <ProductCart item={item}></ProductCart>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Testimonial */}
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12">
                            <h5 className='testimonial-subtitle mb-4'>Testimonial</h5>
                            <h2 className='testimonial-title mb-4'>What our <span>customers</span> are saying</h2>
                            <p className='testimonial-desc mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quasi qui minus quos sit perspiciatis inventore quis provident placeat fugiat!</p>
                            <TestimonialSlider></TestimonialSlider>
                        </Col>
                        <Col lg="6" md="6" sm="12">
                            <div className='testimonial-img'>
                                <img src={networkImg} alt="testimonial-img" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}
