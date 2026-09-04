
import React from 'react'
import '../PageStyle/AboutMe.css'
import BioImage from "../Media/about me pic.jpeg"



const AboutMe = () => {
    return (
        <div id="aboutme">

            <div className="bioImage">
                <img className="myImage" alt="Christina's Picture" src={BioImage}/>
            </div>

            <div className="bio">
                <div className="bioName">
                    <span className="myName">Christina M. Park</span> : Full Stack Web Developer
                </div>

                <div className="bioDetails">
                    <div className="bioDetail">
                        <div className="bioDetailTitle">
                            Who is Christina?
                        </div>
                        <div>
                            <p>Christina is a full-stack software engineer with experience building and supporting web applications across both the public and private sectors. Her background spans front-end and back-end development, with experience working in Agile teams and collaborating across engineering, product, and business functions.</p>
                            
                            <p>She is expecially interested in creating thoughtful, user-centered products and bringing together technology, design, and problem-solving.</p>
                        </div>
                    </div>

                    <div className="bioDetail">
                        <div className="bioDetailTitle">
                            What's Her Background?
                        </div>
                        <div>
                            <p>Christina's path into technology began in an entirely different field: music. She earned her degree in Oboe Performance and worked professionally as a musician before transitioning into education, where she spent several years teaching and working in school administration.</p>
                            <p>Her long-standing interest in art, design, and technology eventually led her to software engineering. What began with an interest in designing websites grew into a desire to understand how to build them from the ground up.</p>
                            <p>Sje began her software career in backend deveolopment at Beachbody and later expanded into full-stack engineering, working on projects for organizations including federal government clients such as <a href='https://www.fdic.gov/'>FDIC</a>, <a href='https://www.fhfa.gov/'>FHFA</a> and the <a href='https://www.irs.gov/'>IRS</a>. Along the way she has worked with cross-functional Agile teams and gained experience across application development, APIs, databases, front-end interfaces, and modern web technologies.</p>
                            <p>Today, Christina brings together the creativity and discipline of her musical background, the communication skills she developed as an educator, and her technical experience as a software engineer. She is particularly interested in opportunities where she can contribute not only to how products are build but also to how they are shaped and improved.</p>
                        </div>
                    </div>

                    <div className="bioDetail">
                        <div className="bioDetailTitle">
                            Technical Skills
                        </div>
                        <div className="bioSkills">
                            <i className="bioSkill"/> Javascript, React<br/>
                            <i className="bioSkill"/> PHP, Drupal <br/>
                            <i className="bioSkill"/> HTML5, CSS, SCSS, Semantic UI, Bootstrap <br/>
                            <i className="bioSkill"/> SQL, SQLite3, PostgreSQL<br/>
                            <i className="bioSkill"/> REST APIs, API Integration<br/>
                            <i className="bioSkill"/> Git, Github, Bitbucket<br/>
                            <i className="bioSkill"/> Agile, Scrum<br/>

                        </div>
                    </div>
                </div>
            </div>


        </div>


    )
}

export default AboutMe