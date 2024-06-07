import React from 'react';
import '../css/IntroSection.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const IntroSection = () => {
    return (
        <Container className='intro-container' fluid>
            <Row className="intro-content">
                <Col xs={12}>
                    <Row className="display-1 dpText">Hello,</Row>
                    <Row className='introDesc'>I am Ben Hakgyun Lee, an exquisitely versatile and deeply committed creative technologist, with a Bachelor’s degree from OCAD University.
                        My academic journey was rich with diverse studio courses, equipping me with a profound expertise in both traditional and digital art forms.
                        My technical prowess spans an impressive array of tools and technologies including Adobe Creative Suite (Photoshop, Illustrator, Premiere, After Effects,
                        XD, Substance Painter, and InDesign), 3D modeling and animation tools (Blender, ZBrush, Maya, Rhino3D, Marvelous Designer), and comprehensive game development
                        platforms (Unreal Engine, Unity). Additionally, I am skilled in web development technologies such as JavaScript, HTML, CSS, React, alongside programming languages
                        like Python, C#, and C++.</Row>
                    <Row className='introDesc'>My tenure at Altar Creative in Montreal allowed me to thrive in an environment that bridges high-stakes advertising with the interactive world of
                        video game commercials. Here, I applied my skills in motion graphics, video editing, and digital design, further refining my ability to contribute uniquely
                        in high-paced, innovative settings. This role was not just a job—it was a crucible that shaped my career, infusing it with real-world applications of
                        my diverse skill set.
                    </Row>
                    <Row className='introDesc'>Beyond academia and professional ventures, I possess a broad spectrum of self-taught skills and interests that speak
                        to my insatiable curiosity and commitment to lifelong learning. Fluent in English and Korean, with conversational abilities in
                        Japanese, Spanish, and French, my communication skills are as diverse as my technical ones. My proficiency extends to practical
                        and hands-on skills like bartending, 3D printing and prototyping, and working with Arduino and resin/silicone prototyping.
                    </Row>
                    <Row className='introDesc'>I am driven by a fervent passion to merge the seemingly disparate realms of technology and art. To me,
                        each new skill acquired is a brushstroke in the larger canvas of my career. The synergy of technology
                        and art does not just enhance aesthetics; it revolutionizes how we interact with and understand the world around us.
                        I am constantly seeking to broaden my knowledge base, because in the fusion of tech and art, I see the potential for groundbreaking innovation and creativity.
                    </Row>
                    <Row className='introDesc'>As I look towards the future, I am eager to contribute to and lead initiatives that harness this potent combination of art and technology,
                        aiming to create transformative experiences that resonate and inspire. Let’s collaborate to push the boundaries of what's possible.
                    </Row>
                </Col>
            </Row>
            <Row className ="intro-content">
                <Col xs={12} className="intro-list">
                <Row className="display-5 dpText title">Education & Experience</Row>
                    <Row className='list-item'>
                    <Col className='text-start list-1'>Education</Col>
                    <Col className='text-center list-2'>OCAD University - Graphic Design Major</Col>
                    <Col className='text-end list-3'>2015-2020</Col>
                    <hr className = 'horizontalLine' />
                    </Row>
                    <Row className='list-item'>
                    <Col className='text-start list-1'>Omm - Gift Certificates App</Col>
                    <Col className='text-center list-2'>UI/UX Designer / Frontend Developer</Col>
                    <Col className='text-end list-3'>2023</Col>
                    <hr className = 'horizontalLine' />
                    </Row>
                    <Row className='list-item'>
                    <Col className='text-start list-1'>Altar Creative</Col>
                    <Col className='text-center list-2'>Tool Specialist</Col>
                    <Col className='text-end list-3'>2022-2024</Col>
                    <hr className = 'horizontalLine' />
                    </Row>
                </Col>
            </Row>
            <Row className ="intro-content">
                <Col xs={12} className="intro-list">
                <Row className="display-5 dpText title">Licenses & Certifications</Row>
                    <Row className='list-item'>
                    <Col className='text-start list-1'><a href="https://www.credly.com/badges/6c0afed6-5036-4976-bafe-68669f882cdb/linked_in_profile"
                     target="_blank" rel="noreferrer" >Certified Cloud Practitioner</a></Col>
                    <Col className='text-center list-2'>Amazon Web Services (AWS)</Col>
                    <Col className='text-end list-3'>2022</Col>
                    <hr className = 'horizontalLine' />
                    </Row>
                    <Row className='list-item'>
                    <Col className='text-start list-1'>
                    C++ Fundamentals</Col>
                    <Col className='text-center list-2'>GameDev.tv</Col>
                    <Col className='text-end list-3'>2022</Col>
                    <hr className = 'horizontalLine' />
                    </Row>
                    <Row className='list-item'>
                    <Col className='text-start list-1'><a href="https://www.udemy.com/certificate/UC-8ae15d08-4758-4c7d-94b6-3fac0f14a09b/"
                    target="_blank" rel="noreferrer">Learn the ART of Substance Painter</a></Col>
                    <Col className='text-center list-2'>Udemy</Col>
                    <Col className='text-end list-3'>2022</Col>
                    <hr className = 'horizontalLine' />
                    </Row>
                    <Row className='list-item'>
                    <Col className='text-start list-1'><a href="https://www.udemy.com/certificate/UC-f80744e6-481b-43dd-ba59-d9362915b506/"
                    target="_blank" rel="noreferrer">Maya For Beginners</a></Col>
                    <Col className='text-center list-2'>Udemy</Col>
                    <Col className='text-end list-3'>2022</Col>
                    <hr className = 'horizontalLine' />
                    </Row>
                    <Row className='list-item'>
                    <Col className='text-start list-1'><a href="https://www.udemy.com/certificate/UC-eb125f72-ccd9-4eff-be77-522b9134c7c6/"
                    target="_blank" rel="noreferrer">Shader Development from Scratch in Unity with Cg</a></Col>
                    <Col className='text-center list-2'>Udemy</Col>
                    <Col className='text-end list-3'>2022</Col>
                    <hr className = 'horizontalLine' />
                    </Row>
                    <Row className='list-item'>
                    <Col className='text-start list-1'><a href="ude.my/UC-7c961706-4dbf-465f-9158-8d39ec659df4"
                    target="_blank" rel="noreferrer">The Complete 2022 Web Dev Bootcamp</a></Col>
                    <Col className='text-center list-2'>Udemy</Col>
                    <Col className='text-end list-3'>2022</Col>
                    <hr className = 'horizontalLine' />
                    </Row>
                    <Row className='list-item'>
                    <Col className='text-start list-1'><a href="https://academy.zenva.com/certificate/ea4987b4"
                    target="_blank" rel="noreferrer">AR Project: Job Training App</a></Col>
                    <Col className='text-center list-2'>Zenva</Col>
                    <Col className='text-end list-3'>2021</Col>
                    <hr className = 'horizontalLine' />
                    </Row>
                    <Row className='list-item'>
                    <Col className='text-start list-1'><a href="https://academy.zenva.com/certificate/1c4e5917"
                    target="_blank" rel="noreferrer">Construct an Arcade Game in Unreal Engine</a></Col>
                    <Col className='text-center list-2'>Zenva</Col>
                    <Col className='text-end list-3'>2021</Col>
                    <hr className = 'horizontalLine' />
                    </Row>
                    <Row className='list-item'>
                    <Col className='text-start list-1'><a href="https://academy.zenva.com/certificate/0091b94f"
                    target="_blank" rel="noreferrer">Create a Platformer Game in Unreal Engine</a></Col>
                    <Col className='text-center list-2'>Zenva</Col>
                    <Col className='text-end list-3'>2021</Col>
                    <hr className = 'horizontalLine' />
                    </Row>
                    <Row className='list-item'>
                    <Col className='text-start list-1'><a href="https://academy.zenva.com/certificate/ee404d4b"
                    target="_blank" rel="noreferrer">Data-Driven Development with Unity Analytics</a></Col>
                    <Col className='text-center list-2'>Zenva</Col>
                    <Col className='text-end list-3'>2021</Col>
                    <hr className = 'horizontalLine' />
                    </Row>
                    <Row className='list-item'>
                    <Col className='text-start list-1'><a href="https://academy.zenva.com/certificate/d9a7f1cb"
                    target="_blank" rel="noreferrer">Develop a City-Building Game with Unity</a></Col>
                    <Col className='text-center list-2'>Zenva</Col>
                    <Col className='text-end list-3'>2021</Col>
                    <hr className = 'horizontalLine' />
                    </Row>
                    <Row className='list-item'>
                    <Col className='text-start list-1'><a href="https://academy.zenva.com/certificate/d2423937"
                    target="_blank" rel="noreferrer">Develop a First-Person Shooter in Unreal Engine</a></Col>
                    <Col className='text-center list-2'>Zenva</Col>
                    <Col className='text-end list-3'>2021</Col>
                    <hr className = 'horizontalLine' />
                    </Row>
                    <Row className='list-item'>
                    <Col className='text-start list-1'><a href="https://academy.zenva.com/certificate/b3a4ac4f"
                    target="_blank" rel="noreferrer">Develop a Reusable Quiz System in Unity</a></Col>
                    <Col className='text-center list-2'>Zenva</Col>
                    <Col className='text-end list-3'>2021</Col>
                    <hr className = 'horizontalLine' />
                    </Row>
                    <Row className='list-item'>
                    <Col className='text-start list-1'><a href="https://academy.zenva.com/certificate/969c6356"
                    target="_blank" rel="noreferrer">Develop a Technology Tree for Strategy Unity Games</a></Col>
                    <Col className='text-center list-2'>Zenva</Col>
                    <Col className='text-end list-3'>2021</Col>
                    <hr className = 'horizontalLine' />
                    </Row>
                    <Row className='list-item'>
                    <Col className='text-start list-1'><a href="https://academy.zenva.com/certificate/dad3f28c"
                    target="_blank" rel="noreferrer">Discover Azure PlayFab Leaderboards [2019]</a></Col>
                    <Col className='text-center list-2'>Zenva</Col>
                    <Col className='text-end list-3'>2021</Col>
                    <hr className = 'horizontalLine' />
                    </Row>
                    <Row className='list-item'>
                    <Col className='text-start list-1'><a href="https://academy.zenva.com/certificate/0d09f6bc"
                    target="_blank" rel="noreferrer">Discover In-App Purchases for Mobile Unity Games</a></Col>
                    <Col className='text-center list-2'>Zenva</Col>
                    <Col className='text-end list-3'>2021</Col>
                    <hr className = 'horizontalLine' />
                    </Row>
                    <Row className='list-item'>
                    <Col className='text-start list-1'><a href="https://academy.zenva.com/certificate/6e6009c0"
                    target="_blank" rel="noreferrer">Make a Puzzle Game in Unreal Engine</a></Col>
                    <Col className='text-center list-2'>Zenva</Col>
                    <Col className='text-end list-3'>2021</Col>
                    <hr className = 'horizontalLine' />
                    </Row>
                    <Row className='list-item'>
                    <Col className='text-start list-1'><a href="https://academy.zenva.com/certificate/6850515a"
                    target="_blank" rel="noreferrer">Publishing and Optimizing Mobile Unity Games</a></Col>
                    <Col className='text-center list-2'>Zenva</Col>
                    <Col className='text-end list-3'>2021</Col>
                    <hr className = 'horizontalLine' />
                    </Row>
                    <Row className='list-item'>
                    <Col className='text-start list-1'>Bartending Certification</Col>
                    <Col className='text-center list-2'>Toronto Institute of Bartending</Col>
                    <Col className='text-end list-3'>2018</Col>
                    <hr className = 'horizontalLine' />
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default IntroSection;
