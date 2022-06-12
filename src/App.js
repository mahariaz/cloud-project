import './App.css';
// import { Article,CTA, Navs } from './components';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navs } from './components';
import CourseForm from './components/CourseForm/CourseForm';
import Courses from './components/Courses/Courses';
import { Piechart } from './components';
import { Pie } from 'react-chartjs-2';

import {DisplayCourse} from './components'
import {Dashboard} from './components'

// import Register
function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
      <Navs />
        
        <Route exact path="/" component={Dashboard }/>
        {/* <Dashboard /> */}
        {/* <DisplayCourse /> */}
        
        {/* <Header /> */}
        
      </div>
      <BrowserRouter>
        <Switch>
        <Route path="/Courses" component={Courses}/>
        <Route path="/CourseForm" component={CourseForm}/>
 
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
