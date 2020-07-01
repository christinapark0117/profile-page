import React from "react";
import '../PageStyle/AllensCabinets.css'
import {Carousel, ListGroup} from "react-bootstrap";
import ACHome from "../Media/Card Image for Allen's Cabinet.png"
import ACAdminLogin from "../Media/Allen's Cabinets Admin Login Page.jpg"
import ACAdminGallery from "../Media/Allen's Cabinets Admin Gallery.jpg"
import ACAdminPostGallery from "../Media/Allen's Cabinets Gallery Post Form.jpg"
import ACGallery from "../Media/Allen's Cabinets Gallery.jpg"
import ACGalleryDetails from "../Media/Allen's Cabinets Gallery Project Details.jpg"
import ACAbout from "../Media/Allen's Cabinets About.jpg"
import ACContact from "../Media/Allen's Cabinets Contact.jpg"



const AllensCabinets = () => {

    return(
        <div id="eachProjectPage">


            <h3 className='pageTitle'>Allen's Cabinets Kitchen & Bath</h3>


            <Carousel indicators={false}>


                <Carousel.Item>
                    <img src={ACHome} className="d-block w-100" alt="Bread Is Gold home page"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={ACAdminLogin} className="d-block w-100" alt="Bread Is Gold home page"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={ACAdminGallery} className="d-block w-100" alt="Bread Is Gold home page"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={ACAdminPostGallery} className="d-block w-100" alt="Bread Is Gold home page"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={ACGallery} className="d-block w-100" alt="Bread Is Gold home page"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={ACGalleryDetails} className="d-block w-100" alt="Bread Is Gold home page"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={ACAbout} className="d-block w-100" alt="Bread Is Gold home page"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={ACContact} className="d-block w-100" alt="Bread Is Gold home page"/>
                </Carousel.Item>



            </Carousel>



            <div className='project-description'>

                <div className='frontend'>

                    <h5 className='pageTitle2'>Frontend</h5>

                    <ListGroup variant="flush" id='front'>
                        <ListGroup.Item>JavaScript & React</ListGroup.Item>
                        <ListGroup.Item>Custom CSS</ListGroup.Item>
                        <ListGroup.Item>Imported data by fetching to the backend</ListGroup.Item>
                    </ListGroup>

                </div>


                <div className='backend'>

                    <h5 className='pageTitle3'>Backend</h5>

                    <ListGroup variant="flush" id='back'>
                        <ListGroup.Item>Ruby on Rails</ListGroup.Item>
                        <ListGroup.Item>PostgreSQL</ListGroup.Item>
                        <ListGroup.Item>Ruby on Rails Mailer</ListGroup.Item>
                        <ListGroup.Item>Serialized RESTful API</ListGroup.Item>
                        <ListGroup.Item>MVC Pattern</ListGroup.Item>
                    </ListGroup>

                </div>

            </div>

        </div>
    )

};


export default AllensCabinets



