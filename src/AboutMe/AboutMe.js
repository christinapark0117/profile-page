
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
                            A software engineer with expertise in Ruby on Rails and Javascript, React and Redux
                        </div>
                    </div>

                    <div className="bioDetail">
                        <div className="bioDetailTitle">
                            What's Her Background?
                        </div>
                        <div>
                            <p>Christina majored in Oboe Performance in college. She was a former Symphony Orchestra member, a teacher, and a school administrator. Always interested in art and design, she started designing websites as a hobby. She thought that it would be better if she could bring the websites that she designed alive on her own, so she decided to switch her career to software engineering. She started her career as a backend developer at <a href='https://www.beachbody.com/en/product/fitness_programs/homepage-v2.do?code=SEMB_BOD_GOOGLE&utm_medium=SEM&utm_source=GOOGLE&utm_campaign=BB_US_SEM_GGL_Brand_Core_Exact&utm_content=14092422213_124793629905&utm_term=beachbody_&gclid=CjwKCAjwyaWZBhBGEiwACslQowPhy0ejOjqZzrsw98xXHk18owF9qTqLxSW0tOO36TaMWLJpNljuOBoCLawQAvD_BwE&gclsrc=aw.ds'>Beachbody</a> and is currently working at <a href='https://www.fdic.gov/'>FDIC (Federal Deposit Insurance Corporation)</a> redesigning and rebuilding their .gov and intranet site. It’s been a great experience so far, and she’d like to find opportunities that can expand her knowledge of her current expertise as a full stack web developer.</p>
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