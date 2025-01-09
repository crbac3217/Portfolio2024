import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../../css/WorksSection.css';

const AndH = () => {
    return (
        <Container className="mb-3 mt-5">
            <Row className="align-items-center">
                {/* Image Section */}
                <Col md={6} className="mb-4">
                    <Row>
                        <Col xs={12} className="mb-3">
                            <img
                                src="/img/AHThumb.jpg"
                                alt="Arm & Hammer Poster"
                                className="img-fluid rounded workImages"
                            />
                        </Col>
                        <Col xs={6}>
                            <img
                                src="/img/AHwork1.jpg"
                                alt="Arm & Hammer Work 1"
                                className="img-fluid rounded workImages"
                            />
                        </Col>
                        <Col xs={6}>
                            <img
                                src="/img/AHwork2.jpg"
                                alt="Arm & Hammer Work 2"
                                className="img-fluid rounded workImages"
                            />
                        </Col>
                    </Row>
                </Col>

                {/* Text Section */}
                <Col md={6}>
                    <p>
                        In crafting this poster for my advanced typography class, I aimed to fully capture the iconic style of Arm & Hammer baking soda packaging. I meticulously integrated key elements such as its typeface, graphical layout, and color schemes. My goal was to preserve the brand's classic appeal that combines practicality with a touch of nostalgia, while also infusing it with a modern twist. This "new-tro" style approach rejuvenated the brand’s traditional image, making it relevant to today’s design sensibilities while still honoring its heritage.
                    </p>
                    <p>
                        Choosing the right typeface was a pivotal part of the design process. I selected a font that not only underscores the uniqueness of Arm & Hammer but also supports the overall function and contemporary vibe of the packaging. The highlighted typeface brings out a reliable, time-honored feel blended with modern utility, reflecting the brand's evolution while maintaining its foundational values. This strategy not only retained the core identity of the brand but also broadened its appeal, showcasing its versatility and relevance in the current market.
                    </p>
                    <p>
                        This poster represents my skills in merging classic and modern design elements to craft a compelling narrative through typography. The careful balance of type, color, and layout has resulted in a dynamic visual that communicates the product’s features and celebrates Arm & Hammer’s lasting legacy. This project exemplifies thoughtful design and highlights how strategic use of typography can shape brand perception and enhance its market standing.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default AndH;
