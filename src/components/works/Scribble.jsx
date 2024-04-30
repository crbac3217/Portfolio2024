import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../css/WorksSection.css';

const Scribble = () => {
    return (
        <div className='mb-3 mt-5'>
            <Col>
                <Row>
                    <Col xs = {6}>
                    <Row className='mb-3'>
                    During my university's game engines class, I spearheaded a project called "Scribble Kitty Adventures," where I was responsible for both the overall design and programming. This game blends platformer and puzzle elements, leveraging a unique gameplay mechanic centered around player-drawn solutions to challenges encountered in the game.
                    </Row>
                    <Row className='mb-3'>
                    The core gameplay mechanism of "Scribble Kitty Adventures" is built upon a pre-existing algorithm capable of interpreting an array of dots as continuous drawings. This innovative use of technology allows players to interact directly with the game world in creative ways. For instance, to aid the character in navigating the environment, players can draw bridges to cross gaps, sketch bombs to clear obstacles, or create slash lines to deactivate traps. Each drawing directly influences the game scenario, providing a tangible sense of agency and accomplishment.
                    </Row>
                    <Row>
                    "Scribble Kitty Adventures" is designed to be intuitive yet challenging, encouraging players to think creatively while engaging with basic platformer dynamics. The inclusion of drawing as a method of problem-solving not only makes the gameplay unique but also deeply personalizes the player's interaction with the game, as each solution is directly crafted by the player's hand. This project allowed me to deeply explore the intersection of creative game design and technical programming, resulting in a fun and engaging educational experience.
                    </Row>
                    </Col>
                    <Col xs = {6}>
                    <Row>
                    This is where the image goes
                    </Row>
                    <Row>
                    This is where the image goes
                    </Row>
                    </Col>
                </Row>
            </Col>
        </div>
    );
};

export default Scribble;
