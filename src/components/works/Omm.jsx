import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../css/WorksSection.css';

const Omm = () => {
    return (
        <div className='mb-3 mt-5'>
            <Col>
                <Row>
                    <Col xs = {6}>
                    <Row className='mb-3'>
                    Working on "Omm," a gift-icon platform application, provided me with an invaluable opportunity to enhance my skills in frontend programming and user experience design. Collaborating closely with a few friends, I focused on delivering a seamless and engaging user interface, ensuring the application was both functional and visually appealing.
                    </Row>
                    <Row className='mb-3'>
                    For the development framework, we selected Flutter, known for its ability to produce natively compiled applications for mobile, web, and desktop from a single codebase. This choice was crucial in achieving a consistent and fluid user experience across various devices. We integrated AWS RDS for our backend database needs, leveraging its robust scalability and security features to manage our data effectively.
                    </Row>
                    <Row className='mb-3'>
                    During the development phase, I employed a design approach that resonated with current trends, specifically neumorphism. This style is characterized by soft, inset shadows and light color palettes, creating a sense of depth and realism almost akin to digital embossing. Neumorphism was particularly trending in UI design at the time, making it a strategic choice to give the app a modern and fresh look while enhancing user interaction through intuitive and tactile-like design elements.
                    </Row>
                    <Row>
                    Although the project is currently on pause, the practical experience I gained is invaluable. I learned extensively about creating intuitive user interfaces, integrating advanced backend solutions, and employing cutting-edge design trends like neumorphism. This project not only honed my technical skills in using Flutter and AWS but also deepened my understanding of effective UI/UX strategies in app development.
                    </Row>
                    </Col>
                    <Col xs = {6}>
                    <Row className='workImages'>
                    <Col>
                    <Row>
                    <img src= '/img/ommThumb.png' alt='omm' className='workImages'/>
                    </Row>
                    <Row>
                    <img src= '/img/omm.PNG' alt='omm' className='workImages'/>
                    </Row>
                    </Col>
                    <Col>
                    <img src= '/img/OmmPhone.jpg' alt='OmmPhone' className='workImages'/>
                    </Col>
                    </Row>
                    </Col>
                </Row>
            </Col>
        </div>
    );
};

export default Omm;
