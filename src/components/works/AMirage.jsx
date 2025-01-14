import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../../css/WorksSection.css';

const AMirage = () => {
    return (
        <Container className="mb-3 mt-5">
            <Row className="align-items-center">
                {/* Image Section */}
                <Col md={6} className="mb-4">
                    <Row className="mb-3">
                        <Col>
                            <img
                                src="/img/AMirage.png"
                                alt="Assassin's Creed Mirage"
                                className="img-fluid rounded workImages"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <iframe
                                className="workImages"
                                src="https://www.youtube.com/embed/LbpQ8940EZI"
                                title="Assassin's Creed Mirage PC Features Trailer"
                            ></iframe>
                        </Col>
                    </Row>
                </Col>

                {/* Text Section */}
                <Col md={6}>
                    <p>
                        For the "Assassin's Creed Mirage: PC Features Trailer," produced at Altar Creative, I took on a multifaceted role that combined technical precision with creative storytelling. As part of the game capture and trailer production team, I was responsible for ensuring the captured footage aligned seamlessly with the storyboard and the vision for the final product.
                    </p>
                    <p>
                        The process began with playing through the build to explore its full potential. I meticulously captured interesting gameplay moments, dynamic cutscenes, and unique visual elements that would best represent the game's features. Finding the right place and look for the storyboarded shots required not only a keen artistic eye but also a deep understanding of the game world and its mechanics.
                    </p>
                    <p>
                        Acting as a database and reference point for this project, I contributed by thoroughly exploring the game’s console commands and native tools built into Anvil, the game engine. For example, I discovered and addressed an issue where leaves and flowers would turn translucent when passing close by. By digging into the console commands, I identified the mechanism causing this and successfully disabled it, ensuring the shots remained visually cohesive.
                    </p>
                    <p>
                        Additionally, I utilized tools like <code>imgui</code> to disable AI spawns, which allowed me to capture scenes consistently without NPC interference. These modifications were crucial for creating polished footage and for capturing variations of key scenes when needed.
                    </p>
                    <p>
                        This project challenged me to combine game capture techniques with technical problem-solving, ensuring the trailer reflected the game's beauty and technical prowess. My ability to adapt to the game's tools and mechanics while meeting creative demands played a significant role in the success of this project.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default AMirage;
