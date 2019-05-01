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

class App extends Component {
  state = {}
  render() {
    const { } = this.state;
    return (
      <Router> <div>
            <Navbar bg="dark" variant="dark" className="navbar">
              <Navbar.Brand>
                <Link to="/admin"> Admin view</Link>
                </Navbar.Brand>
              <Nav>
                <Link to="/admin/job" className="nav-link">
                Job
                </Link>
              </Nav>
              <Nav>
                <Link to="/admin/report" className="nav-link">
                  Report
                </Link>
              </Nav>
            </Navbar>
            </div>
          
          <Container>
            <Route path="/admin" exact component={Dashboard} />
            <Route path="/admin/job" exact component={JobSearch} />
            <Route path="/admin/job-detail/:id"  component={JobDetail} />
            <Route path="/admin/report" exact component={Report} />
            <Route path="/admin/addCode" exact component={AddCode} />
            <Route path="/operator" exact component={Operator}/>
          </Container>
        </Router>
    );
  }
}

export default App;
