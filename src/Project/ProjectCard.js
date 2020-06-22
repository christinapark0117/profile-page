import React from "react";
import BreadIsGold from "../Media/Card Img for Bread Is Gold .png"

const ProjectCard = () => {
    return (
        <div id="projectcard">

            <div className="card">
                <img className="card-img" alt="Project Image" src={BreadIsGold}/>
                <div className="card-body">
                    <h5 className="card-title">Bread Is Gold</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default ProjectCard