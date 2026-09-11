
import React from 'react'
import { Link } from 'react-router-dom'
import '../PageStyle/AboutMe.css'
import BioImage from "../Media/aboutmeprofilepic.jpeg"
import Music from "../Media/musicnote.png"
import Education from "../Media/education.png"
import Technology from "../Media/technology.png"

const features = [
    { icon: "🎵", title: "Music", lines: ["B.M. in Oboe Performance", "Former orchestral musician"] },
    { icon: "📖", title: "Education", lines: ["Teacher & school administrator"] },
    { icon: "💻", title: "Technology", lines: ["Software engineer", "Building for people"] },
]

const AboutMe = () => {
   return (
        <div id="aboutme" className="page-section">
            <div className="aboutGrid">
                <div className="aboutCopy">
                    <div className="eyebrow">About</div>
                    <h1 className="section-heading">A Different Path,<br/>A Stronger Perspective</h1>

                    <p>I'm a software engineer with a background in music, education, and design.
                        I earned my degree in Oboe Performance and worked professionally as a musician
                        before transitioning into teaching and school administration.</p>

                    <p>My long-standing interest in technology and design eventually led me to software
                        engineering, where I found a way to combine creativity, structure, and problem-solving into my career.</p>

                    <p>Today, I build and support web applications across the public and private sectors,
                        and I'm especially interested in creating user-centered products and contributing
                        to how they're shaped and improved.</p>

                    <Link className="btn-dark" to="/experience">More about my journey →</Link>
                </div>

                <div className="aboutImageWrap">
                    <img className="aboutImage" alt="Christina" src={BioImage}/>
                </div>
            </div>

            <div className="aboutFeatures">
                {features.map((f) => (
                    <div className="aboutFeature" key={f.title}>
                        <div className="aboutFeatureIcon">{f.icon}</div>
                        <div className="aboutFeatureTitle">{f.title}</div>
                        {f.lines.map((l) => <div className="aboutFeatureLine" key={l}>{l}</div>)}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutMe