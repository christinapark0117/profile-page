import React from "react";
import ProjectDetail from "./ProjectDetail";
import GenesisMassageBanner from "../Media/genesis-massage-banner.jpg";
import GMHome from "../Media/Genesis Massage Home.jpg";
import GMAbout from "../Media/Genesis Massage About.jpg";
import GMServices from "../Media/Genesis Massage Services.jpg";
import GMReviews from "../Media/Genesis Massage Reviews.jpg";
import GMContact from "../Media/Genesis Massage Contact.jpg";
import GMBookingService from "../Media/Genesis Massage Booking Service.jpg";
import GMBookingCalendar from "../Media/Genesis Massage Booking Calendar.jpg";
import GMBookingForm from "../Media/Genesis Massage Booking Form.jpg";
import GMBookingCallModal from "../Media/Genesis Massage Booking Call Modal.jpg";

const images = [
    { src: GMHome, alt: "Genesis Massage home page" },
    { src: GMAbout, alt: "Genesis Massage about section" },
    { src: GMServices, alt: "Genesis Massage services section" },
    { src: GMReviews, alt: "Genesis Massage client reviews section" },
    { src: GMContact, alt: "Genesis Massage contact section with map" },
    { src: GMBookingService, alt: "Genesis Massage booking page, service selection" },
    { src: GMBookingCalendar, alt: "Genesis Massage booking page, date and time selection" },
    { src: GMBookingForm, alt: "Genesis Massage booking page, client information form" },
    { src: GMBookingCallModal, alt: "Genesis Massage booking page, call-to-book notice" },
];

const GenesisMassage = () => (
    <ProjectDetail
        number="04"
        title="Genesis Massage"
        description="A calm, conversion-focused website for a Vienna, Virginia massage practice."
        role="Design & Full-Stack Development"
        stack="React 19, Vite 8, JavaScript, CSS"
        focus="Booking Flow, Responsive UI, Local Business Web Design"
        demoLink="https://genesis-massage.com/"
        demoLabel="Visit Genesis Massage"
        bannerImage={GenesisMassageBanner}
        bannerAlt="Rolled towel, candle, and tea on a massage table"
        images={images}
        overview={[
            "Genesis Massage is a locally deployed business website built for a massage practice in Vienna, Virginia. The site is designed to clearly present services, communicate a calm and trustworthy brand, and guide users toward booking.",
            "The site combines a fast React frontend with a lightweight custom booking system powered by Google services, allowing appointment management without a traditional paid backend. This approach keeps the site simple to maintain while giving the business owner full control over schedule, content, and client communications.",
        ]}
        frontend={[
            "React 19",
            "Vite 8",
            "React Router 8",
            "JavaScript (JSX)",
            "Custom CSS",
            "Google Maps embedded",
            "Google review content",
        ]}
        backend={[
            "Google Apps Script web app",
            "Google Calendar API",
            "Google Sheets settings",
            "MailApp email notifications",
            "PropertiesService",
            "LockService + CacheService",
            "Cloudflare Turnstile",
            "Netlify deployment",
            "GitHub-based deployment workflow",
            "ESLint and image optimization with Sharp",
        ]}
        nextLink="/project/allenscabinets"
    />
);

export default GenesisMassage;
