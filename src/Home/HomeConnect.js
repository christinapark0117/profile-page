import React from "react";
import contactLinks from "../Contact/contactLinks";
import contactPhoto from "../Media/contact-photo.jpeg";

const HomeConnect = () => {
    return (
        <section className="homeConnect">
            <div className="homeConnectImageWrap">
                <img className="homeConnectImage" src={contactPhoto} alt="" />
            </div>
            <div className="homeConnectCopy">
                <div className="eyebrow">Let's Connect</div>
                <p className="homeConnectHeading">
                    I'm always open to new opportunities, interesting conversations, and collaborations.
                </p>
                <div className="homeConnectList">
                    {contactLinks.map((link) => (
                        <a
                            key={link.href}
                            className="homeConnectRow"
                            href={link.href}
                            {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                        >
                            <img className="homeConnectIcon" alt={link.iconAlt} src={link.icon} />
                            <span className="homeConnectLabel">{link.label}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeConnect;
