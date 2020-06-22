import React from "react";
import BreadIsGold from "../Media/Card Img for Bread Is Gold .png"
import BurgerDiner from "../Media/Card Img for Burger Diner.png"

const ProjectCard = () => {
    return (
        <div id="projectcard">

            <div className="card">
                <img className="card-img" alt="Project Image" src={BreadIsGold}/>
                <div className="card-body">
                    <h5 className="card-title">Bread Is Gold</h5>
                    <p className="card-text">
                        Bread Is Gold is an app based on a recipe book written by an award winning Chef Massimo Bottura and his 60 other chef friends.
                    </p>
                    <button className='button'>Details</button>
                </div>
            </div>

            <div className="card">
                <img className="card-img burgerdiner" alt="Project Image" src={BurgerDiner}/>
                <div className="card-body">
                    <h5 className="card-title">Burger Diner</h5>
                    <p className="card-text">
                        Burger Diner is a game where you have to make a burger with the given recipe.
                    </p>
                    <button className='button'>Details</button>
                </div>
            </div>

        </div>
    )
}

export default ProjectCard