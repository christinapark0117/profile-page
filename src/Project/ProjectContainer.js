import React from 'react'
import ProjectCard from "./ProjectCard";
import '../PageStyle/ProjectContainer.css'
import BreadIsGoldImg from "../Media/Card Img for Bread Is Gold .png"
import BurgerDinerImg from "../Media/Card Img for Burger Diner.png"
import AllensImg from "../Media/Card Image for Allen's Cabinet.png"

const projects = [
    {
        title: "Bread Is Gold",
        image: BreadIsGoldImg,
        alt: "Bread Is Gold project screenshot",
        description: "An app based on a recipe book written by 3-Michelin-star chef Massimo Bottura and 60 other chefs.",
        link: "/project/breadisgold",
    },
    {
        title: "Burger Diner",
        image: BurgerDinerImg,
        alt: "Burger Diner project screenshot",
        description: "A burger-building game — assemble the given recipe by clicking the right ingredients before the timer runs out.",
        link: "/project/burgerdiner",
    },
    {
        title: "Allen's Cabinets",
        image: AllensImg,
        alt: "Allen's Cabinets project screenshot",
        description: "Website for Allen's Cabinets Kitchen & Bath, a local cabinetry business in the D.C./Maryland/Virginia area, built as a freelance project.",
        link: "/project/allenscabinets",
    },
]

const ProjectContainer = () => {
    return (
        <div id="project" className="page-section">
            <div className="eyebrow">Projects</div>
            <h1 className="section-heading">Selected Work</h1>

            <div className="projectGrid">
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </div>
    )
}

export default ProjectContainer