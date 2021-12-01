import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Projects from '../../Projects/Projects';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';

const Home = () => {

    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <Container>
            <div className='d-flex justify-content-center align-items-center  text-white ' style={{ height: '400px' }}>
                <div className='d-flex'>
                    <div data-aos="fade-up" data-aos-duration="1000" className='title-border'></div>
                    <div>
                        <div data-aos="fade-left" data-aos-duration="1000">
                            <h1 className='fs-1 fw-bold'>I'm <br /> MD Amdadul Haq Arif</h1>
                        </div>

                        <h3>
                            <Typewriter
                                options={{
                                    strings: ['Front-End Developer', 'JavaScript Developer', 'I Love Coding'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h3>

                        <Link to='/contactMe'><button className='regular-btn' >Hire Me</button></Link>
                    </div>
                </div>
            </div>
            <Projects></Projects>
        </Container>
    );
};

export default Home;