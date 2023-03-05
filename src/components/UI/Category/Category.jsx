import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../../styles/category.css';

import categoryImg01 from "../../../assets/images/category-01.png";
import categoryImg02 from "../../../assets/images/category-02.png";
import categoryImg03 from "../../../assets/images/category-03.png";
import categoryImg04 from "../../../assets/images/category-04.png";

const categoryData = [
    {
        display: 'Fastfood',
        imgUrl: categoryImg01
    },
    {
        display: 'Pizza',
        imgUrl: categoryImg02
    },
    {
        display: 'Asian Food',
        imgUrl: categoryImg03
    },
    {
        display: 'Row Meat',
        imgUrl: categoryImg04
    }
];

export default function Category() {
    return (
        <Container>
            <Row>
                {categoryData.map((item, index) => (
                    <Col lg='3' md='4' sm='6' key={index} className="p-2">
                        <div className='category-item d-flex align-items-center gap-3 justify-content-start'>
                            <div className='category-img'>
                                <img src={item.imgUrl} alt="category-item" />
                            </div>
                            <h6>{item.display}</h6>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
