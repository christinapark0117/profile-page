import React from "react";
import ProjectDetail from "./ProjectDetail";
import AllensCabinetBanner from "../Media/allens-cabinet-banner.PNG";
import ACHome from "../Media/Allen's Cabinets Home.png";
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
        label="Client Work"
        number="01"
        title="Allen's Cabinets Kitchen & Bath"
        description="A full-stack business website designed to turn product browsing into appointments and quote requests."
        role="Full-Stack Developer"
        stack="React 19, Supabase, PostgreSQL, Vercel"
        focus="Booking Flow, Quote Requests, Project Gappery, Admin Integration"
        demoLink="https://www.allenscabinets.com/"
        demoLabel="Visit Allen's Cabinets"
        bannerImage={AllensCabinetBanner}
        bannerAlt="Allen's Cabinets Kitchen & Bath banner"
        images={images}
        overview={[
            "Allen's Cabinets is a full-stack website built for a kitchen and bath showroom in Alexandria, Virginia. The site replaces an older WordPress experience with a streamlined platform that helps visitors explore cabinetry, browse completed projects, and move directly toward scheduling a showroom visit or requesting a quote.",
            "The platform connects the public website with booking, inquiry, gallery, and administrative workflows through a shared PostgreSQL database. Appointments and quote requests flow directly into the business's internal tools, while automated email notifications keep both customers and staff informed without requiring users to create an account.",
        ]}
        frontend={["React 19", "React Router 7", "Vite", "Server-side prerendering/SSR", "Responsive UI", "Product specific routes", "Filterable project gallery", "Custom booking flow", "Quote request with image uploads"]}
        backend={[
            "Supabase",
            "PostgreSQL",
            "Row Level Security",
            "Vercel Functions",
            "Resend email delivery",
            "Appointment & quote APIs",
            "Shared admin database",
            "Build-time gallery snapshots",
            "Token-based booking management"
        ]}
        nextLink="/project/genesismassage"
    />
);

export default AllensCabinets;
