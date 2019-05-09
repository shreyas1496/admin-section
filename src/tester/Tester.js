import React from 'react';
import JobDetail from '../job/JobDetail';
import { Container } from 'react-bootstrap';

class Tester extends React.Component {
  render() {
    return (
      <div>
        <div className="com-topnav">
        <div className="com-topnav-title">ZPF Testing</div>
        </div>
        <Container>
        
        <JobDetail match={{params: {id: "mo101"}}} isTester={this.props.isTester} />
        </Container>
      </div>
    )
  }
}

export default Tester;