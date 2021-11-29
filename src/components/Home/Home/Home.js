import React from 'react';
import { Container } from 'react-bootstrap';
import Projects from '../../Projects/Projects';
import './Home.css';

const Home = () => {
    return (
        <Container>

            <div className='d-flex justify-content-center align-items-center  text-white ' style={{ height: '400px' }}>
                <div className='d-flex'>
                    <div className='title-border'></div>
                    <div>
                        <h1 className='fs-1 fw-bold'>I'm <br /> MD Amdadul Haq Arif</h1>
                        <h3>Front-End Developer</h3>
                        <button className='regular-btn' >Hire Me</button>
                    </div>
                </div>
            </div>
            <Projects></Projects>
        </Container>
    );
};

export default Home;