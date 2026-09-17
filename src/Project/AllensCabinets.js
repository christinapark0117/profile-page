import React from "react";
import ProjectDetail from "./ProjectDetail";
import AllensCabinetBanner from "../Media/allens-cabinet-banner.PNG";
import ACHome from "../Media/Card Image for Allen's Cabinet.png";
import ACGallery from "../Media/Allen's Cabinets Gallery.png";
import ACAbout from "../Media/Allen's Cabinets About.png";
import ACContact from "../Media/Allen's Cabinets Contact.png";

const images = [
    { src: ACHome, alt: "Allen's Cabinets home page" },
    { src: ACGallery, alt: "Allen's Cabinets gallery page" },
    { src: ACAbout, alt: "Allen's Cabinets about page" },
    { src: ACContact, alt: "Allen's Cabinets contact page" },
];

const AllensCabinets = () => (
    <ProjectDetail
        number="02"
        title="Allen's Cabinets Kitchen & Bath"
        description="A full-stack business website designed to showcase cabinetry services, renovation work, and customer inquiries."
        role="Full-Stack Developer"
        stack="React, Ruby on Rails, PostgreSQL"
        focus="Business Website, Admin Features, Inquiry Flow"
        bannerImage={AllensCabinetBanner}
        bannerAlt="Allen's Cabinets Kitchen & Bath banner"
        images={images}
        overview={[
            "Allen's Cabinets Kitchen & Bath is a full-stack website for a residential cabinetry and renovation business. The site showcases cabinetry services, project imagery, and provides an easy way for customers to get in touch through a contact and inquiry system.",
            "This project was built to give the business a clean, professional online presence, highlight their work, and make it simple for potential clients to learn about services and request an estimate or more information.",
        ]}
        frontend={["JavaScript & React", "Custom CSS", "Imported data by fetching to the backend", "Footer Included"]}
        backend={[
            "Ruby on Rails",
            "PostgreSQL",
            "Ruby on Rails Mailer",
            "Serialized RESTful API",
            "Full validations and authentication using JWT token and Bcrypt ruby gem for Admin Login",
        ]}
        nextLink="/project/burgerdiner"
    />
);

export default AllensCabinets;
