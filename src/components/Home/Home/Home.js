import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
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
            <div style={{ height: '220px', justifyContent: 'space-between', display: 'flex', color: 'white', marginTop: '80px', marginLeft: '100px', marginRight: '100px' }}>

                <div className='d-flex'>
                    <div data-aos="fade-up" data-aos-duration="1000" className='title-border'></div>
                    <div>
                        <div data-aos="fade-left" data-aos-duration="1000">
                            <h1 className='fs-1 fw-bold'>I'm <br /> MD Amdadul Haq Arif</h1>
                        </div>

                        <h3>
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
                </div>
                <img className='' style={{ borderRadius: '400px', border: '2px solid yellow', height: '200px', }} src={myPic} alt="" />
            </div>
            <div className='text-white' style={{ color: 'white', marginLeft: '100px', marginRight: '100px', }}>
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