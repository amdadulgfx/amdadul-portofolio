import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink as Link } from 'react-router-dom';
import './NavigationBar.css';
const NavigationBar = () => {
    const logoStyle = {
        color: 'yellowgreen',
        fontWeight: 700,
        fontSize: '24px',
    }
    const bgNav = {
        backgroundColor: '#090726',
        // margin: '100px'
    }

    return (
        <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1, }}>
            <Navbar collapseOnSelect style={bgNav} expand="lg" className="navbar-dark" >
                <Container >
                    <Link to="/" className='navLink' style={logoStyle}>A</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='navLink' to="/home">Home</Link>
                            <Link className='navLink' to="/aboutMe">About Me</Link>
                            <Link className='navLink' to="/projects">Projects</Link>
                            <Link className='navLink' to="/blogs">Blogs</Link>
                            <Link className='navLink' to="/contactMe">Contact Me</Link>
                        </Nav>
                        <Nav className='resume'>
                            <a
                                href="https://drive.google.com/file/d/1QLmOzO6R8am0b7IgiT4vAp-AmeiQeTzj/view?usp=sharing"
                                className="social-icon"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i class="fas fa-download"></i> Resume
                            </a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;