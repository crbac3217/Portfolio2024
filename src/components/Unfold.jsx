import React from 'react';
import '../css/WorksSection.css';

const Unfold = ({ item }) => {
    return (
        <div className='unfoldedSection-head'>
        <span className='line'>
        <div className='UnfoldLeft'>
            {item.organization}
        </div>
        <div className='UnfoldRight'>
            {item.year}
        </div>
        </span>
                <div className='UnfoldRight'> 
                    <div>
                        <span>Type:&nbsp;</span>
                        {item.type.map((type, index) => (
                            <span key={index} className="type">
                                {type}{index < item.type.length - 1 ? ', ' : ''}
                            </span>
                        ))}
                    </div>
                </div>
                <div className='UnfoldRight'> 
                    <div>
                        <span>Skills:&nbsp;</span>
                        {item.skills.map((skill, index) => (
                            <span key={index} className="skill">
                                {skill}{index < item.skills.length - 1 ? ', ' : ''}
                            </span>
                        ))}
                    </div>
                </div>
        </div>
    );
};

export default Unfold;
