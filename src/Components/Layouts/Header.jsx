import React, {useState } from 'react'
import "../../styles/HeaderStyle.css";
import { Container, Nav, Navbar , NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';

import Logo from "../../assets/logo/logo.png"

const Header = () => {
  const [nav , setNav] = useState(false);

    // Scroll Navbar
    const ChangeValueOnScroll = () => {
      const scrollValue = document?.documentElement.scrollTop;
      scrollValue >100 ? setNav(true) : setNav(false);
    };

    window.addEventListener("scroll",ChangeValueOnScroll);


  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className= {`${nav === true ? "sticky" : ""}`}>
        <Container>
          <Navbar.Brand href="#home">
            <Link className='logo'>
              <Image src={Logo} fluid />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto position-relative">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/menu">Our Menu</Nav.Link>
              <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/cart">
                <i className="bi bi-bag fs-5 cart"></i>
                <em className='roundpoint'>2</em>
              </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>


    </header>
  )
}

export default Header
