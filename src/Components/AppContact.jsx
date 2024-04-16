import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AppContact() {
  return (
    <section id='contact' className='block contact-block'>
    <Container fluid> 
    <div className='title-holder'>
            <h2>Contact Us</h2>
            <div className='subTitle'> get connected with us</div>
        </div>   
        <Form className='contact-form'>
      <Row>
        <Col sm={4}>
          <Form.Control type='text' placeholder="Enter your full name" required/>
        </Col>
        <Col sm={4}>
          <Form.Control type='email' placeholder="Enter your email address" required />
        </Col>
        <Col sm={4}>
          <Form.Control type='tel' placeholder="Enter your contact number" required/>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
        <Form.Control as="textarea" placeholder="Enter your message" required/>
        </Col>
      </Row>
      <div className='btn-holder'>
    <Button type='submit'>Submit</Button>
      </div>
    </Form>

        </Container>
      <div className='google-map'>
      <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186906.56134555637!2d-81.560451078625!3d42.94845780149138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef20ea88d9b0b%3A0x28c7d7699a056b95!2sLondon%2C%20ON!5e0!3m2!1sen!2sca!4v1711226540312!5m2!1sen!2sca" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>     
      </div>
      <Container fluid>
    <div className='contact-info'>
    <ul>
        <li>
        <i class="fas fa-envelope"></i>
        hello@domain.com
        </li>
        <li>
        <i class="fas fa-phone"></i>
        000-000-0000
        </li>
        <li>
        <i class="fas fa-map-marker-alt"></i>
        London, Canada
        </li>
    </ul>
    </div>
    </Container>
    </section>
  )
}

export default AppContact;
