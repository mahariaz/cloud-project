import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Courses from '../Courses/Courses';
import background from '../../assets/crs.jpg';
import axios from 'axios'


export class CourseForm extends Component {
  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeCourseName = this.onChangeCourseName.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeOverview = this.onChangeOverview.bind(this);
    this.onChangeLink = this.onChangeLink.bind(this);
    this.onChangeSdate = this.onChangeSdate.bind(this);
    this.onChangeEdate = this.onChangeEdate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      courseName:'',
      pic:'',
      overview:'',
      link:'',
      sdate:'',
      edate:'',

    }
  }
  
  onChangeCourseName(e) {
    this.setState({ courseName: e.target.value })
  }

  onChangeImage(e) {
    this.setState({ pic: e.target.value })
  }

  onChangeOverview(e) {
    this.setState({ overview: e.target.value })
  }

  
  onChangeLink(e) {
    this.setState({ link: e.target.value })
  }

  onChangeSdate(e) {
    this.setState({ sdate: e.target.value })
  }

  onChangeEdate(e) {
    this.setState({ edate: e.target.value })
  }
  
  onSubmit(e) {
    e.preventDefault()

    const courseObject = {
      courseName: this.state.courseName,
      pic: this.state.pic,
      overview: this.state.overview,
      link: this.state.link,
      sdate: this.state.sdate,
      edate: this.state.edate,

    };
    axios.post('http://localhost:3000/coursedb/create-course', courseObject,{headers:''})
      .then(res => console.log('SUCCCCESSSSFUL',)).catch(error => {
        console.log(error.response)});

    this.setState({   courseName:'',pic:'',overview:'',link:'',sdate:'',edate:'' })

  }
  render() {

    const myStyle={
        backgroundImage :`url(${background})`,
        height:'100vh',
        backgroundSize :'cover',
        backgroundRepeat: 'no-repeat',
        paddingTop:"4%",
    };
  
    return (
      <>
    <div style={myStyle}>
    <Form onSubmit={this.onSubmit} style={{marginLeft:"20%", marginRight:"20%" , marginTop:"4%"}}>
    <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label><b>Course Name</b></Form.Label>
      <Form.Control value={this.state.name} onChange={this.onChangeCourseName} type="courseName" placeholder="Enter course name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label><b>Image Path</b></Form.Label>
      <Form.Control value={this.state.pic} onChange={this.onChangeImage}  type="pic" placeholder="../assets/image.jpg" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label><b>Course Overview</b></Form.Label>
    <Form.Control value={this.state.overview} onChange={this.onChangeOverview}   placeholder="Course overview.." />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label><b>Web Enrollment Link</b></Form.Label>
    <Form.Control value={this.state.link} onChange={this.onChangeLink}  placeholder= "Enrollment Link"></Form.Control>
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label><b>Start Date</b></Form.Label>
      <Form.Control value={this.state.sdate} onChange={this.onChangeSdate}  placeholder="25/11/20" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label><b>End Date</b></Form.Label>
      <Form.Control value={this.state.edate} onChange={this.onChangeEdate} placeholder="25/02/22" />
    </Form.Group>
  </Row>

  <Button variant="primary" type="submit" onClick={this.onSubmit}>
    Submit
  </Button>
</Form>
</div>
</>
    );
  }
}

export default CourseForm