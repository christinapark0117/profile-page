import React, { useState } from 'react'
import '../PageStyle/Experience.css'
import experience from './experienceData'

const Experience = () => {
    // Only the first (most recent) job starts open
    const [openItems, setOpenItems] = useState(() => new Set([0]))

    const toggle = (index) => {
        setOpenItems((prev) => {
            const next = new Set(prev)
            next.has(index) ? next.delete(index) : next.add(index)
            return next
        })
    }

    return (
        <div id="experience" className="page-section">
            <div className="eyebrow">Experience</div>
            <h1 className="section-heading">Turning Ideas into<br/>Real-World Impact</h1>

            <div className="timeline">
                {experience.map((job, i) => {
                    const isOpen = openItems.has(i)
                    const panelId = `experience-panel-${i}`
                    return (
                        <div className={`timelineItem ${isOpen ? "timelineItemOpen" : ""}`} key={job.role + job.years}>
                            <div className="timelineDot" />
                            <div className="timelineContent">
                                <button
                                    type="button"
                                    className="timelineHeader"
                                    onClick={() => toggle(i)}
                                    aria-expanded={isOpen}
                                    aria-controls={panelId}
                                >
                                    <div>
                                        <div className="timelineRole">{job.role}</div>
                                        {job.org && <div className="timelineOrg">{job.org}</div>}
                                    </div>
                                    <div className="timelineMeta">
                                        <span className="timelineYears">{job.years}</span>
                                        <span className="timelineChevron" aria-hidden="true" />
                                    </div>
                                </button>
                                <div className="timelinePanel" id={panelId}>
                                    <div className="timelinePanelInner">
                                        <ul className="timelineBullets">
                                            {job.bullets.map((b) => <li key={b}>{b}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Experience
