import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../../css/WorksSection.css';

const Portfolio = () => {
    return (
        <Container className="mb-3 mt-5">
            <Row className="align-items-center">
                <Col md={6} className="mb-4">
                    <Row>
                        <Col>
                            <img
                                src="/img/portWork.PNG"
                                alt="Portfolio Work 1"
                                className="img-fluid rounded workImages"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img
                                src="/img/portWork2.PNG"
                                alt="Portfolio Work 2"
                                className="img-fluid rounded workImages"
                            />
                        </Col>
                    </Row>
                </Col>
                <Col md={6}>
                    <p>For my professional portfolio, I embraced a range of modern technologies and design tools to create a dynamic and interactive showcase of my work. Utilizing React alongside Yarn for efficient project management and package handling, I constructed the frontend infrastructure, which enabled me to integrate sophisticated features smoothly.</p>
                    <p>To further enhance the visual appeal and interactivity of the portfolio, I incorporated Three.js, a powerful JavaScript library that allowed me to create detailed 3D animations that are responsive to user scrolling. This scroll-based animation technique makes navigating through the portfolio not only intuitive but also engaging, providing a visually immersive experience as users explore my projects and accomplishments.</p>
                    <p>Throughout the development process, I experimented with various design tools that I have become proficient with over time, applying best practices to ensure that the portfolio not only showcases my technical skills but also reflects my aesthetic sensibility and attention to detail. My goal was to create a portfolio that is not just a collection of projects but an interactive experience that captures the essence of my capabilities and style as a developer and designer. This approach has resulted in a portfolio that stands out for its creativity and technical prowess, offering visitors a compelling insight into my professional journey and skills.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Portfolio;
