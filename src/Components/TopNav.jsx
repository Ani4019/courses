import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function TopNav(props) {
    const loginSet=()=>{
    props.switchLogin("login") 
    }

    const regSet=()=>{
        props.switchLogin("Reg") 

    }
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Welcome To  LIBRARY</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={loginSet}>Login</Nav.Link>
            <Nav.Link href="#features" onClick={regSet}>Registration</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}


export default TopNav;