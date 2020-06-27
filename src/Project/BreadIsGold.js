import React from "react";
import '../PageStyle/BreadIsGold.css';
import BIGHome from '../Media/Bread is Gold Home.jpg';
import BIGWelcome from '../Media/Bread Is Gold Welcome Page.jpg'
import BIGMyRecipes from '../Media/Bread Is Gold My Recipes.jpg'
import BIGRecipeDetail from '../Media/Bread Is Gold Recipe Detail Page.jpg'
import BIGRecipesList from '../Media/Bread Is Gold Recipes List.jpg'
import BIGChefList from '../Media/Bread Is Gold Chefs Page.png'

const BreadIsGold = () => {
    return (
        <div id="eachProjectPage">

            <h3 className='pageTitle'>Bread Is Gold</h3>


            <div id="carouselControls" className="carousel slide" data-ride="carousel">

                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img src={BIGHome} className="d-block w-100" alt="Bread Is Gold home page"/>
                    </div>

                    <div className="carousel-item">
                        <img src={BIGWelcome} className="d-block w-100" alt="Bread Is Gold welcome page"/>
                    </div>

                    <div className="carousel-item">
                        <img src={BIGMyRecipes} className="d-block w-100" alt="My Recipes List"/>
                    </div>

                    <div className="carousel-item">
                        <img src={BIGRecipesList} className="d-block w-100" alt="All Recipes List"/>
                    </div>

                    <div className="carousel-item">
                        <img src={BIGRecipeDetail} className="d-block w-100" alt="Recipe Details"/>
                    </div>

                    <div className="carousel-item">
                        <img src={BIGChefList} className="d-block w-100" alt="Chef List"/>
                    </div>

                </div>

                <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </div>
    )
};

export default BreadIsGold