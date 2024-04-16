import React, { useState } from 'react';
import Custombutton from '../Components/Custombutton';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


const Registration = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const selectEmail = (e) => {
        const value = e.target.value
        console.log("input typed")
        setEmail(value)
    }

    const selectPassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    const Register = () => {
        console.log(email, password);
    }
    // const handleBlur = () => {
    //     console.log('Input blurred');
    // };


    // const handleFocus = () => {
    //     console.log('Input focused');
    // };
    const handleRegister = () => {
        alert(`Registration Button Clicked!\nEmail: ${email}\nPassword: ${password}`);
    }
    return (
        <>
            <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '30vh' }}>
                <Row>
                    <Col md={6}>
                        <Card style={{ width: '18rem', border: '1px solid brown' }}>
                            <Card.Body>
                                <Card.Title>Register</Card.Title>
                                <Card.Text>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control onChange={selectEmail} type="email" name="email" placeholder="Enter your email" value={email} />

                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control onChange={selectPassword} type="password" name="password" placeholder="Enter your password" value={password} />
                                        </Form.Group>


                                    </Form>

                                </Card.Text>
                                <Custombutton parms={false} title="Registration" clickable={handleRegister} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Registration;
