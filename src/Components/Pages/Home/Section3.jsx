import React from 'react'
import { Container, Row, Col, Image, } from 'react-bootstrap'
import "../../../styles/Homestyle.css"
import Image1 from "../../../assets/menu/burger-11.jpg";
import Image2 from "../../../assets/menu/burger-12.jpg";
import Image3 from "../../../assets/menu/burger-13.jpg";
import Image4 from "../../../assets/menu/burger-14.jpg";
import Image5 from "../../../assets/menu/burger-15.jpg";
import Image6 from "../../../assets/menu/burger-16.jpg";
import Image7 from "../../../assets/menu/burger-17.jpg";
import Image8 from "../../../assets/menu/burger-18.jpg";
import Cards from '../../Layouts/Cards';
import { Link } from 'react-router-dom';


// Mock Data Cards
const mockData = [
    {
        id: "0001",
        image: Image1,
        title: "Crispy Chicken",
        paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
        rating: 5,
        price: 99.15,

    },
    {
        id: "0002",
        image: Image2,
        title: "Crispy Chicken",
        paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
        rating: 5,
        price: 99.15,

    },
    {
        id: "0003",
        image: Image3,
        title: "Ultimate Bacon",
        paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
        rating: 5,
        price: 99.15,

    },
    {
        id: "0004",
        image: Image4,
        title: "Vegan Burger",
        paragraph: "House patty,cheddar cheese,bacon,onion,mustard",
        rating: 5,
        price: 99.25,

    },
    {
        id: "0005",
        image: Image5,
        title: "Double Burger",
        paragraph: "2 patties, cheddar cheese,mustard,pickles,tomatos",
        rating: 3.0,
        price: 59.25,

    },
    {
        id: "0006",
        image: Image6,
        title: "Crispy Chicken",
        paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
        rating: 5,
        price: 99.15,

    },
    {
        id: "0007",
        image: Image7,
        title: "Smokey House",
        paragraph: "patty,cheddar cheese, onion,lettuce,tomatoes,pickles",
        rating: 2.5,
        price: 99.15,

    },
    {
        id: "0008",
        image: Image8,
        title: "Classic burger",
        paragraph: "cheddar cheese,kitchup,mustard,pickles,onion",
        rating: 2.0,
        price: 89.12,

    },
// Add More Mock Data objects as Needed

];
//  Rating Logical Data 
const renderRatingIcons = (rating) => {
    const stars=[];

    for(let i=0; i<5; i++){
        if(rating > 0.5){
            stars.push(<i key={i} className='bi bi-star-fill'></i>);
            rating--
        }else if (rating > 0 && rating < 1){
            stars.push(<i key={"half"} className='bi bi-star-half'></i>);
            rating--
        }else{
            stars.push(<i key={`empty${i}`} className='bi bi-star'></i>);
        }
    } 
    return stars;
};

const Section3 = () => {
    
    return (

        <section className='menu_section'>
            <Container>
                <Row>
                    <Col lg={{ span: 8, offset: 2 }} className='text-center mb-5'>
                        <h2>
                            OUR CRAZY BURGERS
                        </h2>
                        <p className='para'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure earum nam aspernatur veniam explicabo, velit ea hic laborum animi delectus.
                        </p>

                    </Col>

                </Row>

                <Row>
                    {mockData.map((cardData, index) => (
                        <Cards

                            key={index}
                            image={cardData.image}
                            rating={cardData.rating}
                            title={cardData.title}
                            paragraph={cardData.paragraph}
                            price={cardData.price}
                           renderRatingIcons={renderRatingIcons}
                        />
                    ))}
                </Row>

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


        </section>
    )
}

export default Section3
