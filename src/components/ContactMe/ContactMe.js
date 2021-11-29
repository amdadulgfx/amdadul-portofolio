import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Col, Container, Form, Row } from 'react-bootstrap';
import envelope from "../../images/undraw_mailbox_re_dvds.svg"

const ContactMe = () => {
    const form = useRef();
    const [isMailSent, SetIsMailSent] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_omb41ig', 'template_kyovif4', form.current,
            'user_WitC0kKLfudgpNXcPpj9L')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        SetIsMailSent(true);
    };
    return (
        <div className='text-white py-5'>
            <Container className='pb-5'>
                <h1 className='text-center py-3'>Contact Me</h1>
                <Row md={2} xs={1}>
                    <Col><img src={envelope} style={{ height: '300px' }} alt="" /></Col>
                    <Col>
                        <Form ref={form} onSubmit={sendEmail}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name*</Form.Label>
                                <Form.Control type="text" name='name' required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email*</Form.Label>
                                <Form.Control type="email" name='name' required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message*</Form.Label>
                                <Form.Control as="textarea" rows={3} name='message' required />
                            </Form.Group>
                            {isMailSent && <div class="alert alert-success" role="alert">
                                Your Mail Sent Successfully!
                            </div>}
                            <button className='regular-btn' type='submit'>Send</button>
                        </Form>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default ContactMe;