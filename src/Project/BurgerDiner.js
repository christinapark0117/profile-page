import React from "react";
import '../PageStyle/BurgerDiner.css'
import {Carousel, ListGroup} from "react-bootstrap";
import BDDirections from "../Media/Card Img for Burger Diner.png"


const BurgerDiner = () => {

    return(
        <div class="eachProjectPage">


            <h3 className='pageTitle'>Burger Diner</h3>


            <Carousel indicators={false}>


                <Carousel.Item>
                    <img src={BDDirections} className="d-block w-100" alt="Bread Is Gold home page"/>
                </Carousel.Item>


            </Carousel>



            <div className='project-description'>

                <div className='frontend'>

                    <h5 className='pageTitle2'>Frontend</h5>

                    <ListGroup variant="flush" id='front'>
                        <ListGroup.Item>JavaScript (DOM Manipulation)</ListGroup.Item>
                        <ListGroup.Item>Semantic UI + Custom CSS</ListGroup.Item>
                        <ListGroup.Item>Imported data by fetching to the backend</ListGroup.Item>
                    </ListGroup>

                </div>


                <div className='backend'>

                    <h5 className='pageTitle3'>Backend</h5>

                    <ListGroup variant="flush" id='back'>
                        <ListGroup.Item>Ruby on Rails</ListGroup.Item>
                        <ListGroup.Item>SQLite3</ListGroup.Item>
                        <ListGroup.Item>Serialized RESTful API</ListGroup.Item>
                        <ListGroup.Item>MVC Pattern</ListGroup.Item>
                    </ListGroup>

                </div>

            </div>

        </div>
    )
};

export default BurgerDiner