import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



function AppHeader(props) {
  

  const toggleSidebar = () => {
    props.openSideBar()
  };

   return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" >
        <Container fluid>
          <div style={{ marginLeft: '10px' }} onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className="d-flex justify-content-center align-items-center flex-grow-1">
            <Navbar.Brand>
              <span style={{ color: 'red' }}>CORPORATE</span>
            </Navbar.Brand>
          </div>
          <Nav className="mr-auto" >
            <Nav.Link to="/" style={{ color: 'red', textAlign: 'center', border: '1px solid red', borderRadius: 'px' }}>LOGIN</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
         </>
  );
}

export default AppHeader;
