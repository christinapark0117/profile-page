import React from "react";
import { Link } from 'react-router-dom'

const HomeText = () => {
    return (
        <div className="homeText">
            <div className="homeTextTop">
                <div className="eyebrow">Software Engineer</div>

                <h1 className="homeTitle">Christina M. Park</h1>

                <p className="homeSubtitle">
                    Building thoughtful digital products at the intersection of
                    technology, people, and creativity.
                </p>

                <div className="homeActions">
                    <Link className="btn-dark" to="/projects">View My Work →</Link>
                    <a className="homeTextLink" target="_blank" rel="noreferrer"
                       href="https://www.linkedin.com/in/meet-christina-park/">LinkedIn</a>
                    <a className="homeTextLink" target="_blank" rel="noreferrer"
                       href="https://github.com/christinapark0117">GitHub</a>
                    <a className="homeTextLink" href="https://drive.google.com/file/d/18Zr4n96bBs7MoqUvq410lJAK_1PZrB0M/view?usp=drive_link" target="_blank" rel="noreferrer">Resume</a>
                </div>
            </div>

            <div className="homeTextBottom">
                <div className="homeQuote script-quote">
                    <span className="homeQuoteLine">"Different experiences lead to a different perspective.</span>
                    <span className="homeQuoteLine">And that perspective is what makes me stand out."</span>
                </div>

                <div className="homeScroll">
                    <span className="homeScrollArrow">↓</span> Scroll
                </div>
            </div>
        </div>
    )
}

export default HomeText