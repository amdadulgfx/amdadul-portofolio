import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import myPic from '../../images/arif.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutMe = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <Container className='text-white my-5'>
                <Row md={2} xs={1}>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <div data-aos="fade-right" data-aos-duration="1000">
                            <h3>Hello, This is MD Amdadul Haq Arif</h3>
                            <p>
                                I am a  front-end developer. I'm focused on building websites with JavaScript, specifically React.js. And I love to learn and implement modern technologies on projects. </p>
                            <h2>SKILLS</h2>
                            <div className='technology d-flex flex-wrap'>
                                <span>React JS</span>
                                <span>JavaScript(ES6)</span>
                                <span>CSS</span>
                                <span>HTML</span>
                                <span>Bootstrap 5</span>
                                <span>Firebase</span>
                            </div>
                        </div>
                    </Col>
                    <Col data-aos="fade-left" data-aos-duration="1000" className='d-flex justify-content-center align-items-center'>
                        <img style={{ borderRadius: '400px', border: '2px solid yellow', height: '400px' }} src={myPic} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutMe;