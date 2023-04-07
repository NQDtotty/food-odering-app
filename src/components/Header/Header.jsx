import React, { useRef, useEffect } from 'react';
import { Container } from 'reactstrap';
import logo from '../../assets/images/res-logo.png';
import { NavLink, Link } from 'react-router-dom';
import '../../styles/header.css';
import { useSelector } from 'react-redux';

const nav_links = [
    {
        display: 'Home',
        path: '/home'
    },
    {
        display: 'Foods',
        path: '/foods'
    },
    {
        display: 'Cart',
        path: '/cart'
    },
    {
        display: 'Contact',
        path: '/contact'
    },
];

export default function Header() {
    const menuRef = useRef(null);
    const headerRef = useRef(null);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);

    const toggleMenu = () => menuRef.current.classList.toggle('show-menu');

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTo > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add("header-fix");
            }
            else {
                headerRef.current.classList.remove("header-fix");
            }
            return () => window.removeEventListener("scroll");
        })
    }, []);
    return (
        <header className='header' ref={headerRef}>
            <Container>
                <div className='nav-wrapper d-flex align-items-center justify-content-between'>
                    <div className='header-logo'>
                        <img src={logo} alt="logo" />
                        <h5>Pizza365</h5>
                    </div>

                    {/* Menu */}
                    <div className='navigation' ref={menuRef} onClick={toggleMenu}>
                        <div className='menu d-flex align-items-center gap-5'>
                            {nav_links.map((item, index) => (
                                <NavLink to={item.path} key={index}
                                    className={navClass => navClass.isActive ? 'active-menu link' : 'link'}
                                >
                                    {item.display}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    {/* Nav right icon */}
                    <div className='nav-right d-flex align-items-center gap-4'>
                        <span className='cart-icon'>
                            <i className="ri-shopping-cart-line"></i>
                            <span className='cart-badge'>{totalQuantity}</span>
                        </span>
                        <span className='user-icon'>
                            <Link className='link' to='/login'>
                                <i className="ri-user-line"></i>
                            </Link>
                        </span>
                        <span className='mobile-menu' onClick={toggleMenu}>
                            <i className="ri-menu-line"></i>
                        </span>
                    </div>
                </div>
            </Container>
        </header >
    )
}
