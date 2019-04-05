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

class App extends Component {
  state = {}
  render() {
    const { } = this.state;
    return (
      <Router> <div>
            <Navbar bg="dark" variant="dark" className="navbar">
              <Navbar.Brand>
                <Link to="/"> Admin view</Link>
                </Navbar.Brand>
              <Nav>
                <Link to="/job" className="nav-link">
                Job
                </Link>
              </Nav>
              <Nav>
                <Link to="/report" className="nav-link">
                  Report
                </Link>
              </Nav>
            </Navbar>
            </div>
          
          <Container>
            <Route path="/" exact component={Dashboard} />
            <Route path="/job" exact component={JobSearch} />
            <Route path="/job-detail/:id"  component={JobDetail} />
            <Route path="/report" exact component={Report} />
            <Route path="/addCode" exact component={AddCode} />
          </Container>
        </Router>
    );
  }
}

export default App;
