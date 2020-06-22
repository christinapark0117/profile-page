import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link id="homeTitle" className="navbar-brand" to="/">C M P</Link>
                </div>
                <div className="nav navbar-nav navbar-right navRight">
                    <Link className="navOption nav-item nav-link active" to="/aboutme">About Me</Link>
                    <Link className="navOption nav-item nav-link active" to="/project">Project</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar