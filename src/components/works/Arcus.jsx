import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../css/WorksSection.css';


const Arcus = () => {
    return (
        <div className='mb-3 mt-5'>
            <Col>
                <Row>
                    <Col xs = {6}>
                    <Row className='mb-3'>
                    For my personal passion project, 'Arcus,' I developed a prototype for a game where I handled all aspects of coding and visual asset creation. Utilizing Blender, I modeled and animated the characters, then imported these models into Unity to render them into pixel art sprite sheets. This method allowed me to maintain a retro aesthetic while leveraging modern 3D modeling tools. Additionally, I generated normal maps for these assets, enabling the sprites to interact dynamically with in-game lighting, enhancing the visual depth and realism.
                    </Row>
                    <Row className='mb-3'>
                    The structure of 'Arcus' is based on scriptable objects within Unity, which I used to build a comprehensive database for the game’s item system. This approach facilitated a modular and easily expandable framework, essential for the roguelike nature of the game where variety and replayability are key. The levels in 'Arcus' are procedurally generated, offering new experiences and challenges in each session, keeping the gameplay fresh and engaging.
                    </Row>
                    <Row>
                    One of the more technical challenges I tackled was coding the A* (A-star) pathfinding algorithm for the enemies. This was crucial for creating intelligent and challenging AI behaviors, allowing enemies to navigate complex terrains and chase the player effectively. Working on 'Arcus' was incredibly educational; I gained profound insights into game development, from the intricacies of 3D animation and pixel art conversion to the complexities of AI programming and procedural generation. This project not only fueled my passion for game design but also significantly sharpened my technical skills in software development and graphic design.
                    </Row>
                    </Col>
                    <Col xs = {6}>
                    <Row>
                    <img src= '/img/arcus2.jpg' alt='Tome16' className='workImages'/>
                    </Row>
                    <Row>
                    <img src= '/img/arcuswork1.jpg' alt='Tome16' className='workImages'/>
                    </Row>
                    <Row>
                    <img src= '/img/arcuswork2.jpg' alt='Tome16' className='workImages'/>
                    </Row>
                    </Col>
                </Row>
            </Col>
        </div>
    );
};

export default Arcus;
