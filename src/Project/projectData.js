import GenesisMassageImg from "../Media/genesis-massage-card.webp"
import AllensImg from "../Media/Allen's Cabinets Home.png"
import BreadIsGoldImg from "../Media/bread-is-gold-card.jpg"
import BurgerDinerImg from "../Media/burger-diner-card.jpg"

export const projectSections = [
    {
        title: "Client Work",
        subtitle: "Websites designed, built, and deployed for local businesses.",
        projects: [
            {
                title: "Allen's Cabinets",
                image: AllensImg,
                alt: "Allen's Cabinets project screenshot",
                description: "A full-stack website for an Alexandria kitchen & bath showroom, built to turn product browsing into showroom visits and quote requests.",
                tags: ["React", "Supabase", "PostgreSQL"],
                link: "/project/allenscabinets",
            },
            {
                title: "Genesis Massage",
                image: GenesisMassageImg,
                alt: "Massage therapist rolling a towel on a massage table",
                description: "A calm, conversion-focused website for a Vienna, Virginia massage practice.",
                tags: ["React", "Responsive", "Scheduling"],
                link: "/project/genesismassage",
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

// Every project in page order, for places that list them without the section split
export const allProjects = projectSections.flatMap((section) => section.projects)
