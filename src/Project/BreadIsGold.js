import React from "react";
import '../PageStyle/BreadIsGold.css';
import {Link} from "react-router-dom";
import BIGHome from '../Media/Bread is Gold Home.jpg';
import BIGWelcome from '../Media/Bread Is Gold Welcome Page.jpg'
import BIGMyRecipes from '../Media/Bread Is Gold My Recipes.jpg'
import BIGRecipeDetail from '../Media/Bread Is Gold Recipe Detail Page.jpg'
import BIGRecipesList from '../Media/Bread Is Gold Recipes List.jpg'
import BIGChefList from '../Media/Bread Is Gold Chefs Page.png'
import {Carousel, ListGroup, Button} from 'react-bootstrap';


const BreadIsGold = () => {

    return(
        <div id="eachProjectPage">


            <h3 className='pageTitle'>Bread Is Gold</h3>


                <Carousel indicators={false}>


                    <Carousel.Item>
                        <img src={BIGHome} className="d-block w-100" alt="Bread Is Gold home page"/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={BIGWelcome} className="d-block w-100" alt="Bread Is Gold welcome"/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={BIGMyRecipes} className="d-block w-100" alt="Bread Is Gold welcome"/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={BIGRecipeDetail} className="d-block w-100" alt="Bread Is Gold welcome"/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={BIGRecipesList} className="d-block w-100" alt="Bread Is Gold welcome"/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={BIGChefList} className="d-block w-100" alt="Bread Is Gold welcome"/>
                    </Carousel.Item>


                </Carousel>



            <div className='project-description'>

                    <div className='frontend'>

                        <h5 className='pageTitle2'>Frontend</h5>

                        <ListGroup variant="flush" id='front'>
                            <ListGroup.Item>JavaScript & React</ListGroup.Item>
                            <ListGroup.Item>Custom CSS</ListGroup.Item>
                            <ListGroup.Item>Imported data by fetching to the backend</ListGroup.Item>
                            <ListGroup.Item>Includes search function</ListGroup.Item>
                        </ListGroup>

                    </div>


                    <div className='backend'>

                        <h5 className='pageTitle3'>Backend</h5>

                        <ListGroup variant="flush" id='back'>
                            <ListGroup.Item>Ruby on Rails</ListGroup.Item>
                            <ListGroup.Item>PostgreSQL</ListGroup.Item>
                            <ListGroup.Item>Serialized RESTful API</ListGroup.Item>
                            <ListGroup.Item>MVC Pattern</ListGroup.Item>
                        </ListGroup>

                    </div>

            </div>

            <div className='controlButtons'>


                <Link to='/project'>
                    <Button variant="outline-secondary">Back to Projects</Button>
                </Link>


                <a target='blank' href="https://drive.google.com/file/d/1i96tgp3y8Bf_puD6x_jy0n-M2IfZDpkG/view?usp=sharing">
                    <Button variant="outline-secondary" >Demo Video</Button>
                </a>

            </div>

        </div>
    )
};

export default BreadIsGold