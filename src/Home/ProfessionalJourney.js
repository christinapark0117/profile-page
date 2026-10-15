import React from "react";
import { Link } from "react-router-dom";
import experience from "../Experience/experienceData";

// The two most recent roles; the full list lives on the Experience page
const recentRoles = experience.slice(0, 2);

const ProfessionalJourney = () => {
    return (
        <section className="homeSection">
            <div className="homeSectionInner">
                <div className="homeSectionHeader">
                    <h2 className="homeSectionTitle">Professional Journey</h2>
                    <Link className="homeSectionLink" to="/experience">View All Experiences →</Link>
                </div>
                <p className="homeSectionIntro">
                    A combination of technology, creative arts, and education has shaped my unique
                    perspective and approach to problem-solving.
                </p>

                <div className="journeyTimeline">
                    {recentRoles.map((job) => (
                        <div className="journeyItem" key={job.role + job.years}>
                            <div className="journeyDot" />
                            <div className="journeyHeader">
                                <div>
                                    <h3 className="journeyRole">{job.role}</h3>
                                    {job.org && <div className="journeyOrg">{job.org}</div>}
                                </div>
                                <div className="journeyYears">{job.years}</div>
                            </div>
                            <ul className="journeyBullets">
                                {job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProfessionalJourney;
