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
        <Container className='text-white my-5' >
            <Row md={2} xs={1} style={{ marginTop: '75px' }}>
                <Col md={9} >
                    <div data-aos="fade-right" data-aos-duration="1000">
                        <h3>Hello there!, I'm MD Amdadul Haq Arif,</h3>
                        {/* <p>
                                I am a full stack developer. I'm focused on building websites with JavaScript, specifically React.js and Node Js. And I love to learn and implement modern technologies on projects. </p> */}
                        <p>
                            a passionate developer with a love for all things JavaScript. With 16 months of professional experience under my belt, I have had the opportunity to work on 3 exciting projects, honing my skills in a wide range of technologies
                        </p>
                        <p>
                            My expertise lies in JavaScript, TypeScript, and ES6, allowing me to build robust and efficient applications. I have a strong grasp of REST APIs and have utilized them extensively in my work. In the backend realm, I am proficient in Node.js, allowing me to create scalable and performant server-side applications.
                        </p>
                        <p>
                            On the front-end side, I have developed applications using React.js and React Native, leveraging the power of these frameworks to create intuitive and engaging user experiences. I am well-versed in UI libraries such as Material UI and Bootstrap, enabling me to craft visually appealing interfaces
                        </p>
                        <p>
                            My experience extends to the cloud as well, with a solid understanding of AWS services such as AppSync, Lambda, EC2, and EventBridge. I am adept at working with various databases, including SQL, GraphQL, MySQL, and MongoDB, ensuring efficient data management.
                        </p>
                        <p>
                            Throughout my journey as a developer, I have maintained a strong passion for learning. I eagerly embrace new technologies and methodologies, constantly seeking opportunities to expand my knowledge and apply them to real-world challenges. I have also had the privilege of leading development teams, fostering collaboration and ensuring successful project outcomes.
                        </p>

                        <p>
                            Coding is not just a job for me; it's a fulfilling pursuit that fuels my curiosity and creativity. I thrive on tackling new challenges head-on and finding innovative solutions. If you're looking for a dedicated and skilled developer who can bring your ideas to life, I would love to connect and discuss potential collaborations.
                        </p>

                        <p>
                            Thank you for visiting my portfolio, and I look forward to the exciting possibilities ahead!
                        </p>
                    </div>
                </Col>
                <Col data-aos="fade-left" data-aos-duration="1000" md={3} >
                    <div style={{}}>

                    </div>
                    <img className='' style={{ borderRadius: '400px', border: '2px solid yellow', height: '200px', }} src={myPic} alt="" />
                    <div>
                        <h2>SKILLS</h2>
                        <div className='technology d-flex flex-wrap'>
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

                    {/* <img
                        style={{
                            borderRadius: '400px',
                            border: '2px solid yellow',
                            height: '200px',
                            alignSelf: 'flex-end',
                            marginLeft: 'auto', // Add this CSS property
                        }}
                        src={myPic}
                        alt=""
                    /> */}
                </Col>
            </Row>
        </Container>

    );
};

export default AboutMe;