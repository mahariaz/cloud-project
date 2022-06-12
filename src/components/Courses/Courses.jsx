import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

import {crs1,crs2,crs3} from '../../assets';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {materials,assess,learners,courses} from '../../assets';
import CourseCard from '../CourseCard/CourseCard';
export class Courses extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/coursedb/')
      .then(res => {
        this.setState({
          courses: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.courses.map((res, i) => {
      return <Col><CourseCard obj={res} key={i} /></Col>;
    });
  }
  render() {
    const obj={
                
      pic:{crs1},
      courseName:"DataBase",
      overview:"Learn about Relational data models, schemas, sql,nosql and much more through this course.",
      link:"www.db/enroll.com",
      sdate:"22/7/21",
      edate:"9/1/22"
    }
    return (
      <div style={{marginLeft:"4%", marginRight:"4%" , marginTop:"2%"}}>
           <h1>All Courses:</h1>
           <Row xs={1} md={3} className="g-4">
                 
                      {this.DataTable()}
                    
               
            </Row>
            <Row xs={1} md={4} className="g-5">
         <Col>
         <Card>
            <Card.Img variant="top" src= {learners}/>
            <Card.Body>
            <Card.Title> "340"</Card.Title>
            <Card.Text>"LEARNERS" </Card.Text>
            </Card.Body>
        </Card>
         </Col>

         <Col>
         <Card>
            <Card.Img variant="top" src= {courses}/>
            <Card.Body>
            <Card.Title> "100"</Card.Title>
            <Card.Text>"COURSES" </Card.Text>
            </Card.Body>
        </Card>

         </Col>
             
         <Col>
         <Card>
            <Card.Img variant="top" src= {assess}/>
            <Card.Body>
            <Card.Title> "140"</Card.Title>
            <Card.Text>"ASSESSMENTS" </Card.Text>
            </Card.Body>
        </Card>
         </Col>

         <Col>
         <Card>
            <Card.Img variant="top" src= {materials}/>
            <Card.Body>
            <Card.Title> "140"</Card.Title>
            <Card.Text>"MATERIALS" </Card.Text>
            </Card.Body>
        </Card>
         </Col>
     </Row>

            


          {/* <div class="row">
            <div class="col-sm-3">
          <Card style={{ width: '18rem' , marginTop:"2%"}}>
            <Card.Img variant="top" src={img1} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem' , marginTop:"2%" }}>
            <Card.Img variant="top" src={img1} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
    </div>
    </div> */}
    </div>
    )
  }
}

export default Courses