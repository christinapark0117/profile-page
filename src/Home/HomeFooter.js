import React from "react";
import { Link } from "react-router-dom";

const footerLinks = [
    { to: "/", label: "Home" },
    { to: "/aboutme", label: "About" },
    { to: "/experience", label: "Experience" },
    { to: "/project", label: "Projects" },
    { to: "/skills", label: "Skills" },
    { to: "/contact", label: "Contact" },
];

const HomeFooter = () => {
    return (
        <footer className="homeFooter">
            <div className="homeFooterInner">
                <Link className="homeFooterBrand" to="/">CHRISTINA M. PARK</Link>
                <nav className="homeFooterLinks">
                    {footerLinks.map((link) => (
                        <Link key={link.to} className="homeFooterLink" to={link.to}>{link.label}</Link>
                    ))}
                </nav>
                <div className="homeFooterCopy">
                    © {new Date().getFullYear()} Christina M. Park. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default HomeFooter;
