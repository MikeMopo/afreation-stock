// Header.js
import React from "react";
import "../../assets/assets/css/main.css";
import "../../assets/assets/css/bootstrap.min.css";

const Header = () => {
    return (
        <header className="header-section header__sectiontheme">
            <div className="container">
                <div className="header-wrapper">
                    <div className="logo-menu">
                        <a href="/Stock-Images" className="logo">
                            <img src="../../assets/logo-5.png" alt="logo" />
                        </a>
                    </div>
                    <div className="menu__components d-flex align-content-center">
                        <ul className="main-menu">
                            <li>
                                <a href="#" className="fz-24">
                                    Home
                                    <i className="fas fa-chevron-down"></i>
                                </a>
                                <ul className="sub-menu home__sub">
                                    <li className="custom__width">
                                            <li><a href="/index.html">Photography Marketplace</a></li>
                                        <li></li>

                                            <li><a href="/index-3.html">Video Marketplace</a></li>

                                    </li>
                                </ul>
                            </li>
                            <li><a href="/about.html">About Us</a></li>
                            <li>
                                <a href="#">
                                    Category
                                    <i className="fas fa-chevron-down"></i>
                                </a>
                                <ul className="sub-menu">
                                    <li><a href="/categoris-images.html">Afreation Photo</a></li>
                                    <li><a href="/natural-video.html">Afreation Video</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">
                                    Pages
                                    <i className="fas fa-chevron-down"></i>
                                </a>
                                <ul className="sub-menu">
                                    <li><a href="/about.html">About Us</a></li>
                                    <li><a href="/author-page.html">Author</a></li>
                                    <li><a href="/pricing.html">Pricing</a></li>
                                    <li><a href="/categoris-images.html">Categories</a></li>
                                    <li><a href="/photo-details.html">Photo Details</a></li>
                                    <li><a href="/video-details.html">Video Details</a></li>
                                    <li><a href="/shop.html">Shop</a></li>
                                    <li><a href="/shop-details.html">Shop Details</a></li>
                                    <li><a href="/login.html">LogIn</a></li>
                                    <li><a href="/create-account.html">Account</a></li>
                                    <li><a href="/help.html">Help</a></li>
                                </ul>
                            </li>
                            <li><a href="/contact.html">Contact Us</a></li>
                        </ul>
                        <div className="d-flex shop__area align-items-center">
                            <a href="/shop.html" className="shop__icon">
                                <i className="material-symbols-outlined aseetext">shopping_cart</i>
                            </a>
                            <a href="/login.html" className="d-flex fw-500 cmn--btn outline__btn align-items-center gap-2">
                                <span>Sign in</span>
                                <span>
                  <i className="material-symbols-outlined fz-18 mt-1">logout</i>
                </span>
                            </a>
                            <div className="header-bar d-lg-none">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
