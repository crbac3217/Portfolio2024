import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../css/WorksSection.css';

const MCam = () => {
    return (
        <div className='mb-3 mt-5'>
            <Col>
                <Row>
                    <Col xs = {6}>
                    <Row className='mb-3'>
                    Leveraging the extensive knowledge I gained in video game capture and cinematography during my time at Altar Creative, I developed a versatile plugin designed to enhance marketing and cinematic production within both Unreal Engine and Unity. This plugin, dubbed the "Marketing Camera," is tailored to accommodate a wide range of unexpected variables that typically arise during game development and cinematic creation.
                    </Row>
                    <Row className='mb-3'>
                    Key features of the Marketing Camera plugin include an advanced targeting system that allows the camera to lock onto specific bones within character models, ensuring smooth movement replication and dynamic framing. This is particularly useful for capturing detailed animations and intricate gameplay moments. Additionally, the plugin offers focal point adjustment capabilities, which enable precise control over depth of field and focus effects, enhancing the visual impact of each shot.
                    </Row>
                    <Row className='mb-3'>
                    To further expand its utility, I incorporated options for creating realistic camera shake effects, adding an extra layer of immersion to action-packed sequences. The plugin also includes a customizable greenscreen feature, allowing users to adjust the color, scale, and distance of the background, which simplifies the process of keying out scenes and integrating different visual elements in post-production.
                    </Row>
                    <Row>
                    This tool is a culmination of my experiences and learnings in game development cinematography, designed to provide developers and marketers with a powerful, intuitive solution for creating compelling video content directly within their favorite game engines.
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

export default MCam;
