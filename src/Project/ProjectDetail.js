import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../PageStyle/ProjectDetail.css";

const ProjectDetail = ({
    number,
    title,
    description,
    role,
    stack,
    focus,
    demoLink,
    demoLabel = "View Demo",
    bannerImage,
    bannerAlt,
    images,
    overview,
    frontend,
    backend,
    nextLink,
}) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const lastIndex = images.length - 1;

    const goPrev = () => setActiveSlide((i) => (i === 0 ? lastIndex : i - 1));
    const goNext = () => setActiveSlide((i) => (i === lastIndex ? 0 : i + 1));

    return (
        <div className="projectDetail">
            <div className="projectHero">
                <div className="projectHeroText">
                    <div className="eyebrow">Project / {number}</div>
                    <h1 className="projectTitle">{title}</h1>
                    <p className="projectSubtitle">{description}</p>

                    <div className="projectMeta">
                        <div className="projectMetaItem">
                            <div className="projectMetaLabel">Role</div>
                            <div className="projectMetaValue">{role}</div>
                        </div>
                        <div className="projectMetaItem">
                            <div className="projectMetaLabel">Stack</div>
                            <div className="projectMetaValue">{stack}</div>
                        </div>
                        <div className="projectMetaItem">
                            <div className="projectMetaLabel">Focus</div>
                            <div className="projectMetaValue">{focus}</div>
                        </div>
                    </div>

                    {demoLink && (
                        <a
                            className="btn-dark projectDemoBtn"
                            href={demoLink}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {demoLabel} ↗
                        </a>
                    )}
                </div>

                <div className="projectHeroImageWrap">
                    <img className="projectHeroImage" src={bannerImage} alt={bannerAlt} />
                </div>
            </div>

            <div className="projectBody">
                <div className="projectCarousel">
                    <button
                        type="button"
                        className="carouselArrowBtn carouselArrowPrev"
                        onClick={goPrev}
                        aria-label="Previous image"
                    >
                        ‹
                    </button>

                    <div className="projectCarouselFrame">
                        <div className="projectCarouselImageWrap">
                            <img
                                src={images[activeSlide].src}
                                alt={images[activeSlide].alt}
                                className="projectCarouselImage"
                            />
                        </div>
                    </div>

                    <button
                        type="button"
                        className="carouselArrowBtn carouselArrowNext"
                        onClick={goNext}
                        aria-label="Next image"
                    >
                        ›
                    </button>
                </div>

                <div className="carouselDots">
                    {images.map((image, i) => (
                        <button
                            type="button"
                            key={image.src}
                            className={`carouselDot ${i === activeSlide ? "carouselDotActive" : ""}`}
                            onClick={() => setActiveSlide(i)}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>

                <div className="projectSection">
                    <h2 className="projectSectionHeading">Overview</h2>
                    <div className="projectOverviewGrid">
                        {overview.map((paragraph) => (
                            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                        ))}
                    </div>
                </div>

                <div className="projectSection">
                    <h2 className="projectSectionHeading">Technical Approach</h2>
                    <hr className="projectDivider" />
                    <div className="projectTechGrid">
                        <div>
                            <h3 className="projectTechHeading">Frontend</h3>
                            <ul className="projectTechList">
                                {frontend.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="projectTechHeading">Backend</h3>
                            <ul className="projectTechList">
                                {backend.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="projectFooterNav">
                    <Link className="projectFooterLink" to="/project">← All Projects</Link>
                    <Link className="projectFooterLink projectFooterLinkNext" to={nextLink}>Next Project →</Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
