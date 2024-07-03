import React from 'react'
import Layout from '../Layouts/Layout'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../../styles/BlogStyle.css"

const Blog = () => {
  return (
    <>
      <Layout>
         <Container className='blog_section1'>
         <Row className='pt-5'>
                    <Col sm={6} lg={5}>
                        <div className='ads_box ads_img1 b-5 mb-md-0'>
                            <h4 className='mb-0'>
                                GET YOUR FREE
                            </h4>
                            <h5>
                                CHEESE FRIES
                            </h5>

                            <Link to="/" className='btn btn_red px-4 rounded-0'>
                                Learn More
                            </Link>
                        </div>
                    </Col>
                    <Col sm={6} lg={7}>
                        <div className='ads_box ads_img2'>
                            <h4 className='mb-0'>
                                GET YOUR FREE
                            </h4>
                            <h5>
                                CHEESE FRIES
                            </h5>

                            <Link to="/" className='btn btn_red px-4 rounded-0'>
                                Learn More
                            </Link>
                        </div>
                    </Col>

                </Row>

         </Container>

      </Layout>
    </>
  )
}

export default Blog
