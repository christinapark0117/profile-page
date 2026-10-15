import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { allProjects } from "../Project/projectData";

// How many cards fit side by side at the current window width
const getVisibleCount = () => {
    if (window.innerWidth >= 1000) return 3;
    if (window.innerWidth >= 700) return 2;
    return 1;
};

const FeaturedProjects = () => {
    const [visibleCount, setVisibleCount] = useState(getVisibleCount);
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        const onResize = () => setVisibleCount(getVisibleCount());
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const lastStart = Math.max(allProjects.length - visibleCount, 0);

    // Keep the position valid when the window grows and fewer steps are needed
    useEffect(() => {
        setStartIndex((i) => Math.min(i, lastStart));
    }, [lastStart]);

    const goPrev = () => setStartIndex((i) => (i === 0 ? lastStart : i - 1));
    const goNext = () => setStartIndex((i) => (i === lastStart ? 0 : i + 1));

    return (
        <section className="homeSection">
            <div className="homeSectionInner">
                <div className="homeSectionHeader">
                    <h2 className="homeSectionTitle">Featured Projects</h2>
                    <Link className="homeSectionLink" to="/project">View All Projects →</Link>
                </div>
                <p className="homeSectionIntro">
                    A selection of professional and personal projects that showcase my skills and interests.
                </p>

                <div className="featuredViewport">
                    <div
                        className="featuredTrack"
                        style={{ transform: `translateX(-${(startIndex * 100) / visibleCount}%)` }}
                    >
                        {allProjects.map((project) => (
                            <div
                                className="featuredSlide"
                                key={project.title}
                                style={{ flexBasis: `${100 / visibleCount}%` }}
                            >
                                <div className="featuredCard">
                                    <div className="featuredImageWrap">
                                        <img className="featuredImage" src={project.image} alt={project.alt} />
                                    </div>
                                    <div className="featuredBody">
                                        <h3 className="featuredTitle">{project.title}</h3>
                                        <p className="featuredText">{project.description}</p>
                                        <div className="featuredFooter">
                                            <ul className="featuredTags">
                                                {project.tags.map((tag) => (
                                                    <li key={tag} className="featuredTag">{tag}</li>
                                                ))}
                                            </ul>
                                            <Link
                                                className="featuredLink"
                                                to={project.link}
                                                aria-label={`${project.title} project details`}
                                            >
                                                →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {lastStart > 0 && (
                    <div className="featuredControls">
                        <button type="button" className="featuredArrow" onClick={goPrev} aria-label="Previous projects">←</button>
                        {Array.from({ length: lastStart + 1 }, (_, i) => (
                            <button
                                type="button"
                                key={i}
                                className={`featuredDot ${i === startIndex ? "featuredDotActive" : ""}`}
                                onClick={() => setStartIndex(i)}
                                aria-label={`Show projects starting at ${i + 1}`}
                            />
                        ))}
                        <button type="button" className="featuredArrow" onClick={goNext} aria-label="Next projects">→</button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default FeaturedProjects;
