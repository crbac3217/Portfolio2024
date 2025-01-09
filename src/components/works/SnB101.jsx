import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../../css/WorksSection.css';

const SnB101 = () => {
    return (
        <Container className="mb-3 mt-5">
            <Row className="align-items-center">
                <Col md={6} className="mb-4">
                    <Row>
                        <Col>
                            <img
                                src="/img/SnB1.png"
                                alt="Skull and Bones Screenshot"
                                className="img-fluid rounded workImages"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <iframe
                                className="workImages"
                                src="https://www.youtube.com/embed/teZaV3bOMxY"
                                title="Skull and Bones Trailer"
                            ></iframe>
                        </Col>
                    </Row>
                </Col>
                <Col md={6}>
                    <p>Working on the "Skull and Bones Gameplay Deep Dive Trailer" at Altar Creative was one of my first significant assignments, and it turned out to be a great introduction to the world of game trailer production. I got hands-on with several aspects of the project, each offering a unique set of challenges and learning opportunities.</p>
                    <p>I was heavily involved in the gameplay capture, where I had to quickly learn and master different tools to capture the best possible footage of the game. This process wasn’t just about recording; it was about choosing scenes that effectively showcased the game’s dynamics and visual appeal. It was crucial to select moments that highlighted the thrill and strategy of the high-seas battles that are central to "Skull and Bones."</p>
                    <p>In my role focused on visual effects and composite editing for the trailer, I delved deep into the game’s Anvil engine to fully grasp and utilize its capabilities. Understanding the engine's intricacies was crucial, especially when working with "Skull and Bones" unique in-game systems like the server-client model, dynamic weather generation, and sophisticated lighting and sky layering systems. This knowledge allowed me to enhance the footage not just visually but also contextually, ensuring that the effects I added would seamlessly integrate and highlight these complex game mechanics. My goal was to bring out the best in these features, making them stand out in the trailer to give viewers a real sense of the game’s atmospheric and immersive environment.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default SnB101;
