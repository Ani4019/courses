import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'; 
// import TopNav from './Components/TopNav';
// import CarouselImage from './Components/CarouselImage';
// import Registration from './Pages/Registration';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Count from './Components/Count';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AppHero from './Components/AppHero'
import AppAbout from './Components/AppAbout';
import AppServices from './Components/AppServices';
import AppWorks from './Components/AppWorks';
import AppTeams from './Components/AppTeams';
import AppTestimonials from './Components/AppTestimonials';
import AppPricing from './Components/AppPricing';
import AppBlog from './Components/AppBlog';
import AppContact from './Components/AppContact';
import AppHeader from "./Components/AppHeader";
import Login from './Pages/Login';
import Sidebar from './Components/Sidebar';
import { Container, Col , Row } from 'react-bootstrap';
import CovidData from './Components/CovidData';
import Placeholder from './Components/Placeholder';
import Countries from './Components/Countries';
import Users from './Components/Users';
import PracticeUser from './Components/PracticeUser';
import MovieData from './Components/MovieData';
import LaptopData from './Components/LaptopData';
import Parent from './Create/Parent';

function App() {
  const [showLogin, setShowLogin] = useState(true)
  const [showReg, setShowReg] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false);
  
  const showLoginPage = (type) => {
    if (type === "login") {
      setShowLogin(true)
      setShowReg(false)
    } else {
      setShowLogin(false)
      setShowReg(true)
    }
  }
 const triggeredSideBar= () =>{
  setShowSidebar(true)
 }
  return (
    <>
    <AppHeader openSideBar={triggeredSideBar}/>
    <Container fluid>
    <Row>
    <Col md={3}>
    {showSidebar && <Sidebar />}
    </Col>
    <Col md={9}>
    <Router>
   <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/hero" element={<AppHero/>} />
          <Route path="/about" element={<AppAbout/>} />
          <Route path="/services" element={<AppServices/>} />
          <Route path="/works" element={<AppWorks/>} />
          <Route path="/teams" element={<AppTeams/>} />
          <Route path="/testimonials" element={<AppTestimonials/>} />
          <Route path="/pricing" element={<AppPricing/>} />
          <Route path="/blog" element={<AppBlog/>} />
          <Route path="/contact" element={<AppContact/>} />
          <Route path="/covid" element={<CovidData/>} />
          <Route path="/placeholder" element={<Placeholder/>} />
          <Route path="/countries" element={<Countries/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/practiceuser" element={<PracticeUser/>} />
          <Route path="/moviedata" element={<MovieData/>} />
          <Route path="/laptopdata" element={<LaptopData/>} />
          <Route path="/parent" element={<Parent/>} />

        </Routes>
        </Router>
         </Col>
        </Row>
        </Container>
        
        {/* <TopNav switchLogin={showLoginPage}/>
       <CarouselImage />
       <div style={{paddingTop:"10px"}}>
       {showLogin && <Login />}
       {showReg && <Registration />}
       </div> */}
       
  </>
  );
}
{/* <Custombutton color="outline-primary" parms={true} type="login" clickable={() => showLoginPage("login")} title="Login" />
      <Custombutton color="outline-danger" parms={true} type="registration" clickable={() => showLoginPage("Reg")} title="Registration" />
      */}

export default App;

