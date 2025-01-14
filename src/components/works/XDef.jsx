import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../../css/WorksSection.css';

const XDef = () => {
    return (
        <Container className="mb-3 mt-5">
            <Row className="align-items-center">
                {/* Image Section */}
                <Col md={6} className="mb-4">
                    <Row className="mb-3">
                        <Col>
                            <img
                                src="/img/XDefThumb.png"
                                alt="XDefiant Thumbnail"
                                className="img-fluid rounded workImages"
                            />
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <img
                                src="/img/XDef.png"
                                alt="XDefiant Secondary"
                                className="img-fluid rounded workImages"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <iframe
                                className="workImages"
                                src="https://youtu.be/UJiQzUEuLYE?si=4GqSJ-KTxnx8xHS2"
                                title="XDefiant Season 1 Reveal Trailer"
                            ></iframe>
                        </Col>
                    </Row>
                </Col>

                {/* Text Section */}
                <Col md={6}>
                    <p>
                        The "XDefiant - Season 1 Reveal Trailer" was a thrilling project where I combined elements from both game capture and cinematic editing. This trailer served as a showcase for Ubisoft's vibrant new content in XDefiant, blending polished in-game footage with cinematic effects.
                    </p>
                    <p>
                        My role began with diving into the game itself, exploring its mechanics and environments to identify compelling moments and features to capture. I also researched tools and techniques to maximize the quality of my captures, ensuring every shot aligned with the storyboard's vision.
                    </p>
                    <p>
                        In addition to in-game work, I used Autodesk Maya to render pre-made scenes, adjusting lighting and environmental settings to enhance the visuals and create a polished final product. These adjustments ensured a consistent look across all footage, maintaining Ubisoft's high production standards.
                    </p>
                    <p>
                        This project challenged me to balance technical expertise with creative storytelling, ensuring that every captured and edited frame contributed to an engaging, high-quality promotional trailer.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default XDef;
