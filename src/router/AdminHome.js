import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import JobSearch from '../job/JobSearch';
import JobDetail from '../job/JobDetail';
import Report from '../reports/Report';
import AddCode from '../job/AddCode';
import Dashboard from '../dashboard/Dashboard';

class AdminHome extends React.Component {
  state = {
  
  }

  render() {
    const { match } = this.props;
   return (
      <div>
        <div>
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
            {/* <Switch> */}
            <Route path="/admin/job" exact component={JobSearch} />
            <Route path="/admin/job-detail/:id"  component={JobDetail} />
            <Route path="/admin/report" exact component={Report} />
            <Route path="/admin/addCode" exact component={AddCode} />
            <Route path="/admin" exact component={Dashboard} />
            {/* </Switch> */}
            </Container>
      </div>
    )
  }
}

export default AdminHome;