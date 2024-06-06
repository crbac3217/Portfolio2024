import React, { useState } from 'react';
import '../css/FE.css';

const FrontEnd = ({}) => {
    const [isConcave, setIsConcave] = useState(false);

    const handleClick = () => {
        setIsConcave(!isConcave);
    };

    return (
        <div className='front-parent'>
            <div className='letter-box b'>
                <span className="b">B</span>
                <div className="b-background">B</div>
            </div>
            <div className='letter-box e' onClick={handleClick}>
                <span className={`e ${isConcave ? 'concave' : ''}`}>E</span>
            </div>
            <div className='letter-box n'>
                <span className="n">N</span>
                <span className="n-glitch n-glitch-before">N</span>
                <span className="n-glitch n-glitch-after">N</span>
            </div>
        </div>
    );
};

export default FrontEnd;
