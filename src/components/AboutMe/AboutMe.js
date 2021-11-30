import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import myPic from '../../images/arif.png'
const AboutMe = () => {
    return (
        <div>
            <Container className='text-white my-5'>
                <Row md={2} xs={1}>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <div>
                            <h3>Hello, This is MD Amdadul Haq Arif</h3>
                            <p>
                                I am a  front-end developer. I'm focused on building websites with JavaScript, specifically React.js. And I love to learn and implement modern technologies on projects. </p>
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <img style={{ borderRadius: '400px', border: '2px solid yellow', height: '400px' }} src={myPic} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutMe;