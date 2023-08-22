import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Projects from '../../Projects/Projects';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';
import myPic from '../../../images/arif.png';


const Home = () => {

    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <Container>
            <Row style={{ justifyContent: 'space-between', color: 'white', marginTop: '80px', marginLeft: '100px', marginRight: '100px', }} className='d-flex flex-column-reverse flex-md-row' >
                <Col className='d-flex  mt-3 mt-sm-0' xs={12} md={6}>
                    <div data-aos="fade-up" data-aos-duration="1000" className='title-border'></div>
                    <div>
                        <div data-aos="fade-left" data-aos-duration="1000" className=''>
                            <h1 className='fs-1 fw-bold'>I'm <br /> MD Amdadul Haq Arif</h1>
                        </div>

                        <h3 style={{ height: '60px' }} >
                            <Typewriter
                                options={{
                                    strings: ['Full Stack Developer', 'JavaScript Developer', 'I Love Coding'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h3>

                        <Link to='/contactMe'><button className='regular-btn' >Hire Me</button></Link>
                    </div>
                </Col>
                <Col className='d-flex justify-content-center align-items-center' xs={12} md={6}>
                    <img style={{ borderRadius: '400px', border: '2px solid yellow', height: '200px', }} src={myPic} alt="" />
                </Col>
            </Row>
            <div className='text-white' style={{ color: 'white', marginLeft: '100px', marginRight: '100px', marginTop: '50px', }}>
                <h2>SKILLS</h2>
                <div className='technology d-flex flex-wrap '>
                    <span>JavaScript(ES6)</span>
                    <span>TypeScript</span>
                    <span>Node JS</span>
                    <span>React JS</span>
                    <span>AWS Cloud</span>
                    <span>GraphQL</span>
                    <span>MySQL</span>
                    <span>MongoDB</span>
                    <span>Firebase</span>
                    <span>Material UI</span>
                    <span>Bootstrap 5</span>
                    <span>CSS</span>
                    <span>HTML</span>
                </div>
            </div>
            <Projects></Projects>
        </Container>
    );
};

export default Home;