import {Card} from 'react-bootstrap';
import './coursecard.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
import Button from 'react-bootstrap/Button'

export default class CourseCard extends Component {
  constructor(props) {
    super(props)
    
      this.deleteCourse = this.deleteCourse.bind(this)
    
  
  }

  deleteCourse() {
 axios.delete(
        'http://localhost:3000/coursedb/delete-course/' + this.props.obj._id,
      )
      .then((res) => {
        console.log('Course successfully deleted!')
      })
      .catch((error) => {
        console.log(error)
      });
  window.location.reload(false);
  }

  render(){
  return (
    <div>
           
        <Card>
            <Card.Img variant="top" src= {this.props.obj.pic}/>
            <Card.Body>
            <Card.Title>{this.props.obj.color}</Card.Title>
            <Card.Text>{this.props.obj.overview} </Card.Text>
            <Card.Text>Enrollment Link:{this.props.obj.link} </Card.Text>
            <Card.Text>Course Start Date:{this.props.obj.sdate} </Card.Text>
            <Card.Text>Course End Date: {this.props.obj.edate} </Card.Text>
              <Button onClick={this.deleteCourse} size="sm" variant="danger">
                Delete
              </Button>
            </Card.Body>
        </Card>
    </div>
  )
}
}
