import React from 'react';
import './Navbar.css';
import {Container,Nav,Navbar,NavDropdown, Button} from 'react-bootstrap';
import logo from "../../images/logo_cbm.png";



export default function NavigationBar() {
   // const purple = background-color: #573661;
  return (
    <div>
        <div className='container'>
            <div className='row'>
            <div className='col-md-9 mquery'><img src={logo} alt="logo"/></div>
            <p className='col-md-3 mt-5 mb-0 call'>Call: 01 5156210 / 087 9474784 </p>
            </div>
        </div>
      <Navbar expand="lg" variant="dark" className='Navibar'>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            <Nav.Link className="nav-links me-3" href="/">HOME</Nav.Link>
            <Nav.Link className="nav-links me-3" href="/About">ABOUT US</Nav.Link>
            <NavDropdown title="COURSES" id="basic-nav-dropdown" className="nav-links me-3">
              <NavDropdown.Item href="IntensiveMatPlus">Intensive Mat Plus</NavDropdown.Item>
              <NavDropdown.Item href="AdvanceMat">Advanced Mat Course</NavDropdown.Item>
              <NavDropdown.Item href="InjuryAndSpecial">Injury and Special</NavDropdown.Item>
              <NavDropdown.Item href="IntensiveReformer">Intensive Reformer</NavDropdown.Item>
              <NavDropdown.Item href="Workshops">Workshops</NavDropdown.Item>
              <NavDropdown.Item href="Zenga">Zen.ga</NavDropdown.Item>
              <NavDropdown.Item href="TotalBarre">Total Barre</NavDropdown.Item>
              <NavDropdown.Item href="AdvancedReformer">Advanced Reformer</NavDropdown.Item>
              <NavDropdown.Item href="ICCB">ICCB</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Venue" className="nav-links me-3">VENUE</Nav.Link>
            <Nav.Link href="/Jobs" className="nav-links me-3">JOBS</Nav.Link>
            <Nav.Link href="/Testimonials" className="nav-links me-3">TESTIMONIALS</Nav.Link>
            <Nav.Link href="/FAQ" className="nav-links me-3">FAQ</Nav.Link>
            <Nav.Link href="/Contact" className="nav-links me-3">CONTACT US</Nav.Link>
            <Nav.Link href="/Login" className="nav-links me-3"><Button variant="light"> Student Login </Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}



