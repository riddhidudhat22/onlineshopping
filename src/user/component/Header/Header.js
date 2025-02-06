import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <div>
            {/* Top Header Start */}
            <div className="top-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <div className="logo">
                                <a href>
                                    <img src="img/logo.png" alt="Logo" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="search">
                                <input type="text" placeholder="Search" />
                                <button><i className="fa fa-search" /></button>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="user">
                                <div className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">My Account</a>
                                    <div className="dropdown-menu">
                                        <a href="#" className="dropdown-item">Login</a>
                                        <a href="#" className="dropdown-item">Register</a>
                                    </div>
                                </div>
                                <div className="cart">
                                    <i className="fa fa-cart-plus" />
                                    <span>(0)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Top Header End */}
            {/* Header Start */}
            <div className="header">
                <div className="container">
                    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                        <a href="#" className="navbar-brand">MENU</a>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav m-auto">
                                <NavLink to='/' className="nav-item nav-link active">Home</NavLink>
                                <NavLink to='/productlist' className="nav-item nav-link">Products</NavLink>
                                <NavLink to='/productdetail' className="dnav-item nav-link">Product Detail</NavLink>
                                <div className="nav-item dropdown">
                                    <NavLink to='page' className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</NavLink>
                                    <div className="dropdown-menu">
                                        < NavLink to='/cart' className="dropdown-item">Cart</NavLink>
                                        <NavLink to='/wishlist' className="dropdown-item">Wishlist</NavLink>
                                        <NavLink to='/login' className="dropdown-item">Login &amp; Register</NavLink>
                              
                                    </div>
                                </div>
                                <NavLink to='/contact' className="nav-item nav-link">Contact Us</NavLink>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* Header End */}
        </div>

    );
}

export default Header;