import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Burger from '../../../assets/hero/hero-2.png'
import "../../../styles/Homestyle.css"
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <section className='hero_section'>
      <Container>
        <Row>
          <Col lg={7} className='mb-5 mb-lg-0'>
            <div className='position-relative'>
              <Image src={Burger} fluid />
              <div className='price_badge'>

                <div className='badge_text'>
                  <h4 className='h4_xs'>Only</h4>
                  <h4 className='h3_lg'>$6.99</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className='hero_text text-center'>
              <h1 className='text-white fst-italic'>New Burger</h1>
              <h2 className='text-white fst-italic'>With Onion</h2>
              <p className='text-white pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda est delectus, accusantium maxime ex aliquid cum soluta, libero harum praesentium, error modi incidunt!
              </p>
              <Link to="/" className='btn order_now'>Order Now</Link>
            </div>
          </Col>

        </Row>






      </Container>


    </section>
  )
}

export default Section1
