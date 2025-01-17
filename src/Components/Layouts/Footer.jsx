import React, {useState , useEffect} from 'react'
import { Container, Row, Col, Carousel,Icons } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function Footer (){
  // Scroll State
  const [isVisible, setIsVisible] = useState(false);
  const scrollTop = () => {
    window.scrollTo({
      top:0,
      behavior: "smooth",
    });
  };


  const listenToScroll = () => {
    let heightToHidden = 250;
    const windowScroll = 
    document.body.scrollTop || document.documentElement.scrollTop; 

    windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
  };


useEffect(() =>{
  window.addEventListener("scroll" , listenToScroll);
});

  return (
    <>
        <footer>
      <Container>
 <Row className='mb-3'>
<Col sm={6} lg={3} className='mb-4 mb-lg-0'>
  <div className='text-center'>
    <h5>
      Location
    </h5>
    <p>5505 Waterford District</p>
    <p>dr, Miamim FL 33126</p>
     <p>United States</p>
  </div>
</Col>
<Col sm={6} lg={3} className='mb-4 mb-lg-0'>
  <div className='text-center'>
    <h5>
      Working Hours
    </h5>
    <p>Mon-Fri: 9:00AM - 10:00PM</p>
    <p>Saturday: 10:00AM - 8:30PM</p>
     <p>Sunday: 12:00PM - 5:00PM</p>
  </div>
</Col>
<Col sm={6} lg={3} className='mb-4 mb-lg-0'>
  <div className='text-center'>
    <h5>
      Order Now
    </h5>
    <p>Lorem ipsum dolor sit amet.</p>
    <p><Link to="tel:999-888-7777" className='caliing'>999-888-7777</Link></p>
  </div>
</Col>
<Col sm={6} lg={3} className='mb-4 mb-lg-0'>
  <div className='text-center'>
    <h5>
      Follow Us
    </h5>
    <p>Lorem ipsum dolor sit amet.</p>
    <ul className='list-unstyled text-center mt-2 gap-4 d-flex justify-content-center align-content-center'>
      <li>
        <Link to="/">
          <i className='bi bi-facebook'></i>
        </Link>
      </li>
      <li>
        <Link to="/">
          <i className='bi bi-twitter'></i>
        </Link>
      </li>
      <li>
        <Link to="/">
          <i className='bi bi-instagram'></i>
        </Link>
      </li>
      <li>
        <Link to="/">
          <i className='bi bi-youtube'></i>
        </Link>
      </li>
    </ul>
  </div>
</Col>
 </Row>

 <Row className='copy_right'>

  <Col>
  <div>
    <ul className='list-unstyled text-center mb-0'>

    <li>
        <Link to="/">
        &#169; 2023 <span>TahaKhursheed</span> All Rights Reserved
        </Link>
      </li>
    <li>
        <Link to="/">
       About Us
        </Link>
      </li>
    <li>
        <Link to="/">
       Terms of Use
        </Link>
      </li>
    <li>
        <Link to="/">
          Privacy Policy
        </Link>
      </li>
    </ul>
  </div>
  
  </Col>
 </Row>



      </Container>
    </footer>

  {/* Scroll To Top */}



  {isVisible && (
  <div className='scroll_top' onClick={scrollTop}>
    <i class="bi bi-arrow-up" ></i>
  </div>
)}
    </>



  )
}

export default Footer
