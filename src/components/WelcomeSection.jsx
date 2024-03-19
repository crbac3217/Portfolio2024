import React, { useState, useEffect, useRef } from 'react';
import Hi from './Hi';
import JobText from './JobText';
import '../css/WelcomeSection.css';

const WelcomeSection = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const section2Ref = useRef(null);
    const rootElement = document.getElementById('root') || document.body;

    useEffect(() => {
        const handleScroll = () => {
            const position = rootElement.scrollTop;
            setScrollPosition(position);
        };

        rootElement.addEventListener('scroll', handleScroll);

        return () => {
            rootElement.removeEventListener('scroll', handleScroll);
        };
    }, []);

    let fullText = "Hi, my name is";
    let text = "Hi";
    let top = '50%';
    let size = '15';
    if (section2Ref.current) {
        const section2Top = section2Ref.current.offsetTop;
        const section1Bottom = section2Top - rootElement.clientHeight;
        const transitionStart = section1Bottom + (section2Top - section1Bottom) * 0.5; // Start transition later
        const progress = (scrollPosition - transitionStart) / (section2Top - transitionStart);

        if (scrollPosition >= transitionStart) {
            const charsToShow = Math.min(Math.round(progress * (fullText.length - 2)) + 2, fullText.length);
            text = fullText.substring(0, charsToShow);
        }

        if (scrollPosition >= section2Top) {
            top = '10%'; // Adjust top to stick to the top
        }
        if (scrollPosition >= (section1Bottom - section1Bottom / 2.005)) {
            size = '2';
        }
    }

    // Determine JobText style based on scroll position
    let jobTextStyle = {
        position: 'absolute',
        bottom: scrollPosition >= section2Ref.current?.offsetTop ? '10%' : 'auto',
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'black', // Example style, adjust as needed
        fontSize: `2vw`, // Example style, adjust as needed
    };

    return (
        <div className="welcome-section">
            <Hi size={size} top={top} text={text} />
            <div className="snap-point">
                <h2>Section 1</h2>
            </div>
            <div className="snap-point" ref={section2Ref}>
                <h2>Section 2</h2>
            </div>
            <div className="snap-point">
                <h2>Section 3</h2>
            </div>
            <div className="snap-point">
                <h2>Section 4</h2>
            </div>
            <div className="snap-point">
                <h2>Section 5</h2>
            </div>
            <div className="snap-point">
                <h2>Section 6</h2>
            </div>
            <JobText style={jobTextStyle} />
        </div>
    );
};

export default WelcomeSection;
