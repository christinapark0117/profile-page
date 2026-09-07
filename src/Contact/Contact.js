import React from 'react'
import '../PageStyle/Contact.css'
import mailIcon from '../Media/mail.png'
import linkedinIcon from '../Media/linkedinlogo.png'
import githubIcon from '../Media/githublogo.png'

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
                        <a className="contactRow" href="mailto:christinapark0117@gmail.com">
                            <img className="contactIcon" alt="Email" src={mailIcon}/>
                            christinapark0117@gmail.com
                        </a>
                        <a className="contactRow" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/meet-christina-park/">
                            <img className="contactIcon" alt="LinkedIn" src={linkedinIcon}/>
                            linkedin.com/in/christinamspark
                        </a>
                        <a className="contactRow" target="_blank" rel="noreferrer" href="https://github.com/christinapark0117">
                            <img className="contactIcon" alt="GitHub" src={githubIcon}/>
                            github.com/christinamspark
                        </a>
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