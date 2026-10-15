import React from "react";
import ProjectDetail from "./ProjectDetail";
import GenesisMassageBanner from "../Media/genesis-massage-banner.jpg";

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
        nextLink="/project/allenscabinets"
    />
);

export default GenesisMassage;
