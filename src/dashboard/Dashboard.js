import React from "react";
import "./Dashboard.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Dashboard extends React.Component {
  state = {};
  render() {
    const {} = this.state;
    const {} = this.props;
    return (
      <div className="dashboard">
        <Card className="dash-card">
          <Card.Body>
            <FontAwesomeIcon icon="rocket" className="icon" />
            <Link to="/job">
              <Card.Title>Job</Card.Title>
            </Link>
            <Card.Text>Search for job details with MO code</Card.Text>
          </Card.Body>
        </Card>
        <Card className="dash-card">
          <Card.Body>
          <FontAwesomeIcon icon="database" className="icon" />
            <Link to="/report">
              <Card.Title>Reports</Card.Title>
            </Link>
            <Card.Text>View interactive reports based on timings and operators</Card.Text>
          </Card.Body>
        </Card>
        <Card className="dash-card">
          <Card.Body>
          <FontAwesomeIcon icon="plus" className="icon" />
            <Link to="/addcode">
              <Card.Title>Add MO code</Card.Title>
            </Link>
            <Card.Text>Add new MO codes via excel</Card.Text>
          </Card.Body>
        </Card>
        <Card className="dash-card">
          <Card.Body>
            <FontAwesomeIcon icon="cogs" className="icon" />
            <Link to="/settings">
              <Card.Title>Settings</Card.Title>
            </Link>
            <Card.Text>Edit settings for the app</Card.Text>
          </Card.Body>
        </Card>
        <Card className="dash-card">
          <Card.Body>
            <FontAwesomeIcon icon="redo" className="icon" />
            <Link to="/rejection">
              <Card.Title>Rejection List</Card.Title>
            </Link>
            <Card.Text>View More</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Dashboard;
