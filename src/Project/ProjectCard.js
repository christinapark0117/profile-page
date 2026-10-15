import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, image, alt, description, tags = [], link }) => {
    return (
        <div className="projectCard">
            <div className="projectCardImageWrap">
                <img className="projectCardImage" src={image} alt={alt} />
            </div>
            <div className="projectCardBody">
                <h3 className="projectCardTitle">{title}</h3>
                <p className="projectCardText">{description}</p>
                {tags.length > 0 && (
                    <ul className="projectCardTags">
                        {tags.map((tag) => (
                            <li key={tag} className="projectCardTag">{tag}</li>
                        ))}
                    </ul>
                )}
                <div className="projectCardFooter">
                    <Link className="projectCardLink" to={link}>Project Details →</Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
