import React from "react";
import { Link } from 'react-router-dom'
import info from '../Media/info.png'
import linkedin from '../Media/linkedinlogo.png'
import github from '../Media/githublogo.png'

const HomeText = () => {
    return (
        <div className="homeText">

            <div className="mainTitle animated slideInLeft">
                <p className="mainTitleLine2"><span className="mainTitleName">Welcome to Christina's Website</span> </p>
                <p>A Software Engineer at Your Service Reinventing Your Web Experience </p>
            </div>

            <div className="mainIcons">
                <Link to="/aboutme">
                    <img alt='info icon' className='icon' src={info}/>
                </Link>

                <a target='blank' href='https://www.linkedin.com/in/christina-park-75b879135/'>
                    <img alt='linkedin' className='icon' src={linkedin}/>
                </a>

                <a target='blank' href="https://github.com/christinapark0117?tab=overview&from=2020-06-01&to=2020-06-29">
                    <img alt='github' className='icon' src={github}/>
                </a>


            </div>

        </div>
    )
}

export default HomeText