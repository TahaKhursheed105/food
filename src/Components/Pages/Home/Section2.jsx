import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pizza from '../../../assets/about/pizza.png';
import Salad from '../../../assets/about/salad.png';
import Delivery from '../../../assets/about/delivery-bike.png';
import '../../../styles/Homestyle.css'


// Mock Data Cards 
const mockData = [
    {
        image: Pizza,
        title: "Original",
        paragraph: 'porta semper lacas cursus,feugiat primis ultice a ligula risus auctor lorem dsnnd nsjnj anja'
    },
    {
        image: Salad,
        title: "Quality Foods",
        paragraph: 'porta semper lacas cursus,feugiat primis ultice a ligula risus auctor lorem dsnnd nsjnj anja'
    },
    {
        image: Delivery,
        title: "Original",
        paragraph: 'porta semper lacas cursus,feugiat primis ultice a ligula risus auctor lorem dsnnd nsjnj anja'
    },

]

const Section2 = () => {


    return (
        <>
            <section className='about_section '>
                <Container>
                    <Row>
                        <Col lg={{ span: 8, offset: 2 }} className='text-center'>
                            <h2>
                                The burger tastes better when you eat it with your family
                            </h2>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis amet quae consequuntur voluptas officia enim sint quidem ut voluptate perspiciatis et, doloribus a labore consectetur!
                            </p>
                            <Link to="/" className='btn btn_red'>
                                Explore Full Menu
                            </Link>



                        </Col>
                    </Row>

                </Container>

            </section>

            <section className='about_wrapper'>
                <Container>

                    <Row className="d-flex justify-content-md-center">
                        {mockData.map((cardData, index) => (
                            <Col md={6} lg={4} className='mb-4 mb-md-0' key={index}>
                                <div className='about_box text-center'>

                                    <div className='about_icon'>
                                        <Image src={cardData.image} fluid />
                                    </div>
                                    <h4>
                                        {cardData.title}
                                    </h4>
                                    <p>
                                        {cardData.paragraph}
                                    </p>
                                </div>
                            </Col>
                        ))}

                    </Row>
                </Container>

            </section>


        </>

    )
}

export default Section2
