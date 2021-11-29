import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import './Projects.css'
import clayKingdomSs1 from '../../images/clay-kingdom (1).png'
import clayKingdomSs2 from '../../images/clay-kingdom (2).png'
import clayKingdomSs3 from '../../images/clay-kingdom (3).png'
import camperienceSs1 from '../../images/camperience (1).png'
import camperienceSs2 from '../../images/camperience (2).png'
import camperienceSs3 from '../../images/camperience (3).png'
import eyeplus1 from '../../images/eyeplus (1).png'
import eyeplus2 from '../../images/eyeplus (2).png'
import eyeplus3 from '../../images/eyeplus (3).png'
const Projects = () => {
    return (
        <Container>
            <div style={{ paddingBottom: "100px" }}>
                <h2 className='text-white text-center fw-bolder fs-1 pb-5'>My Projects</h2>
                <Row md={2} xs={1} >
                    <Col>
                        <Carousel variant='dark'>
                            <Carousel.Item interval={3000} >
                                <img style={{ height: '250px', objectFit: 'cover' }}
                                    className="d-block w-100"
                                    src={clayKingdomSs1}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={2000} >
                                <img style={{ height: '250px', objectFit: 'cover' }}
                                    className="d-block w-100  img-fluid"
                                    src={clayKingdomSs2}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item >
                                <img style={{ height: '250px', objectFit: 'cover' }}
                                    className="d-block w-100 "
                                    src={clayKingdomSs3}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col className='text-white technology'>
                        <h4>Clay Kingdom</h4>
                        <p>
                            This is a pottery shop site. In this site user can purchase any product, give a review and they also can cancel the order. Admins Can make another admin, add product with details, delete any product.
                        </p>
                        <p className='d-flex flex-wrap'>
                            <span >React.Js</span>
                            <span >Express.Js</span>
                            <span >Node.Js</span>
                            <span >Axios</span>
                            <span >MongoDB</span>
                        </p>
                        <button className="project-btn">
                            <a
                                href="https://clay-kingdom.web.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Live Site
                            </a>
                        </button>
                        <button className="project-btn">
                            <a
                                href="https://github.com/amdadulgfx/clay-kingdom-pottery-shop"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i class="fab fa-github"></i> Client Side
                            </a>
                        </button>
                        <button className="project-btn">
                            <a
                                href="https://github.com/amdadulgfx/clay-kingdom-pottery-shop-server"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i class="fab fa-github"></i>  Server Side
                            </a>
                        </button>
                    </Col>
                </Row>
                <Row className='my-5' md={2} xs={1}>
                    <Col>
                        <Carousel variant='dark'>
                            <Carousel.Item interval={5000} >
                                <img style={{ height: '250px', objectFit: 'cover' }}
                                    className="d-block w-100"
                                    src={camperienceSs1}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={1500} >
                                <img style={{ height: '250px', objectFit: 'cover' }}
                                    className="d-block w-100  img-fluid"
                                    src={camperienceSs2}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item >
                                <img style={{ height: '250px', objectFit: 'cover' }}
                                    className="d-block w-100 "
                                    src={camperienceSs3}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col className='text-white technology'>
                        <h4>Camp Experience</h4>
                        <p>
                            This is a travel agency type site where people can see where they can camp and its information. They can register for a camp. To do this operation they have to login first.
                        </p>
                        <p className='d-flex flex-wrap'>
                            <span >React.Js</span>
                            <span >Express.Js</span>
                            <span >Node.Js</span>
                            <span >MongoDB</span>
                        </p>
                        <button className="project-btn">

                            <a
                                href="https://camperience-6e1ea.web.app/"

                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Live Site
                            </a>
                        </button>
                        <button className="project-btn">

                            <a
                                href="https://github.com/amdadulgfx/camperience-connect-to-the-nature"

                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i class="fab fa-github"></i> Client Side
                            </a>
                        </button>

                        <button className="project-btn">
                            <a
                                href="https://github.com/amdadulgfx/camperience-server"

                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i class="fab fa-github"></i>  Server Side
                            </a>
                        </button>

                    </Col>
                </Row>
                <Row className='my-5' md={2} xs={1}>
                    <Col>
                        <Carousel variant='dark'>
                            <Carousel.Item interval={6000} >
                                <img style={{ height: '250px', objectFit: 'cover' }}
                                    className="d-block w-100"
                                    src={eyeplus1}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={3500} >
                                <img style={{ height: '250px', objectFit: 'cover' }}
                                    className="d-block w-100  img-fluid"
                                    src={eyeplus2}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item >
                                <img style={{ height: '250px', objectFit: 'cover' }}
                                    className="d-block w-100 "
                                    src={eyeplus3}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col className='text-white technology'>
                        <h4>Eye Plus Care</h4>
                        <p>
                            This is demo site for eye care service. When user wants to see the details of eye care service they need to login first. Login System implemented with firebase.
                        </p>
                        <p className='d-flex flex-wrap'>
                            <span >React.Js</span>
                            <span >Firebase</span>
                            <span >Bootstrap 5</span>
                        </p>
                        <button className="project-btn">
                            <a
                                href="https://eyeplus-care.web.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Live Site
                            </a>
                        </button>
                        <button className="project-btn">
                            <a
                                href="https://github.com/amdadulgfx/eye-medical-care"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i class="fab fa-github"></i> Client Side
                            </a>
                        </button>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Projects;