import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/productCart.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shopping-cart/cartSlice';

export default function ProductCart(props) {
    const { id, title, image01, price } = props.item;

    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(cartActions.addItem({
            id,
            title,
            image01,
            price
        }))
    }

    return (
        <div className='product-item'>
            <div className='product-img'>
                <Link to={`/foods/${id}`}>
                    <img src={image01} alt="product-img" />
                </Link>
            </div>
            <div className='product-content'>
                <h6><Link to={`/foods/${id}`}>{title}</Link></h6>
                <div>
                    <span className='product-price'>${price}</span>
                    <button className='btn addToCart-btn' onClick={addToCart}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
