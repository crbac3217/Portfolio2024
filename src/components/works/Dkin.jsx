import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../css/WorksSection.css';

const Dkin = () => {
    return (
        <div className='mb-3 mt-5'>
            <Col>
                <Row>
                    <Col xs = {6}>
                    <Row className='mb-3'>
                    For the announcement trailer of "Dragonkin: The Banished," I was heavily involved in an ambitious project that marked the studio's first fully in-engine trailer. This endeavor required us to start from scratch—conceptualizing the trailer, designing levels, and compositing the final visuals entirely within the engine. Our team was also responsible for creating a range of new assets, including weapons, clothing, and animations, which added complexity and depth to our workflow.
                    </Row>
                    <Row className='mb-3'>
                    My primary responsibilities encompassed creating and refining materials using Substance Painter and Mixer, which were essential for achieving the high-quality visuals we aimed for. I also managed the overall project and asset workflow, ensuring that all elements were cohesive and aligned with our vision for the trailer. Additionally, I tackled various technical challenges, including creating and modifying Niagara particles to enhance visual effects and crafting clothing assets in Marvelous Designer. After designing these assets, I was responsible for baking out the Alembics, which is crucial for preserving the high fidelity of the fabric simulations in our final renders.
                    </Row>
                    <Row>
                    Despite the demanding nature of this project, which often required our team to work overtime well past midnight, the experience was incredibly enriching. The hands-on challenges and the opportunity to deeply engage with advanced animation and rendering techniques provided me with invaluable learning experiences. "Dragonkin: The Banished" will remain one of the most memorable projects in my career, not only for the technical skills I developed but also for the teamwork and perseverance it demanded.
                    </Row>
                    </Col>
                    <Col xs = {6}>
                    <Row>
                    <img src= '/img/DKProg.jpg' alt='DragonKinUnreal' className='workImages'/>
                    </Row>
                    <Row>
                    <iframe className='workImages'
                    src="https://youtu.be/bPUHW_Uz0_Y">
                    </iframe>
                    </Row>
                    </Col>
                </Row>
            </Col>
        </div>
    );
};

export default Dkin;
