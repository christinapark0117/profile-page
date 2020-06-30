import React from "react";
import '../PageStyle/BreadIsGold.css';
import BIGHome from '../Media/Bread is Gold Home.jpg';
import BIGWelcome from '../Media/Bread Is Gold Welcome Page.jpg'
import BIGMyRecipes from '../Media/Bread Is Gold My Recipes.jpg'
import BIGRecipeDetail from '../Media/Bread Is Gold Recipe Detail Page.jpg'
import BIGRecipesList from '../Media/Bread Is Gold Recipes List.jpg'
import BIGChefList from '../Media/Bread Is Gold Chefs Page.png'
import Carousel from 'react-bootstrap/Carousel';


const BreadIsGold = () => {

    return(
        <div class="eachProjectPage">


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


        </div>
    )
};

export default BreadIsGold