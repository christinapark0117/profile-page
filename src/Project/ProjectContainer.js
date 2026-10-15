import React from 'react'
import ProjectCard from "./ProjectCard";
import '../PageStyle/ProjectContainer.css'
import GenesisMassageImg from "../Media/genesis-massage-card.webp"
import AllensImg from "../Media/Allen's Cabinets Home.png"
import BreadIsGoldImg from "../Media/bread-is-gold-card.jpg"
import BurgerDinerImg from "../Media/burger-diner-card.jpg"

const projectSections = [
    {
        title: "Client Work",
        subtitle: "Websites designed, built, and deployed for local businesses.",
        projects: [
            {
                title: "Genesis Massage",
                image: GenesisMassageImg,
                alt: "Massage therapist rolling a towel on a massage table",
                description: "A calm, conversion-focused website for a Vienna, Virginia massage practice.",
                tags: ["React", "Responsive", "Scheduling"],
                link: "/project/genesismassage",
            },
            {
                title: "Allen's Cabinets",
                image: AllensImg,
                alt: "Allen's Cabinets project screenshot",
                description: "A polished business website showcasing cabinetry services, project galleries, and inquiries.",
                tags: ["React", "Rails", "PostgreSQL"],
                link: "/project/allenscabinets",
            },
        ],
    },
    {
        title: "Personal Projects",
        subtitle: "Creative and technical projects built to explore design, interactivity, and full-stack development.",
        projects: [
            {
                title: "Bread Is Gold",
                image: BreadIsGoldImg,
                alt: "Plated salad of colorful edible flowers and greens",
                description: "A full-stack recipe platform inspired by Massimo Bottura's charitable cookbook project.",
                tags: ["React", "Ruby on Rails", "PostgreSQL"],
                link: "/project/breadisgold",
            },
            {
                title: "Burger Diner",
                image: BurgerDinerImg,
                alt: "Neon-lit Burger Diner storefront at dusk",
                description: "An interactive burger-building game with dynamic UI logic and playful visual design.",
                tags: ["JavaScript", "Rails", "Game Logic"],
                link: "/project/burgerdiner",
            },
        ],
    },
]

const ProjectContainer = () => {
    return (
        <div id="project" className="page-section">
            <div className="eyebrow">Projects</div>
            <h1 className="section-heading">Selected Work</h1>
            <p className="projectIntro">A mix of client websites and personal projects.</p>

            {projectSections.map((section) => (
                <section key={section.title} className="projectGroup">
                    <div className="projectGroupHeader">
                        <h2 className="projectGroupTitle">{section.title}</h2>
                        <span className="projectGroupRule" />
                    </div>
                    <p className="projectGroupSubtitle">{section.subtitle}</p>

                    <div className="projectGrid">
                        {section.projects.map((project) => (
                            <ProjectCard key={project.title} {...project} />
                        ))}
                    </div>
                </section>
            ))}
        </div>
    )
}

export default ProjectContainer
