import React from 'react'
import '../PageStyle/Contact.css'
import contactLinks from './contactLinks'

const Contact = () => {
    return (
        <div id="contact" className="page-section">
            <div className="contactGrid">
                <div className="contactCopy">
                    <div className="eyebrow">Contact</div>
                    <h1 className="section-heading">Let's Connect</h1>
                    <p className="contactIntro">
                        I'm always open to new opportunities, interesting conversations,
                        and collaborations. Feel free to reach out!
                    </p>

                    <div className="contactList">
                        {contactLinks.map((link) => (
                            <a
                                key={link.href}
                                className="contactRow"
                                href={link.href}
                                {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                            >
                                <img className="contactIcon" alt={link.iconAlt} src={link.icon}/>
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className="contactQuoteBox script-quote">
                        "If you have a project in mind, <br/>a question, or just want to say hello,<br/>
                        I'd love to hear from you."
                    </div>
                </div>

                <div className="contactImageWrap">
                    <img className="contactImage" alt="" src={require('../Media/contact-photo.jpeg')}/>
                </div>
            </div>
        </div>
    )
}

export default Contact