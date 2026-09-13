import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../src/PageStyle/Navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const closeMenu = () => setIsOpen(false)

    return (
        <nav id="navbar">
            <div className="navInner">
                <Link className="navBrand" to="/" onClick={closeMenu}>CHRISTINA M. PARK</Link>

                <button
                    className={`navToggle ${isOpen ? 'navToggleOpen' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className={`navLinks ${isOpen ? 'navLinksOpen' : ''}`}>
                    <NavLink exact className="navLink" activeClassName="navLinkActive" to="/" onClick={closeMenu}>Home</NavLink>
                    <NavLink className="navLink" activeClassName="navLinkActive" to="/aboutme" onClick={closeMenu}>About</NavLink>
                    <NavLink className="navLink" activeClassName="navLinkActive" to="/experience" onClick={closeMenu}>Experience</NavLink>
                    <NavLink className="navLink" activeClassName="navLinkActive" to="/project" onClick={closeMenu}>Projects</NavLink>
                    <NavLink className="navLink" activeClassName="navLinkActive" to="/skills" onClick={closeMenu}>Skills</NavLink>
                    <NavLink className="navLink" activeClassName="navLinkActive" to="/contact" onClick={closeMenu}>Contact</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar