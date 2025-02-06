import React from 'react';
import Slider from 'react-slick';

function Home(props) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };


    const settingspro = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Show 4 products at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    };


    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="slide">
                    <img src="img/slider-1.jpg" alt="Slider 1" />
                </div>
                <div className="slide">
                    <img src="img/slider-2.jpg" alt="Slider 2" />
                </div>
                <div className="slide">
                    <img src="img/slider-3.jpg" alt="Slider 3" />
                </div>
            </Slider>



            {/* Feature Start*/}
            <div className="feature">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 feature-col">
                            <div className="feature-content">
                                <i className="fa fa-shield" />
                                <h2>Trusted Shopping</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 feature-col">
                            <div className="feature-content">
                                <i className="fa fa-shopping-bag" />
                                <h2>Quality Product</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 feature-col">
                            <div className="feature-content">
                                <i className="fa fa-truck" />
                                <h2>Worldwide Delivery</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 feature-col">
                            <div className="feature-content">
                                <i className="fa fa-phone" />
                                <h2>Telephone Support</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Feature End*/}

            <div>
                {/* Category Start*/}
                <div className="category">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="category-img">
                                    <img src="img/category-1.jpg" />
                                    <a className="category-name" href>
                                        <h2>Category Name</h2>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="category-img">
                                    <img src="img/category-3.jpg" />
                                    <a className="category-name" href>
                                        <h2>Category Name</h2>
                                    </a>
                                </div>
                                <div className="category-img">
                                    <img src="img/category-4.jpg" />
                                    <a className="category-name" href>
                                        <h2>Category Name</h2>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="category-img">
                                    <img src="img/category-2.jpg" />
                                    <a className="category-name" href>
                                        <h2>Category Name</h2>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Category End*/}
                {/* Featured Product Start */}
                <div className="featured-product">
                    <div className="container">
                        <div className="section-header">
                            <h3>Featured Product</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra at massa sit amet ultricies. Nullam consequat, mauris non interdum cursus
                            </p>
                        </div>
                        {/* <div className="row align-items-center product-slider product-slider-4">
                            <div className="col-lg-3">
                                <div className="product-item">
                                    <div className="product-image">
                                        <a href="product-detail.html">
                                            <img src="img/product-1.png" alt="Product Image" />
                                        </a>
                                        <div className="product-action">
                                            <a href="#"><i className="fa fa-cart-plus" /></a>
                                            <a href="#"><i className="fa fa-heart" /></a>
                                            <a href="#"><i className="fa fa-search" /></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="title"><a href="#">Phasellus Gravida</a></div>
                                        <div className="ratting">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </div>
                                        <div className="price">$22 <span>$25</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="product-item">
                                    <div className="product-image">
                                        <a href="product-detail.html">
                                            <img src="img/product-2.png" alt="Product Image" />
                                        </a>
                                        <div className="product-action">
                                            <a href="#"><i className="fa fa-cart-plus" /></a>
                                            <a href="#"><i className="fa fa-heart" /></a>
                                            <a href="#"><i className="fa fa-search" /></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="title"><a href="#">Phasellus Gravida</a></div>
                                        <div className="ratting">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </div>
                                        <div className="price">$22 <span>$25</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="product-item">
                                    <div className="product-image">
                                        <a href="product-detail.html">
                                            <img src="img/product-3.png" alt="Product Image" />
                                        </a>
                                        <div className="product-action">
                                            <a href="#"><i className="fa fa-cart-plus" /></a>
                                            <a href="#"><i className="fa fa-heart" /></a>
                                            <a href="#"><i className="fa fa-search" /></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="title"><a href="#">Phasellus Gravida</a></div>
                                        <div className="ratting">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </div>
                                        <div className="price">$22 <span>$25</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="product-item">
                                    <div className="product-image">
                                        <a href="product-detail.html">
                                            <img src="img/product-4.png" alt="Product Image" />
                                        </a>
                                        <div className="product-action">
                                            <a href="#"><i className="fa fa-cart-plus" /></a>
                                            <a href="#"><i className="fa fa-heart" /></a>
                                            <a href="#"><i className="fa fa-search" /></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="title"><a href="#">Phasellus Gravida</a></div>
                                        <div className="ratting">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </div>
                                        <div className="price">$22 <span>$25</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="product-item">
                                    <div className="product-image">
                                        <a href="product-detail.html">
                                            <img src="img/product-5.png" alt="Product Image" />
                                        </a>
                                        <div className="product-action">
                                            <a href="#"><i className="fa fa-cart-plus" /></a>
                                            <a href="#"><i className="fa fa-heart" /></a>
                                            <a href="#"><i className="fa fa-search" /></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="title"><a href="#">Phasellus Gravida</a></div>
                                        <div className="ratting">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </div>
                                        <div className="price">$22 <span>$25</span></div>
                                    </div>
                                </div>
                            </div>
                        </div> */}



                        <div className="slider-container">
                            <Slider {...settingspro}>
                                {/* Manually adding each product */}
                                <div className="product-item">
                                    <div className="product-image">
                                        <a href="product-detail.html"><img src="img/product-1.png" alt="Product 1" /></a>
                                        <div className="product-action">
                                            <a href="#"><i className="fa fa-cart-plus" /></a>
                                            <a href="#"><i className="fa fa-heart" /></a>
                                            <a href="#"><i className="fa fa-search" /></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="title"><a href="#">Phasellus Gravida</a></div>
                                        <div className="ratting">
                                            <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                                        </div>
                                        <div className="price">$22 <span>$25</span></div>
                                    </div>
                                </div>

                                <div className="product-item">
                                    <div className="product-image">
                                        <a href="product-detail.html"><img src="img/product-2.png" alt="Product 2" /></a>
                                        <div className="product-action">
                                            <a href="#"><i className="fa fa-cart-plus" /></a>
                                            <a href="#"><i className="fa fa-heart" /></a>
                                            <a href="#"><i className="fa fa-search" /></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="title"><a href="#">Phasellus Gravida</a></div>
                                        <div className="ratting">
                                            <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                                        </div>
                                        <div className="price">$22 <span>$25</span></div>
                                    </div>
                                </div>

                                <div className="product-item">
                                    <div className="product-image">
                                        <a href="product-detail.html"><img src="img/product-3.png" alt="Product 3" /></a>
                                        <div className="product-action">
                                            <a href="#"><i className="fa fa-cart-plus" /></a>
                                            <a href="#"><i className="fa fa-heart" /></a>
                                            <a href="#"><i className="fa fa-search" /></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="title"><a href="#">Phasellus Gravida</a></div>
                                        <div className="ratting">
                                            <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                                        </div>
                                        <div className="price">$22 <span>$25</span></div>
                                    </div>
                                </div>

                                <div className="product-item">
                                    <div className="product-image">
                                        <a href="product-detail.html"><img src="img/product-4.png" alt="Product 4" /></a>
                                        <div className="product-action">
                                            <a href="#"><i className="fa fa-cart-plus" /></a>
                                            <a href="#"><i className="fa fa-heart" /></a>
                                            <a href="#"><i className="fa fa-search" /></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="title"><a href="#">Phasellus Gravida</a></div>
                                        <div className="ratting">
                                            <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                                        </div>
                                        <div className="price">$22 <span>$25</span></div>
                                    </div>
                                </div>

                                <div className="product-item">
                                    <div className="product-image">
                                        <a href="product-detail.html"><img src="img/product-5.png" alt="Product 5" /></a>
                                        <div className="product-action">
                                            <a href="#"><i className="fa fa-cart-plus" /></a>
                                            <a href="#"><i className="fa fa-heart" /></a>
                                            <a href="#"><i className="fa fa-search" /></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="title"><a href="#">Phasellus Gravida</a></div>
                                        <div className="ratting">
                                            <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                                        </div>
                                        <div className="price">$22 <span>$25</span></div>
                                    </div>
                                </div>

                            </Slider>
                        </div>

                    </div>
                </div>
                {/* Featured Product End */}
                {/* Newsletter Start */}
                <div className="newsletter">
                    <div className="container">
                        <div className="section-header">
                            <h3>Subscribe Our Newsletter</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra at massa sit amet ultricies. Nullam consequat, mauris non interdum cursus
                            </p>
                        </div>
                        <div className="form">
                            <input type="email" defaultValue="Your email here" />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
                {/* Newsletter End */}
                {/* Recent Product Start */}
                <div className="recent-product">
                    <div className="container">
                        <div className="section-header">
                            <h3>Recent Product</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra at massa sit amet ultricies. Nullam consequat, mauris non interdum cursus
                            </p>
                        </div>

                        <div className="slider-container">
                            <Slider {...settingspro}>
                                {/* Manually adding each product */}
                                <div className="product-item">
                                    <div className="product-image">
                                        <a href="product-detail.html"><img src="img/product-1.png" alt="Product 1" /></a>
                                        <div className="product-action">
                                            <a href="#"><i className="fa fa-cart-plus" /></a>
                                            <a href="#"><i className="fa fa-heart" /></a>
                                            <a href="#"><i className="fa fa-search" /></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="title"><a href="#">Phasellus Gravida</a></div>
                                        <div className="ratting">
                                            <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                                        </div>
                                        <div className="price">$22 <span>$25</span></div>
                                    </div>
                                </div>

                                <div className="product-item">
                                    <div className="product-image">
                                        <a href="product-detail.html"><img src="img/product-2.png" alt="Product 2" /></a>
                                        <div className="product-action">
                                            <a href="#"><i className="fa fa-cart-plus" /></a>
                                            <a href="#"><i className="fa fa-heart" /></a>
                                            <a href="#"><i className="fa fa-search" /></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="title"><a href="#">Phasellus Gravida</a></div>
                                        <div className="ratting">
                                            <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                                        </div>
                                        <div className="price">$22 <span>$25</span></div>
                                    </div>
                                </div>

                                <div className="product-item">
                                    <div className="product-image">
                                        <a href="product-detail.html"><img src="img/product-3.png" alt="Product 3" /></a>
                                        <div className="product-action">
                                            <a href="#"><i className="fa fa-cart-plus" /></a>
                                            <a href="#"><i className="fa fa-heart" /></a>
                                            <a href="#"><i className="fa fa-search" /></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="title"><a href="#">Phasellus Gravida</a></div>
                                        <div className="ratting">
                                            <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                                        </div>
                                        <div className="price">$22 <span>$25</span></div>
                                    </div>
                                </div>

                                <div className="product-item">
                                    <div className="product-image">
                                        <a href="product-detail.html"><img src="img/product-4.png" alt="Product 4" /></a>
                                        <div className="product-action">
                                            <a href="#"><i className="fa fa-cart-plus" /></a>
                                            <a href="#"><i className="fa fa-heart" /></a>
                                            <a href="#"><i className="fa fa-search" /></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="title"><a href="#">Phasellus Gravida</a></div>
                                        <div className="ratting">
                                            <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                                        </div>
                                        <div className="price">$22 <span>$25</span></div>
                                    </div>
                                </div>

                                <div className="product-item">
                                    <div className="product-image">
                                        <a href="product-detail.html"><img src="img/product-5.png" alt="Product 5" /></a>
                                        <div className="product-action">
                                            <a href="#"><i className="fa fa-cart-plus" /></a>
                                            <a href="#"><i className="fa fa-heart" /></a>
                                            <a href="#"><i className="fa fa-search" /></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="title"><a href="#">Phasellus Gravida</a></div>
                                        <div className="ratting">
                                            <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                                        </div>
                                        <div className="price">$22 <span>$25</span></div>
                                    </div>
                                </div>

                            </Slider>
                        </div>

                        {/* <div className="row align-items-center product-slider product-slider-4">
                            <div className="col-lg-3">
                                <div className="product-item">
                                    <div className="product-image">
                                        <a href="product-detail.html">
                                            <img src="img/product-2.png" alt="Product Image" />
                                        </a>
                                        <div className="product-action">
                                            <a href="#"><i className="fa fa-cart-plus" /></a>
                                            <a href="#"><i className="fa fa-heart" /></a>
                                            <a href="#"><i className="fa fa-search" /></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="title"><a href="#">Phasellus Gravida</a></div>
                                        <div className="ratting">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </div>
                                        <div className="price">$22 <span>$25</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="product-item">
                                    <div className="product-image">
                                        <a href="product-detail.html">
                                            <img src="img/product-4.png" alt="Product Image" />
                                        </a>
                                        <div className="product-action">
                                            <a href="#"><i className="fa fa-cart-plus" /></a>
                                            <a href="#"><i className="fa fa-heart" /></a>
                                            <a href="#"><i className="fa fa-search" /></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="title"><a href="#">Phasellus Gravida</a></div>
                                        <div className="ratting">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </div>
                                        <div className="price">$22 <span>$25</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="product-item">
                                    <div className="product-image">
                                        <a href="product-detail.html">
                                            <img src="img/product-6.png" alt="Product Image" />
                                        </a>
                                        <div className="product-action">
                                            <a href="#"><i className="fa fa-cart-plus" /></a>
                                            <a href="#"><i className="fa fa-heart" /></a>
                                            <a href="#"><i className="fa fa-search" /></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="title"><a href="#">Phasellus Gravida</a></div>
                                        <div className="ratting">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </div>
                                        <div className="price">$22 <span>$25</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="product-item">
                                    <div className="product-image">
                                        <a href="product-detail.html">
                                            <img src="img/product-8.png" alt="Product Image" />
                                        </a>
                                        <div className="product-action">
                                            <a href="#"><i className="fa fa-cart-plus" /></a>
                                            <a href="#"><i className="fa fa-heart" /></a>
                                            <a href="#"><i className="fa fa-search" /></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="title"><a href="#">Phasellus Gravida</a></div>
                                        <div className="ratting">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </div>
                                        <div className="price">$22 <span>$25</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="product-item">
                                    <div className="product-image">
                                        <a href="product-detail.html">
                                            <img src="img/product-9.png" alt="Product Image" />
                                        </a>
                                        <div className="product-action">
                                            <a href="#"><i className="fa fa-cart-plus" /></a>
                                            <a href="#"><i className="fa fa-heart" /></a>
                                            <a href="#"><i className="fa fa-search" /></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="title"><a href="#">Phasellus Gravida</a></div>
                                        <div className="ratting">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </div>
                                        <div className="price">$22 <span>$25</span></div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                {/* Recent Product End */}
            </div>

        </div>
    );
}

export default Home;