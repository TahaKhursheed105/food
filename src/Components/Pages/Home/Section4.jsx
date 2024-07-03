import React from 'react'
import { Container, Row, Col, Image, } from 'react-bootstrap'
import PromotionImage from "../../../assets/promotion/pro.png";

const Section4 = () => {
  return (
   <>
    <section className='promotion_section'>
        <Container>
            <Row className='align-items-center'>
                <Col lg={6} className='text-center mb-5 mb-lg-0'>
                    <img src={PromotionImage} className="img-fluid" alt='Promotion'/>
                </Col>

                <Col lg={6} className='px-5'>
                    <h2>Nothing brings people together like a good burger</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore temporibus iure, quae, ut totam est reprehenderit distinctio voluptas omnis tempore provident dolorem. Fuga, quidem dolor?Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <ul>
                        <li>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nemo mollitia eos aspernatur dicta labore dolor quod natus necessitatibus est!
                            </p>
                        </li>
                        <li>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, distinctio!
                            </p>
                        </li>
                        <li>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, distinctio! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, voluptates.
                            </p>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </section>

    {/* BG ParaLLex Scroll */}

    <section className='bg_parallax_scroll'>
    
    </section>
   </>
  )
}

export default Section4
