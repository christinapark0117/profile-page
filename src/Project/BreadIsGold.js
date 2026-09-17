import React from "react";
import ProjectDetail from "./ProjectDetail";
import BreadGoldBanner from "../Media/bread-gold-banner.png";
import BIGHome from "../Media/Bread is Gold Home.jpg";
import BIGWelcome from "../Media/Bread Is Gold Welcome Page.jpg";
import BIGMyRecipes from "../Media/Bread Is Gold My Recipes.jpg";
import BIGRecipeDetail from "../Media/Bread Is Gold Recipe Detail Page.jpg";
import BIGRecipesList from "../Media/Bread Is Gold Recipes List.jpg";
import BIGChefList from "../Media/Bread Is Gold Chefs Page.png";

const images = [
    { src: BIGHome, alt: "Bread Is Gold home page" },
    { src: BIGWelcome, alt: "Bread Is Gold welcome page" },
    { src: BIGMyRecipes, alt: "Bread Is Gold my recipes page" },
    { src: BIGRecipeDetail, alt: "Bread Is Gold recipe detail page" },
    { src: BIGRecipesList, alt: "Bread Is Gold recipes list page" },
    { src: BIGChefList, alt: "Bread Is Gold chefs page" },
];

const BreadIsGold = () => (
    <ProjectDetail
        number="01"
        title="Bread Is Gold"
        description="A full-stack recipe platform inspired by Massimo Bottura's charitable cookbook project."
        role="Full-Stack Developer"
        stack="React, Ruby on Rails, PostgreSQL"
        focus="Search, API Integration, Responsive UI"
        demoLink="https://drive.google.com/file/d/1i96tgp3y8Bf_puD6x_jy0n-M2IfZDpkG/view?usp=sharing"
        demoLabel="View Demo"
        bannerImage={BreadGoldBanner}
        bannerAlt="Bread Is Gold banner"
        images={images}
        overview={[
            'Bread Is Gold is a full-stack web application based on the cookbook "Bread Is Gold" by Chef Massimo Bottura and his 60 other chef friends. The platform allows users to explore recipes from the book while learning about the project\'s mission to combat food waste and support communities through the power of food.',
            "This project was built as a way to combine my passion for food, design, and technology. Beyond just a recipe website, it highlights the important message that good food can create a more inclusive and sustainable world by reducing food waste and feeding people in need.",
        ]}
        frontend={["React", "JavaScript (ES6+)", "Custom CSS"]}
        backend={["Ruby on Rails", "PostgreSQL", "RESTful API", "MVC architecture"]}
        nextLink="/project/allenscabinets"
    />
);

export default BreadIsGold;
