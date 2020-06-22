import React from "react";
import BreadIsGold from "../Media/Card Img for Bread Is Gold .png"
import BurgerDiner from "../Media/Card Img for Burger Diner.png"
import Allens from "../Media/Card Image for Allen's Cabinet.png"

const ProjectCard = () => {
    return (
        <div id="projectcard">

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Bread Is Gold</h5>
                    <img className="card-img breadisgold" alt="Project Image" src={BreadIsGold}/>

                    <p className="card-text">
                        Bread Is Gold is an app based on a recipe book written by an award winning Chef Massimo Bottura and his 60 other chef friends.
                    </p>
                    <button className='button'>Details</button>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Burger Diner</h5>
                    <img className="card-img burgerdiner" alt="Project Image" src={BurgerDiner}/>

                    <p className="card-text">
                        Burger Diner is a game where you have to make a burger with the given recipe by clicking on the right picture.
                    </p>
                    <button className='button'>Details</button>
                </div>
            </div>

            <div className="card">
                <div className="card-body">

                    <h5 className="card-title">Allens's Cabinets</h5>
                    <img className="card-img allens" alt="Project Image" src={Allens}/>
                    <p className="card-text">
                        Allen's Cabinets Kitchen & Bath is a local cabinetry business in the dmv area. I've been working on building their website with them as a freelance job.
                    </p>
                    <button className='button'>Details</button>
                </div>
            </div>

        </div>
    )
}

export default ProjectCard