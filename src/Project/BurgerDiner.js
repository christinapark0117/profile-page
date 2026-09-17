import React from "react";
import ProjectDetail from "./ProjectDetail";
import BurgerDinerBanner from "../Media/burger-diner-banner.PNG";
import BDLogin from "../Media/Burger Diner Login.png";
import BDDirections from "../Media/Burger Diner Direction.png";
import BDLevel from "../Media/Burger Diner Level.png";
import BDNextLevel from "../Media/Burger Diner Next Level.png";
import BDPlayAgain from "../Media/Burger Diner Play Again.png";

const images = [
    { src: BDLogin, alt: "Burger Diner login screen" },
    { src: BDDirections, alt: "Burger Diner directions screen" },
    { src: BDLevel, alt: "Burger Diner gameplay level" },
    { src: BDNextLevel, alt: "Burger Diner next level screen" },
    { src: BDPlayAgain, alt: "Burger Diner play again screen" },
];

const BurgerDiner = () => (
    <ProjectDetail
        number="03"
        title="Burger Diner"
        description="An interactive browser game where players build burger orders using dynamic UI logic and front-end interactions."
        role="Frontend / Full-Stack Developer"
        stack="JavaScript, Ruby on Rails, SQLite3"
        focus="DOM Manipulation, Game Logic, REST API"
        demoLink="https://drive.google.com/file/d/1xxQUMkuUTKDDt9FE3Wp_H_5M03JC9Wqg/view?usp=sharing"
        demoLabel="View Demo"
        bannerImage={BurgerDinerBanner}
        bannerAlt="Burger Diner banner"
        images={images}
        overview={[
            "Burger Diner is an interactive browser game where users assemble burger orders using dynamic front-end interactions and real data from a backend. Players can select ingredients, build their burgers, and place orders in a fun, engaging interface.",
            "This project combines dynamic UI logic with a Ruby on Rails backend, using a RESTful API and a database to manage ingredients and orders. It was built as a way to strengthen my full-stack development skills while creating an enjoyable, interactive experience.",
        ]}
        frontend={["JavaScript (DOM Manipulation)", "Semantic UI + Custom CSS", "Imported data by fetching to the backend"]}
        backend={["Ruby on Rails", "SQLite3", "Serialized RESTful API", "MVC Pattern"]}
        nextLink="/project/breadisgold"
    />
);

export default BurgerDiner;
