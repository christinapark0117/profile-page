
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
                            A junior software engineer with expertise in Ruby on Rails and Javascript, React and Redux
                        </div>
                    </div>

                    <div className="bioDetail">
                        <div className="bioDetailTitle">
                            What's Her Background?
                        </div>
                        <div>
                            Christina majored in Oboe Performance in college. She was a former Symphony Orchestra member, a teacher and a school administrator. Always having interest in art and design, she started designing websites as a hobby. She thought that it would be better if she can bring the websites that she designed alive on her own, so she decided to switch her career to software engineering. Currently she is working on building a website for a local cabinetry business, designing their UI and also bringing that UI into life. It’s been a great experience so far and she’d like to find opportunities that can expand her knowledge on her current expertise as a full stack web developer.
                        </div>
                    </div>

                    <div className="bioDetail">
                        <div className="bioDetailTitle">
                            Technical Skills
                        </div>
                        <div className="bioSkills">
                            <i className="bioSkill"/> Ruby on Rails<br/>
                            <i className="bioSkill"/> Javascript, React, Redux<br/>
                            <i className="bioSkill"/> HTML5, CSS, Semantic UI, Bootstrap <br/>
                            <i className="bioSkill"/> SQL, SQLite3, PostgreSQL<br/>
                            <i className="bioSkill"/> RESTful architecture, MVC pattern<br/>
                            <i className="bioSkill"/> Git, APIs
                        </div>
                    </div>
                </div>
            </div>


        </div>


    )
}

export default AboutMe