import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container } from 'react-bootstrap'
import Dashboard from './dashboard/Dashboard';
import JobSearch from './job/JobSearch';
import JobDetail from './job/JobDetail';
import Report from './reports/Report';
import AddCode from './job/AddCode';
import './App.css'
import Operator from './operator/Operator';
import AdminHome from './router/AdminHome';
import MainPage from './router/MainPage';

class App extends Component {
  state = {}
  render() {
    const { } = this.state;
    return (
      <Router> 
            <Route path="/" exact component={MainPage} />
            <Route path="/admin" component={AdminHome} />
            <Route path="/operator" exact component={Operator}/>
        </Router>
    );
  }
}

export default App;
