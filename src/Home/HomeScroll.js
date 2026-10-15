import React, { useEffect, useRef, useState } from "react";

// Sections the button steps through, marked with data-home-section in HomeContainer
const getSections = () => [...document.querySelectorAll("[data-home-section]")];

// The first section whose top is still below the top of the window
const findNextSection = () =>
    getSections().find((section) => section.getBoundingClientRect().top > 10);

const isAtPageBottom = () =>
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;

// Room kept between the button and a divider line or photo
const CLEARANCE = 16;
// The button rests this far from the bottom of the window (matches bottom: 5vh in the CSS)
const restingBottom = () => window.innerHeight * 0.05;
// Only lift the button while the line is in the lower part of the window
const LIFT_ZONE = 0.55;

// Top edges of everything that draws a line across the page: each section's border and the footer's
const getDividerEdges = () =>
    [...getSections(), document.querySelector(".homeFooter")]
        .filter(Boolean)
        .map((el) => el.getBoundingClientRect().top);

// Everything the button shouldn't sit on top of. On narrow windows the content reaches the
// left edge where the button lives, so these can end up behind it.
const CONTENT_SELECTORS = [
    ".homeSectionHeader",
    ".homeSectionIntro",
    ".journeyItem",
    ".journeyDot",
    ".featuredCard",
    ".featuredControls",
    ".homeConnectImageWrap",
    ".homeConnectCopy",
];

const getContentRects = () => {
    const rects = CONTENT_SELECTORS.flatMap((selector) =>
        [...document.querySelectorAll(selector)].map((el) => el.getBoundingClientRect())
    );
    // The timeline's vertical line is drawn by a pseudo-element, so use a thin strip at its left edge
    const timeline = document.querySelector(".journeyTimeline");
    if (timeline) {
        const t = timeline.getBoundingClientRect();
        rects.push({ top: t.top, bottom: t.bottom, left: t.left - 1, right: t.left + 1 });
    }
    return rects;
};

const HomeScroll = () => {
    const buttonRef = useRef(null);
    const [bottom, setBottom] = useState(null);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const update = () => {
            const button = buttonRef.current;
            if (!button) return;

            const height = button.offsetHeight;
            const windowHeight = window.innerHeight;
            const restTop = windowHeight - restingBottom() - height;

            // A line coming up from below that would cross the resting button: sit just above it
            const blockingEdge = getDividerEdges().find(
                (edge) => edge > windowHeight * LIFT_ZONE && edge < windowHeight - restingBottom() + CLEARANCE
            );
            const nextBottom = blockingEdge !== undefined
                ? Math.max(windowHeight - blockingEdge + CLEARANCE, restingBottom())
                : restingBottom();

            // With the final position, make sure no content (text, cards, timeline, photo) sits behind the button
            const top = windowHeight - nextBottom - height;
            // Measure the visible "↓ Scroll" text rather than the button box, which is wider
            const range = document.createRange();
            range.selectNodeContents(button);
            const b = range.getBoundingClientRect();
            const zone = { top: top - CLEARANCE, bottom: top + height + CLEARANCE, left: b.left - 8, right: b.right + 8 };
            const overContent = getContentRects().some((r) =>
                r.top < zone.bottom && r.bottom > zone.top && r.left < zone.right && r.right > zone.left
            );

            setBottom(nextBottom === restingBottom() ? null : nextBottom);
            setVisible(Boolean(findNextSection()) && !isAtPageBottom() && !overContent && top >= 0 && restTop > 0);
        };
        update();
        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        return () => {
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, []);

    const scrollToNext = () => {
        const next = findNextSection();
        if (next) {
            window.scrollTo({ top: window.scrollY + next.getBoundingClientRect().top, behavior: "smooth" });
        }
    };

    return (
        <button
            ref={buttonRef}
            type="button"
            className={`homeScroll ${visible ? "" : "homeScrollHidden"}`}
            style={bottom !== null ? { bottom: `${bottom}px` } : undefined}
            onClick={scrollToNext}
            aria-label="Scroll to next section"
            tabIndex={visible ? 0 : -1}
        >
            <span className="homeScrollArrow">↓</span> Scroll
        </button>
    );
};

export default HomeScroll;
