import React from "react";
import {Link} from "react-router-dom";
import BreadIsGold from "../Media/Card Img for Bread Is Gold .png"
import BurgerDiner from "../Media/Card Img for Burger Diner.png"
import Allens from "../Media/Card Image for Allen's Cabinet.png"

const ProjectCard = () => {
    return (
        <div id="projectcard">



            <div className="card" id="breadisgold">


                <div className="card-body">

                    <h5 className="card-title">Bread Is Gold</h5>

                    <img className="card-img breadisgoldimg" alt="Project Image" src={BreadIsGold}/>

                    <p className="card-text">
                        Bread Is Gold is an app based on a recipe book. It was written by an award winning Chef who has 3 Michelin Stars named Massimo Bottura and his 60 other chef friends.
                    </p>


                    <div className='text-center'>


                        <Link to={'/project/breadisgold'}>

                            <button type="button" className="btn btn-outline-secondary">Project Details</button>

                        </Link>


                    </div>

                </div>

            </div>




            <div className="card" id="burgerdiner">



                <div className="card-body">


                    <h5 className="card-title">Burger Diner</h5>

                    <img className="card-img burgerdinerimg" alt="Project Image" src={BurgerDiner}/>

                    <p className="card-text">
                        Burger Diner is a burger building game. You have to make a burger with the given recipe by clicking on the right picture. Make sure to not exceed the time limit!
                    </p>


                    <div className='text-center'>


                        <Link to={'/project/burgerdiner'}>

                            <button type="button" className="btn btn-outline-secondary">Project Details</button>

                        </Link>
                    </div>

                </div>

            </div>





            <div className="card" id="allens">



                <div className="card-body">


                    <h5 className="card-title">Allens's Cabinets</h5>

                    <img className="card-img allensimg" alt="Project Image" src={Allens}/>

                    <p className="card-text">
                        Allen's Cabinets Kitchen & Bath is a local cabinetry business in the D.C., Maryland, Virginia area. Christina has been working on building their website with them as a freelance job.
                    </p>


                    <div className='text-center'>


                        <Link to={'/project/allenscabinets'}>

                            <button type="button" className="btn btn-outline-secondary">Project Details</button>

                        </Link>


                    </div>

                </div>

            </div>




        </div>
    )
};

export default ProjectCard