import React from 'react';
import '../css/WorksSection.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Unfold = ({ item }) => {
    return (
        <div className='unfoldedSection-head'>
            <Row>
                <Col className='UnfoldLeft' xs={8}>
                    {item.organization}
                </Col>
                <Col xs={2} className='UnfoldRight'>
                    {item.year}
                </Col>
                <Col xs = {1}/>
                <Col xs={10} className='UnfoldRight'> 
                    <div>
                        <span>Type:&nbsp;</span>
                        {item.type.map((type, index) => (
                            <span key={index} className="type">
                                {type}{index < item.type.length - 1 ? ', ' : ''}
                            </span>
                        ))}
                    </div>
                </Col>
                <Col xs={10} className='UnfoldRight'> 
                    <div>
                        <span>Skills:&nbsp;</span>
                        {item.skills.map((skill, index) => (
                            <span key={index} className="skill">
                                {skill}{index < item.skills.length - 1 ? ', ' : ''}
                            </span>
                        ))}
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Unfold;
