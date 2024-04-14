import React, { useState, useEffect } from 'react';
import Thumbnail from './Thumbnail';
import Unfold from './Unfold';
import '../css/WorksSection.css';
import image1 from '../assets/img/AltarLogo_2016_MASTER.png';
import image2 from '../assets/img/lmax.png';

const worksData = [
    {
        id: 1,
        title: 'Project 1',
        type: 'Web Design',
        skills: ['HTML', 'CSS', 'JavaScript'],
        description: 'Detailed description of Project 1.',
        image: image1
    },
    {
        id: 2,
        title: 'Project 2',
        type: 'Graphic Design',
        skills: ['Photoshop', 'Illustrator'],
        description: 'Detailed description of Project 2.',
        image: image2
    },
    // Add more items as needed...
];

const WorksSection = () => {
    const [thumbnailPosition, setThumbnailPosition] = useState({ x: 0, y: 0, visible: false });
    const [hoveredItem, setHoveredItem] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

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
    }, [hoveredItem]);

    const handleMouseEnter = (item) => {
        setHoveredItem(item);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
        setThumbnailPosition(prev => ({ ...prev, visible: false }));
    };

    const handleClick = (item, event) => {
        event.stopPropagation();
        setSelectedItem(selectedItem === item ? null : item);
    };

    return (
        <div className='works-container'>
            <h2>Works</h2>
            <ul className="works-list">
                {worksData.map(item => (
                    <li key={item.id} 
                        className="work-item"
                        onMouseEnter={() => handleMouseEnter(item)}
                        onMouseLeave={handleMouseLeave}>
                        <div className="work-header" onClick={(e) => handleClick(item, e)}>
                            <h3>{item.title}</h3>
                        </div>
                        {selectedItem === item && (
                            <div className="work-description">
                                <Unfold item={selectedItem}/>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            {hoveredItem && thumbnailPosition.visible && (
                <Thumbnail
                    position={thumbnailPosition}
                    image = {hoveredItem.image}
                />
            )}
        </div>
    );
};

export default WorksSection;
