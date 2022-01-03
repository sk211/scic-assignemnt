import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import './Cart.css';

export default function Cart() {
    const loginSubmit = e =>{
        e.preventDefault();
    }
    return (
        <div className='container mt-5'>
            <div className="row g-4">
                <div className="col-md-8 ">
                    <div className='text-start p-5 border mb-4'>
                    <h3 className='mb-3'>New Customer</h3>
                    <h5 className='mb-3'>Checkout Options</h5>
                    <div className="d-flex mb-3">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label className="form-check-label" for="flexRadioDefault1">
                            Register Account
                        </label>
                        </div>
                        <div className="form-check px-5">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                        <label className="form-check-label" for="flexRadioDefault2">
                            Guest Account
                        </label>
                        </div>
                    </div>
                        <p>By creating an account you will be able to shop faster, be up to <br /> date on an order's status, and keep track of the orders you <br /> have previously made</p>

                        <Link to="/cart" className="check-button "><Button className="my-3 px-4" variant="primary">CONTINUE</Button></Link>

                         <h3 className="mb-3">Returning Customer</h3>

                         <Form onSubmit={loginSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                   
                    <Button className="check-button px-5" variant="primary" type="submit">
                       LOGIN
                    </Button>
                    </Form>

                    </div>

                    <div className='text-start p-5 border'>
                        <h3 className="mb-3">Billing Details</h3>
                        <h5 className="mb-3">Checkout Options</h5>
                        <div className="d-flex mb-3">
                        <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label className="form-check-label" for="flexRadioDefault1">
                            I want to use an existing address
                        </label>
                        </div>
                        <div className="form-check px-5">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                        <label className="form-check-label" for="flexRadioDefault2">
                           I want to use new address
                        </label>
                        </div>
                        </div>
                        <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your first name" />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your last name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Address Line 1" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>City</Form.Label>
                        <Form.Select aria-label="Default select example" >
                        <option>City</option>
                        <option value="1">City1</option>
                        <option value="2">City2</option>
                        <option value="3">City3</option>
                        <option value="3">City4</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Country</Form.Label>
                        <Form.Select aria-label="Default select example">
                        <option>Country</option>
                        <option value="1">Country1</option>
                        <option value="2">Country2</option>
                        <option value="3">Country3</option>
                        <option value="3">Country4</option>
                        <option value="3">Country5</option>
                        </Form.Select>
                    </Form.Group>
    
                    </Form>

                    </div>
                    <Button className="m-3 px-4" variant="primary" type="submit">
                     PLACE ORDER
                    </Button>

                   
                </div>
                <div className="col-md-4 ">
                    <div className="text-start border p-3">
                        <h5 className=""> Summary</h5>
                            <p className="mb-0">Sub-total  <span className="px-5">$ 80.00</span></p>
                            
                            <p className="mb-0">Delivery charge  <span className="px-4 ">$ 00</span> </p>
                            
                            <p className="mb-0">Coupan Discount : 00</p>
                            <hr className="my-2" />
                            
                            <p className="mb-0 mb-5">Total Amount  <span className="px-5 ">$ 80.00</span> </p>

                             {/* product  */}

                             <div className='d-flex'>
                                 <div className="w-50">
                                        <img className="w-50 product-img" src="https://i.ibb.co/z4SBgrY/photo-1602734846297-9299fc2d4703.jpg" alt="" />
                                 </div>
                                 <div className='w-50'>
                                    <h6>Baby Toy Teady Bear</h6>
                                    <h6> Price: $ 70.00</h6>
                                    <div className="course-rating">
                            <div>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star empty"></i>
                                
                            </div>
                            </div>
                                    <div className='d-flex'>
                                        <div className="toy-product"></div>
                                        <div className="toy-product"></div>
                                        <div className="toy-product"></div>
                                        <div className="toy-product"></div>
                                    </div>
                                 </div>
                             </div>
                        
                            
                    </div>
                       

                    {/* free shiping payment system   */}

                    <div className='border mt-5 text-start p-3'>
                            <h3 className="mb-2">Delivery Method</h3>
                            <p className="mb-2">Please select the preferred payment method <br /> to use on this order.</p>
                            <div className="d-flex">
                            <div className="form-check mb-3">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                            <label className="form-check-label" for="flexRadioDefault2">
                                Rate $0.00
                            </label>
                    
                    </div>
                    <div className="form-check mb-3 px-5">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                            <label className="form-check-label" for="flexRadioDefault2">
                                Rate $0.00
                            </label>
                    
                    </div>
                            </div>
                    <div className="form-group mb-2">
                        <label htmlFor="message">Add Comments About Your Order </label>
                        <textarea  name="message" cols="10" rows="4"  className="form-control" placeholder="Type Message" required></textarea>
                    </div>
               

                    </div>

                    {/* Cash on Delivery system payment  */}

                    <div className='border mt-5 text-start p-3'>
                            <h3 className="mb-2">Payment Method</h3>
                            <p className="mb-2">Please select the preferred payment method <br /> to use on this order.</p>
                            <div className="form-check mb-3">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                    <label className="form-check-label" for="flexRadioDefault2">
                        Cash On Delivery
                    </label>
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="message">Add Comments About Your Order </label>
                        <textarea  name="message" cols="10" rows="4"  className="form-control" placeholder="Type Message" required></textarea>
                    </div>
                <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" for="flexCheckDefault">
                    I have read and agree to The Terms and Technologies
                </label>
                </div>

                    </div>


                    {/* card system payment   */}
                    <div className="border mt-5 text-start p-3">
                        <h3>Payment Method</h3>
                    <div>
                        <img src="https://web.programming-hero.com/static/media/ssl-commerce.1d268dce.png" alt="" className="w-100 mx-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
