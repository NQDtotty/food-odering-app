import React, { useRef } from 'react'
import { Container } from 'reactstrap'
import logo from '../../assets/images/res-logo.png'
import { NavLink, Link } from 'react-router-dom'
import '../../styles/header.css'

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
]

export default function Header() {
    const menuRef = useRef(null);
    const toggleMenu = () => menuRef.current.classList.toggle('show-menu');
    return (
        <header className='header'>
            <Container>
                <div className='nav-wrapper d-flex align-items-center justify-content-between'>
                    <div className='logo'>
                        <img src={logo} alt="logo" />
                        <h5>Tasty Food</h5>
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
                            <span className='cart-badge'>2</span>
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
