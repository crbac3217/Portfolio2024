import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../../css/WorksSection.css';

const Arcus = () => {
    return (
        <Container className="mb-3 mt-5">
            <Row className="align-items-center">
                {/* Image Section */}
                <Col md={6} className="mb-4">
                    <Row>
                        <Col xs={12} className="mb-3">
                            <img
                                src="/img/arcus2.jpg"
                                alt="Arcus Poster"
                                className="img-fluid rounded workImages"
                            />
                        </Col>
                        <Col xs={6}>
                            <img
                                src="/img/arcuswork1.jpg"
                                alt="Arcus Work 1"
                                className="img-fluid rounded workImages"
                            />
                        </Col>
                        <Col xs={6}>
                            <img
                                src="/img/arcuswork2.jpg"
                                alt="Arcus Work 2"
                                className="img-fluid rounded workImages"
                            />
                        </Col>
                    </Row>
                </Col>

                {/* Text Section */}
                <Col md={6}>
                    <p>
                        For my personal passion project, 'Arcus,' I developed a prototype for a game where I handled all aspects of coding and visual asset creation. Utilizing Blender, I modeled and animated the characters, then imported these models into Unity to render them into pixel art sprite sheets. This method allowed me to maintain a retro aesthetic while leveraging modern 3D modeling tools. Additionally, I generated normal maps for these assets, enabling the sprites to interact dynamically with in-game lighting, enhancing the visual depth and realism.
                    </p>
                    <p>
                        The structure of 'Arcus' is based on scriptable objects within Unity, which I used to build a comprehensive database for the game’s item system. This approach facilitated a modular and easily expandable framework, essential for the roguelike nature of the game where variety and replayability are key. The levels in 'Arcus' are procedurally generated, offering new experiences and challenges in each session, keeping the gameplay fresh and engaging.
                    </p>
                    <p>
                        One of the more technical challenges I tackled was coding the A* (A-star) pathfinding algorithm for the enemies. This was crucial for creating intelligent and challenging AI behaviors, allowing enemies to navigate complex terrains and chase the player effectively. Working on 'Arcus' was incredibly educational; I gained profound insights into game development, from the intricacies of 3D animation and pixel art conversion to the complexities of AI programming and procedural generation. This project not only fueled my passion for game design but also significantly sharpened my technical skills in software development and graphic design.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Arcus;
