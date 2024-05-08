import React, { useState, useEffect, useRef } from 'react';
import Hi from './Hi';
import JobText from './JobText';
import '../css/WelcomeSection.css';
import BenGDVid from '../assets/video/BenGD.webm';
import Game from './Game';

const WelcomeSection = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const section5Ref = useRef(null);
    const section6Ref = useRef(null);
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
    let J1 = "Graphic Designer";
    let J2 = "Game Designer";
    let J3 = "Motion Designer";
    let J4 = "3D Generalist";
    let J5 = "Frontend Developer";
    let jobText = "";
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
        jobText = J1;
    }
    if (section3Ref.current) {
        const section3Top = section3Ref.current.offsetTop;
        const section2Bottom = section3Top - rootElement.clientHeight;
        const transitionStart = section2Bottom + (section3Top - section2Bottom) * 0.5; // Start transition later
        const progress = (scrollPosition - transitionStart) / (section3Top - transitionStart);

        if (scrollPosition >= transitionStart) {
            const charsToShow = Math.min(Math.round(progress * (J2.length + J1.length)), (J2.length + J1.length));
            jobText = charsToShow < J1.length ? J1.substring(0, J1.length - charsToShow) : J2.substring(0, charsToShow - J1.length);
        }
    }
    if (section4Ref.current) {
        const section4Top = section4Ref.current.offsetTop;
        const section3Bottom = section4Top - rootElement.clientHeight;
        const transitionStart = section3Bottom + (section4Top - section3Bottom) * 0.5; // Start transition later
        const progress = (scrollPosition - transitionStart) / (section4Top - transitionStart);

        if (scrollPosition >= transitionStart) {
            const charsToShow = Math.min(Math.round(progress * (J3.length + J2.length)), (J3.length + J2.length));
            jobText = charsToShow < J2.length ? J2.substring(0, J2.length - charsToShow) : J3.substring(0, charsToShow - J2.length)
        }
    }
    if (section5Ref.current) {
        const section5Top = section5Ref.current.offsetTop;
        const section4Bottom = section5Top - rootElement.clientHeight;
        const transitionStart = section4Bottom + (section5Top - section4Bottom) * 0.5; // Start transition later
        const progress = (scrollPosition - transitionStart) / (section5Top - transitionStart);

        if (scrollPosition >= transitionStart) {
            const charsToShow = Math.min(Math.round(progress * (J4.length + J3.length)), (J4.length + J3.length));
            jobText = charsToShow < J3.length ? J3.substring(0, J3.length - charsToShow) : J4.substring(0, charsToShow - J3.length)
        }
    }
    if (section6Ref.current) {
        const section6Top = section6Ref.current.offsetTop;
        const section5Bottom = section6Top - rootElement.clientHeight;
        const transitionStart = section5Bottom + (section6Top - section5Bottom) * 0.5; // Start transition later
        const progress = (scrollPosition - transitionStart) / (section6Top - transitionStart);

        if (scrollPosition >= transitionStart) {
            const charsToShow = Math.min(Math.round(progress * (J5.length + J2.length)), (J5.length + J4.length));
            jobText = charsToShow < J4.length ? J4.substring(0, J4.length - charsToShow) : J5.substring(0, charsToShow - J4.length)
        }
    }


    // Determine JobText style based on scroll position
    let jobTextStyle = {
        position: 'absolute',
        bottom: scrollPosition >= section2Ref.current?.offsetTop ? '10%' : 'auto',
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'white',
        fontSize: `2em`,
    };

    return (
        <div className="welcome-section">
            <Hi size={size} top={top} text={text} />
            <div className="snap-point">
            </div>
            <div className="snap-point" ref={section2Ref}>
            <video src={BenGDVid} alt="Ben" className='benNames' autoPlay loop muted/>
            </div>
            <div className="snap-point" ref={section3Ref}>
                <Game></Game>
            </div>
            <div className="snap-point" ref={section4Ref}>
                <h2>Section 4</h2>
            </div>
            <div className="snap-point" ref={section5Ref}>
                <h2>Section 5</h2>
            </div>
            <div className="snap-point" ref={section6Ref}>
                <h2>Section 6</h2>
            </div>
            <JobText text = {jobText} style={jobTextStyle} />
        </div>
    );
};

export default WelcomeSection;
