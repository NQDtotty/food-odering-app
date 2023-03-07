import React from 'react';
import Slider from "react-slick";

import '../../../styles/testimonialSlider.css';
import avatarImg01 from '../../../assets/images/ava-1.jpg';
import avatarImg02 from '../../../assets/images/ava-2.jpg';
import avatarImg03 from '../../../assets/images/ava-3.jpg';

export default function TestimonialSlider() {
    const setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <Slider {...setting}>
            <div>
                <p className='review-content mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis atque, quam minus totam maiores laborum! Impedit consectetur illum aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus quis dolorem quas!</p>
                <div className='review-customer gap-4 mb-4'>
                    <img src={avatarImg01} alt="customer-img" />
                    <h6>Jhon Doe</h6>
                </div>
            </div>
            <div>
                <p className='review-content mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis atque, quam minus totam maiores laborum! Impedit consectetur illum aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus quis dolorem quas!</p>
                <div className='review-customer gap-4 mb-4'>
                    <img src={avatarImg02} alt="customer-img" />
                    <h6>Mitchell Marsh</h6>
                </div>
            </div>
            <div>
                <p className='review-content mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis atque, quam minus totam maiores laborum! Impedit consectetur illum aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus quis dolorem quas!</p>
                <div className='review-customer gap-4 mb-4'>
                    <img src={avatarImg03} alt="customer-img" />
                    <h6>Steven Crock</h6>
                </div>
            </div>
        </Slider>
    )
}
