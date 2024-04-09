import React, { useState, useEffect } from 'react';
import '../css/WorksSection.css';

const worksData = [
    {
        id: 1,
        title: 'Project 1',
        type: 'Web Design',
        skills: ['HTML', 'CSS', 'JavaScript'],
        description: 'Detailed description of Project 1.'
    },
    {
        id: 2,
        title: 'Project 2',
        type: 'Graphic Design',
        skills: ['Photoshop', 'Illustrator'],
        description: 'Detailed description of Project 2.'
    },
    // Add more items as needed...
];

const WorksSection = () => {
    const [thumbnailPosition, setThumbnailPosition] = useState({ x: 0, y: 0, visible: false });
    const [hoveredItem, setHoveredItem] = useState(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (hoveredItem) {
                setThumbnailPosition({ x: e.clientX, y: e.clientY, visible: true });
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [hoveredItem]); // Dependency to update position only when an item is hovered

    const handleMouseEnter = (item) => {
        setHoveredItem(item);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
        setThumbnailPosition(prev => ({ ...prev, visible: false }));
    };

    const getThumbnailColor = (itemId) => {
        // Example logic to change color, can be adjusted as needed
        return itemId === 2 ? 'red' : 'blue';
    };

    return (
        <div className='works-container'>
            <h2>Works</h2>
            <ul className="works-list">
                {worksData.map(item => (
                    <li key={item.id} className="work-item"
                        onMouseEnter={() => handleMouseEnter(item)}
                        onMouseLeave={handleMouseLeave}>
                        <h3>{item.title}</h3>
                    </li>
                ))}
            </ul>
            {hoveredItem && thumbnailPosition.visible && (
                <div style={{
                    position: 'fixed',
                    left: thumbnailPosition.x,
                    top: thumbnailPosition.y,
                    width: '100px',
                    height: '100px',
                    backgroundColor: getThumbnailColor(hoveredItem.id),
                    transform: 'translate(-50%, -50%)',
                    display: 'block'
                }} />
            )}
        </div>
    );
};

export default WorksSection;
