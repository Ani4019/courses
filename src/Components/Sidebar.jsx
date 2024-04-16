import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const navLinkStyle = {
  color: 'brown', 
  backgroundColor: "#f0f0f0",
};

const Sidebar = () => {
  return (
    <Nav className="flex-column" defaultActiveKey="/">
      <Nav.Link href="/hero" style={navLinkStyle}>Home</Nav.Link> 
      <Nav.Link href="/about" style={navLinkStyle}>About</Nav.Link> 
      <Nav.Link href="/services" style={navLinkStyle}>Services</Nav.Link>  
      <Nav.Link href="/works" style={navLinkStyle}>Works</Nav.Link> 
      <Nav.Link href="/teams" style={navLinkStyle}>Teams</Nav.Link> 
      <Nav.Link href="/testimonials" style={navLinkStyle}>Testimonials</Nav.Link> 
      <Nav.Link href="/pricing" style={navLinkStyle}>Pricing</Nav.Link> 
      <Nav.Link href="/blog" style={navLinkStyle}>Blog</Nav.Link> 
      <Nav.Link href="/contact" style={navLinkStyle}>Contact</Nav.Link> 
      <Nav.Link href="/covid" style={navLinkStyle}>CovidData</Nav.Link> 
      <Nav.Link href="placeholder" style={navLinkStyle}>Placeholder</Nav.Link> 
      <Nav.Link href="countries" style={navLinkStyle}>Countries</Nav.Link> 
      <Nav.Link href="users" style={navLinkStyle}>Users</Nav.Link> 
      <Nav.Link href="practiceuser" style={navLinkStyle}>PracticeUser</Nav.Link> 
      <Nav.Link href="moviedata" style={navLinkStyle}>MovieData</Nav.Link> 
      <Nav.Link href="laptopdata" style={navLinkStyle}>LaptopData</Nav.Link> 
      <Nav.Link href="parent" style={navLinkStyle}>Parent</Nav.Link> 

    </Nav>
  );
};

export default Sidebar;
