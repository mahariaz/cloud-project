import React from 'react'

import {materials,assess,learners,courses} from '../../assets';

import {Col,Card} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Piechart from '../Piechart/Piechart';
import CourseCard from '../CourseCard/CourseCard';
const Dashboard = () => {
  return (
    <div style={{marginLeft:"4%", marginRight:"4%" , marginTop:"2%"}}>
    <h1></h1>
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

     <div>
     <Piechart />
     </div>
</div>
  )
}

export default Dashboard