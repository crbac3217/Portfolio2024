import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../css/WorksSection.css';


const DbdTome16 = () => {
    return (
        <div className='mb-3 mt-5'>
            <Col>
                <Row>
                    <Col xs = {6}>
                    <Row className='mb-3'>
                    For the "Dead by Daylight Tome 16" trailer produced at AltarCreative, I was deeply involved in creating a promotional video for the game's battle pass, featuring new outfits and charms. I gained access to the game's Perforce server, which allowed me to download the necessary assets directly from the developers. This access was crucial as it enabled me to work with the most up-to-date and high-quality assets for rendering.
                    </Row>
                    <Row className='mb-3'>
                    In order to match the game's original visual style, I had to meticulously recreate the master material used in "Dead by Daylight." This process was essential to ensure that the rendered assets were consistent with the game's aesthetic and met the high standards required for an official trailer. For the charms, I implemented a basic three-point lighting setup to highlight their design details and enhance their visual appeal in the trailer.
                    </Row>
                    <Row className='mb-3'>
                    Additionally, I worked extensively with motion graphics and visual effects using Adobe After Effects. This involved crafting dynamic visual elements that complemented the live-action captures and maintained the eerie, suspenseful atmosphere typical of "Dead by Daylight." I also played a role in capturing gameplay footage and utilized Unreal Engine's native console commands. These tools provided greater versatility in capturing cinematic-quality scenes and animations directly from the game, allowing for a more polished and immersive trailer experience.
                    </Row>
                    <Row>
                    This project was an excellent opportunity to combine technical rendering skills with creative visual effects, deepening my expertise in both game asset management and cinematic production.
                    </Row>
                    </Col>
                    <Col xs = {6}>
                    <Row>
                    <img src= '/img/Tome16Thumb.jpg' alt='Tome16' className='workImages'/>
                    </Row>
                    <Row>
                    <iframe className='workImages'
                    src="https://www.youtube.com/embed/K3NWBrL7E8c">
                    </iframe>
                    </Row>
                    </Col>
                </Row>
            </Col>
        </div>
    );
};

export default DbdTome16;
