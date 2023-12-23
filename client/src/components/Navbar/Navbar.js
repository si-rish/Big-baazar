import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <div className='navbar'>
                <Link className='nav-link' to="/" >Home</Link>
                <Link className='nav-link' to="/blogs">Blogs</Link>
                <Link className='nav-link' to="/about">About</Link>
                <Link className='nav-link' to="/contact">Contact</Link>
                <Link className='nav-link' to="/my-orders">MyOrders</Link>

            </div>

        </div>
    )
}

export default Navbar