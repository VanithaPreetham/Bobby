import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Task2 Home.html';
import AboutUs from './Task2 About.html';
import ContactUs from './Task2 Contact.html';
import SignUp from './Task2 Signup.html';
import Login from './Task2 Login.html';
import Task2 from './Task1.html';

function Task5() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutUs} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/data" component={DataPage} />
      </Switch>
    </Router>
  );
}

export default Task5;
