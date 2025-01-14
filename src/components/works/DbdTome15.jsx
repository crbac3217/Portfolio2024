import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../../css/WorksSection.css';

const DbdTome15 = () => {
    return (
        <Container className="mb-3 mt-5">
            <Row className="align-items-center">
                {/* Image Section */}
                <Col md={6} className="mb-4">
                    <Row className="mb-3">
                        <Col>
                            <img
                                src="/img/Tome15.png"
                                alt="Tome15"
                                className="img-fluid rounded workImages"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <iframe
                                className="workImages"
                                src="https://www.youtube.com/embed/5oQ89V-H1x4"
                                title="Tools of Torment Mid Chapter Trailer"
                            ></iframe>
                        </Col>
                    </Row>
                </Col>

                {/* Text Section */}
                <Col md={6}>
                    <p>
                        The "Dead by Daylight | Tools of Torment Mid Chapter" project was my first time working on a semi-in-engine trailer at Altar Creative. This marked an exciting milestone in my career as I was tasked with creating a polished promotional trailer using both in-game assets and custom visual effects.
                    </p>
                    <p>
                        I gained access to the studio's Perforce server to retrieve necessary assets, including models, textures, and animations. I had to ensure that missing textures—often local to the Character Designer—were properly imported and linked on my end. This required meticulous attention to detail and close collaboration with the design team to maintain consistency and quality.
                    </p>
                    <p>
                        For this project, I recreated character and environmental setups in Unreal Engine, ensuring everything was rendered accurately and aligned with the game's original aesthetic. This process also included addressing missing dependencies and fine-tuning materials for high-quality rendering.
                    </p>
                    <p>
                        Additionally, I used Adobe After Effects for motion design, creating dynamic visual effects that enhanced the cinematic experience of the trailer. My contributions extended to ensuring a cohesive visual style, blending in-engine shots with custom post-production elements to create a polished and engaging final product.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default DbdTome15;
