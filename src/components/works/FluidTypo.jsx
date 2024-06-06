import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../css/WorksSection.css';

const FluidTypo = () => {
    return (
        <div className='mb-3 mt-5'>
            <Col>
                <Row>
                    <Col xs = {6}>
                    <Row className='mb-3'>
                    For my project titled Fluid Typography, developed using Unity, I ventured into an exploration of text within a three-dimensional grid structure. Text elements are procedurally generated in 3D space with randomized angles and positions while maintaining an organized grid layout. This dynamic and fluid arrangement allows users to navigate through a virtual 'space' filled with text, experiencing the intricate beauty as the characters connect, overlap, break apart, and rotate. This project highlights the aesthetic and structural possibilities of typography in a 3D environment.
                    </Row>
                    <Row className='mb-3'>
                    The inspiration for Fluid Typography stemmed from a unique class raffle organized by my professor, featuring tickets with design-centric words such as 'uniformity,' 'grid,' 'theatrical,' and 'functional.' Drawing 'fluid' and 'grid' from the hat inspired me to expand traditional 2D grid concepts into a more dynamic 3D space. To integrate the concept of fluidity within this grid, I implemented variations like 30-degree and 45-degree angled texts and introduced features such as flippable typefaces.
                    </Row>
                    <Row>
                    This project serves as a bridge between rigid structural frameworks and the unbounded possibilities offered by digital space and modern technology. It reimagines traditional concepts like grid layouts to create a lively, engaging, and continually evolving visual experience, demonstrating the power of digital tools in expanding the horizons of graphic design and typography.
                    </Row>
                    </Col>
                    <Col xs = {6}>
                    <Row>
                    <img src= '/img/Grid1.jpg' alt='Tome16' className='workImages'/>
                    </Row>
                    <Row>
                    <img src= '/img/Grid2.jpg' alt='Tome16' className='workImages'/>
                    </Row>
                    <Row>
                    <img src= '/img/GridThumb.jpg' alt='Tome16' className='workImages'/>
                    </Row>
                    </Col>
                </Row>
            </Col>
        </div>
    );
};

export default FluidTypo;
