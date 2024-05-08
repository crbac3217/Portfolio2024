import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import Thumbnail from './Thumbnail';
import Unfold from './Unfold';
import '../css/WorksSection.css';
import image1 from '../assets/img/AltarLogo_2016_MASTER.png';
import image2 from '../assets/img/lmax.png';
import AandH from './works/AandH';
import Arcus from './works/Arcus';
import DbdTome16 from './works/DbDTome16';
import Dkin from './works/Dkin';
import FluidTypo from './works/FluidTypo';
import MCam from './works/MCam';
import Omm from './works/Omm';
import Portfolio from './works/PortFolio';
import Scribble from './works/Scribble';
import SnB101 from './works/SnB101';

const worksData = [
    {
        title: 'Arm and Hammer Baking Soda',
        year:'2018',
        organization: 'School - OCAD',
        type: ['Graphic Design'],
        skills: ['Typography', 'Adobe Illustrator'],
        body: AandH,
        image: image1
    },
    {
        title: 'Fluid Typography',
        year: '2018',
        organization: 'School - OCAD',
        type: ['Graphic Design'],
        skills: ['Unity', 'Typography'],
        body: FluidTypo,
        image: image2
    },
    {
        title: 'Scribble Kitty Adventure',
        year: '2020',
        organization: 'School - OCAD',
        type: ['Game Design'],
        skills: ['Unity', 'Blender', 'C#'],
        body: Scribble,
        image: image2
    },
    {
        title: 'Arcus',
        year: '2022',
        organization: 'Personal',
        type: ['Game Design'],
        skills: ['Unity', 'Blender', 'C#', 'Adobe Photoshop'],
        body: Arcus,
        image: image2
    },
    {
        title: 'Dead by Daylight | Tome 16: EXISTENCE | Reveal Trailer',
        year: '2023',
        organization: 'Work - Altar Creative',
        type: ['Game Engine Trailer', 'Motion Design', 'Game Capture'],
        skills: ['Adobe After Effects', 'VFX', 'Unreal Engine', 'Adobe Photoshop'],
        body: DbdTome16,
        image: image2
    },
    {
        title: 'Omm',
        year: '2023',
        organization: 'Personal',
        type: ['Front End Development', 'UI/UX Design'],
        skills: ['Adobe XD', 'Adobe Illustrator', 'Blender', 'Adobe Photoshop', 'Flutter'],
        body: Omm,
        image: image2
    },
    {
        title: 'Skull and Bones: Gameplay Deep Dive Trailer',
        year: '2023',
        organization: 'Work - Altar Creative',
        type: ['Gameplay Capture', 'Motion Design', 'Game Capture'],
        skills: ['Adobe After Effects', 'VFX', 'Adobe Photoshop'],
        body: SnB101,
        image: image2
    },
    {
        title: 'Marketing Camera',
        year: '2023',
        organization: 'Work - Altar Creative',
        type: ['Game Design'],
        skills: ['Unity', 'C#', 'Unreal Engine', 'C++'],
        body:MCam,
        image: image2
    },
    {
        title: 'Dragonkin: The Banished - Official Announcement Trailer',
        year: '2024',
        organization: 'Work - Altar Creative',
        type: ['3D Modelling', 'Game Engine Trailer'],
        skills: ['Unreal Engine', '3D Modelling', 'Quixel Mixer', 'Marvelous Designer', 'Adobe Photoshop', 'Adobe Substance Painter', 'Autodesk Maya'],
        body: Dkin,
        image: image2,
    },
    {
        title: 'Portfolio',
        year: '2024',
        organization: 'Personal',
        type: ['FrontEnd Development'],
        skills: ['React', '3D Modelling', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe After Effects'],
        body: Portfolio,
        image: image2,
    }
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
        <div className='works-bg'>
        <div className='works-container'>
        <h2 className='title display-5'>Works</h2>
            <ul className="works-list">
            {worksData.map((item, index) => (
            <li key={index} 
                className={`work-item ${selectedItem === item ? 'work-item-selected' : ''}`}>
                <div className="work-header" onClick={(e) => handleClick(item, e)} onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}>
                    <h3 className='work-title'>{item.title}</h3>
                </div>
                {selectedItem === item && (
                    <div>
                        <Unfold item={selectedItem}/>
                        <selectedItem.body></selectedItem.body>
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
        </div>
    );
};

export default WorksSection;
