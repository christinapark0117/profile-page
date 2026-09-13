import React from 'react'
import '../PageStyle/Skills.css'
import { ReactComponent as LanguagesIcon } from "../Media/icon-languages.svg"
import { ReactComponent as FrameworksIcon } from "../Media/icon-frameworks.svg"
import { ReactComponent as DatabasesIcon } from "../Media/icon-databases.svg"
import { ReactComponent as ToolsIcon } from "../Media/icon-tools.svg"
import { ReactComponent as MethodologiesIcon } from "../Media/icon-methodologies.svg"
import { ReactComponent as OtherIcon } from "../Media/icon-other.svg"

const skillGroups = [
    { 
        category: "Languages", 
        Icon: LanguagesIcon, 
        skills: ["JavaScript", "TypeScript (familiar)", "PHP", "SQL", "HTML5 / CSS3"] 
    },
    { 
        category: "Frameworks & Libraries",
        Icon: FrameworksIcon,
        skills: ["React", "Redux", "Drupal", "Ruby on Rails", "Bootstrap / Tailwind CSS"] 
    },
    { 
        category: "Databases",
        Icon: DatabasesIcon,
        skills: ["PostgreSQL", "MySQL", "SQLite"] 
    },
    { 
        category: "Development & Tools",
        Icon: ToolsIcon, 
        skills: ["Git / GitHub", "REST APIs", "CI/CD (familiar)", "VS Code", "Jira / Confluence"] 
    },
    { 
        category: "Methodologies",
        Icon: MethodologiesIcon,
        skills: ["Agile", "Scrum", "Cross-functional Collaboration"] 
    },
    { 
        category: "Other",
        Icon: OtherIcon,
        skills: ["API Integration", "Responsive Web Design", "Accessibility (WCAG, familiar)"] 
    },
]

const Skills = () => {
    return (
        <div id="skills" className="page-section">
            <div className="skillsHeader">
                <div>
                    <div className="eyebrow">Skills</div>
                    <h1 className="section-heading">Tools & Technologies</h1>
                </div>
            </div>

            <div className="skillsGrid">
                {skillGroups.map((group) => (
                    <div className="skillCard" key={group.category}>
                        <div className="skillCardHeader">
                            <span className="skillIcon"><group.Icon /></span>
                            <h3 className="skillCardTitle">{group.category}</h3>
                        </div>
                        <ul className="skillList">
                            {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="skillsFooterQuote script-quote">"Better tools, better possibilities."</div>
        </div>
    )
}

export default Skills