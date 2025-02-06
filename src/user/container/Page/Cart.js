import React from 'react';

function Cart(props) {
    return (
        <div>
            {/* Cart Start */}
            <div className="cart-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody className="align-middle">
                                        <tr>
                                            <td><a href="#"><img src="img/product-1.png" alt="Image" /></a></td>
                                            <td><a href="#">Product Name</a></td>
                                            <td>$22</td>
                                            <td>
                                                <div className="qty">
                                                    <button className="btn-minus"><i className="fa fa-minus" /></button>
                                                    <input type="text" defaultValue={1} />
                                                    <button className="btn-plus"><i className="fa fa-plus" /></button>
                                                </div>
                                            </td>
                                            <td>$22</td>
                                            <td><button><i className="fa fa-trash" /></button></td>
                                        </tr>
                                        <tr>
                                            <td><a href="#"><img src="img/product-2.png" alt="Image" /></a></td>
                                            <td><a href="#">Product Name</a></td>
                                            <td>$22</td>
                                            <td>
                                                <div className="qty">
                                                    <button className="btn-minus"><i className="fa fa-minus" /></button>
                                                    <input type="text" defaultValue={1} />
                                                    <button className="btn-plus"><i className="fa fa-plus" /></button>
                                                </div>
                                            </td>
                                            <td>$22</td>
                                            <td><button><i className="fa fa-trash" /></button></td>
                                        </tr>
                                        <tr>
                                            <td><a href="#"><img src="img/product-3.png" alt="Image" /></a></td>
                                            <td><a href="#">Product Name</a></td>
                                            <td>$22</td>
                                            <td>
                                                <div className="qty">
                                                    <button className="btn-minus"><i className="fa fa-minus" /></button>
                                                    <input type="text" defaultValue={1} />
                                                    <button className="btn-plus"><i className="fa fa-plus" /></button>
                                                </div>
                                            </td>
                                            <td>$22</td>
                                            <td><button><i className="fa fa-trash" /></button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="coupon">
                                <input type="text" placeholder="Coupon Code" />
                                <button>Apply Code</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cart-summary">
                                <div className="cart-content">
                                    <h3>Cart Summary</h3>
                                    <p>Sub Total<span>$22</span></p>
                                    <p>Shipping Cost<span>$1</span></p>
                                    <h4>Grand Total<span>$23</span></h4>
                                </div>
                                <div className="cart-btn">
                                    <button>Update Cart</button>
                                    <button>Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Cart End */}

          
        </div>
    );
}

export default Cart;