import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../css/WorksSection.css';


const AndH = () => {
    return (
        <div className='mb-3 mt-5'>
            <Col>
                <Row>
                    <Col xs = {6}>
                    <Row className='mb-3'>
                    In crafting this poster for my advanced typography class, I aimed to fully capture the iconic style of Arm & Hammer baking soda packaging. I meticulously integrated key elements such as its typeface, graphical layout, and color schemes. My goal was to preserve the brand's classic appeal that combines practicality with a touch of nostalgia, while also infusing it with a modern twist. This "new-tro" style approach rejuvenated the brand’s traditional image, making it relevant to today’s design sensibilities while still honoring its heritage.
                    </Row>
                    <Row className='mb-3'>
                    Choosing the right typeface was a pivotal part of the design process. I selected a font that not only underscores the uniqueness of Arm & Hammer but also supports the overall function and contemporary vibe of the packaging. The highlighted typeface brings out a reliable, time-honored feel blended with modern utility, reflecting the brand's evolution while maintaining its foundational values. This strategy not only retained the core identity of the brand but also broadened its appeal, showcasing its versatility and relevance in the current market.
                    </Row>
                    <Row>
                    This poster represents my skills in merging classic and modern design elements to craft a compelling narrative through typography. The careful balance of type, color, and layout has resulted in a dynamic visual that communicates the product’s features and celebrates Arm & Hammer’s lasting legacy. This project exemplifies thoughtful design and highlights how strategic use of typography can shape brand perception and enhance its market standing.
                    </Row>
                    </Col>
                    <Col xs = {6}>
                    <Row>
                    <img src= '/img/AHThumb.jpg' alt='Tome16' className='workImages'/>
                    </Row>
                    <Row className='workImages'>
                    <Col>
                    <img src= '/img/AHwork1.jpg' alt='Tome16' className='workImages'/>
                    </Col>
                    <Col>
                    <img src= '/img/AHwork2.jpg' alt='Tome16' className='workImages'/>
                    </Col>
                    </Row>
                    </Col>
                </Row>
            </Col>
        </div>
    );
};

export default AndH;
