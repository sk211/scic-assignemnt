import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Slider from '../Slider/Slider';
import './Home.css';
import Product from './../Products/Product/Product';
const products = [
    {
        id: '01',
        img: 'https://ninetheme.com/themes/venam/v1/wp-content/uploads/2021/06/el_img16_hover-450x450.png',
        title: 'Baby Boy Teady Bear',
        price: 25
    },
    {
        id: '02',
        img: 'https://i.ibb.co/qdwZ7GK/photo-1602734846297-9299fc2d4703-removebg-preview.png',
        title: 'Baby Boy Teady Bear',
        price: 25
    },
    {
        id: '03',
        img: 'https://i.ibb.co/qdwZ7GK/photo-1602734846297-9299fc2d4703-removebg-preview.png',
        title: 'Baby Boy Teady Bear',
        price: 25
    },
    {
        id: '04',
        img: 'https://i.ibb.co/qdwZ7GK/photo-1602734846297-9299fc2d4703-removebg-preview.png',
        title: 'Baby Boy Teady Bear',
        price: 25
    },
]


export default function Home() {
    return (
        <div>
            <Slider />
            <div className="container py-5">
                <h3 className="mb-3">Our Top Collection</h3>
                <p className="fw-light">Browse the collection of top products</p>
                <Row xs={1} md={4} className="g-4">
                    {products?.map(product => <Col key={product.id}>
                        <Card className="productBox border-0 text-start">
                            <Card.Img variant="top" src={product.img} className="products-img border" style={{ height: '250px', width: '100% ' }} />
                            <Card.Body>
                                <Card.Title className="product-title fw-light">{product.title}</Card.Title>
                                <div className="product-rating">
                                    <div>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star empty"></i>

                                    </div>
                                </div>
                                <p>  <del>$30.00</del> <span className="fw-bold"> $ {product.price}</span></p>
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                        <div className="circle"></div>
                                        <div className="circle1"></div>
                                        <div className="circle2"></div>
                                        <div className="circle3"></div>
                                    </div>
                                    <div className="d-flex ">
                                        <div className="product-size">S</div>
                                        <div className="product-size">M</div>
                                        <div className="product-size">X</div>
                                        <div className="product-size">XL</div>
                                    </div>
                                </div>
                                <div className="BuyBtn-group d-flex mt-3">
                                    <a href="#" className="group"><i class="fas fa-shopping-cart"></i><span className="tooltip-text">AddToCart</span></a>
                                    <a href="" className="group"><i class="far fa-heart"></i><span className='tooltip-text'>WhisList</span></a>
                                    <a href="" className="group"><i class="fas fa-exchange-alt"></i><span className='tooltip-text'>Compare</span></a>
                                    <a href="" className="group"><i class="far fa-eye"></i><span className='tooltip-text'>Quick View</span></a>
                                </div>


                            </Card.Body>

                        </Card>
                    </Col>)}

                </Row>
            </div>
            <Product />
        </div>
    )
}
