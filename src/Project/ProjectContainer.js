import React from 'react'
import ProjectCard from "./ProjectCard";
import '../PageStyle/ProjectContainer.css'
import { projectSections } from "./projectData"

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
