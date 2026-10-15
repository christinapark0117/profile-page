import React from "react";
import HomeText from "./HomeText";
import ProfessionalJourney from "./ProfessionalJourney";
import FeaturedProjects from "./FeaturedProjects";
import HomeConnect from "./HomeConnect";
import HomeFooter from "./HomeFooter";
import HomeScroll from "./HomeScroll";
import '../PageStyle/HomeContainer.css'
import '../PageStyle/HomeSections.css'

const HomeContainer = () => {
    return (
        <>
            <div id="home" className='homeContainer'>
                <HomeText />
            </div>
            <div data-home-section><ProfessionalJourney /></div>
            <div data-home-section><FeaturedProjects /></div>
            <div data-home-section><HomeConnect /></div>
            <HomeFooter />
            <HomeScroll />
        </>
    )
};

export default HomeContainer
