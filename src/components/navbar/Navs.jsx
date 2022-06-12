import React from 'react';
import './navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Container from 'react-bootstrap/Container';
const Navs = () => {
    return(
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">LMS</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/Courses">Courses</Nav.Link>
        <Nav.Link href="/CourseForm">Add Course</Nav.Link>
        <Nav.Link href="/CourseForm">Add Assessments</Nav.Link>
        <Nav.Link href="/CourseForm">Test</Nav.Link>
        <Nav.Link href="/CourseForm">Course Progress</Nav.Link>
        <Nav.Link href="/CourseForm">About</Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
};

export default Navs;