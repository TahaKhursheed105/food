import React from 'react';
import { Container, Row, Col, Carousel, } from 'react-bootstrap';
import User1 from "../../../assets/blog/review-1.jpg"
import User2 from "../../../assets/blog/review-2.jpg"
import User3 from "../../../assets/blog/review-3.jpg"
import User4 from "../../../assets/blog/review-5.jpg"


const Section6 = () => {
  return (
 <section className='blog_section'>
    <Container>
        <Row>
        <Carousel>
                            <Carousel.Item>

                                <Carousel.Caption>
                                <div className='user_img'>
                                            <img src={User1} className='img-fluid ' alt='User-1' />
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ipsum, impedit officiis sapiente maxime nostrum sint consequatur aliquam?
                                        </p>
                                        <div className='item_rating mb-2'>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                        </div>
                                        <h5>BY AMELTE NEWLOVE</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>

                                <Carousel.Caption>
                                <div className='user_img'>
                                            <img src={User2} className='img-fluid ' alt='User-2' />
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ipsum, impedit officiis sapiente maxime nostrum sint consequatur aliquam?
                                        </p>
                                        <div className='item_rating mb-2'>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                        </div>
                                        <h5>BY AMELTE NEWLOVE</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>

                                <Carousel.Caption>
                                <div className='user_img'>
                                            <img src={User3} className='img-fluid ' alt='User-3' />
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ipsum, impedit officiis sapiente maxime nostrum sint consequatur aliquam?
                                        </p>
                                        <div className='item_rating mb-2'>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                        </div>
                                        <h5>BY AMELTE NEWLOVE</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>

                                <Carousel.Caption>
                                <div className='user_img'>
                                            <img src={User4} className='img-fluid ' alt='User-4' />
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ipsum, impedit officiis sapiente maxime nostrum sint consequatur aliquam?
                                        </p>
                                        <div className='item_rating mb-2'>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                        </div>
                                        <h5>BY AMELTE NEWLOVE</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
        </Row>
    </Container>
 </section>
  )
}

export default Section6
