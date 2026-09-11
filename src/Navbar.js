import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../src/PageStyle/Navbar.css'

const Navbar = () => {
    return (
        <nav id="navbar">
            <div className="navInner">
                <Link className="navBrand" to="/">CHRISTINA M. PARK</Link>

                <div className="navLinks">
                    <NavLink exact className="navLink" activeClassName="navLinkActive" to="/">Home</NavLink>
                    <NavLink className="navLink" activeClassName="navLinkActive" to="/aboutme">About</NavLink>
                    <NavLink className="navLink" activeClassName="navLinkActive" to="/experience">Experience</NavLink>
                    <NavLink className="navLink" activeClassName="navLinkActive" to="/project">Projects</NavLink>
                    <NavLink className="navLink" activeClassName="navLinkActive" to="/skills">Skills</NavLink>
                    <NavLink className="navLink" activeClassName="navLinkActive" to="/contact">Contact</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar