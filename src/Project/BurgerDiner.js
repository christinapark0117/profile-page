import React from "react";
import '../PageStyle/BurgerDiner.css'
import {Button, Carousel, ListGroup} from "react-bootstrap";
import BDLogin from "../Media/Burger Diner Login.png"
import BDDirections from "../Media/Burger Diner Direction.png"
import BDLevel from "../Media/Burger Diner Level.png"
import BDNextLevel from "../Media/Burger Diner Next Level.png"
import BDPlayAgain from "../Media/Burger Diner Play Again.png"
import {Link} from "react-router-dom";


const BurgerDiner = () => {

    return(
        <div class="eachProjectPage">


            <h3 className='pageTitle'>Burger Diner</h3>


            <Carousel indicators={false}>


                <Carousel.Item>
                    <img src={BDLogin} className="d-block w-100" alt="Bread Is Gold home page"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={BDDirections} className="d-block w-100" alt="Bread Is Gold home page"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={BDLevel} className="d-block w-100" alt="Bread Is Gold home page"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={BDNextLevel} className="d-block w-100" alt="Bread Is Gold home page"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={BDPlayAgain} className="d-block w-100" alt="Bread Is Gold home page"/>
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

            <div className='controlButtons'>


                <Link to='/project'>
                    <Button variant="outline-secondary">Back to Projects</Button>
                </Link>


                <Button variant="outline-secondary" href='https://drive.google.com/file/d/1xxQUMkuUTKDDt9FE3Wp_H_5M03JC9Wqg/view?usp=sharing'>Demo Video</Button>


            </div>

        </div>
    )
};

export default BurgerDiner