import React from 'react';
import { Tab, Tabs, FormGroup, FormLabel, FormControl, Row, Col, Form } from 'react-bootstrap';

class Report extends React.Component {
  state = {
    tabName: 'station'
  }
  render() {
    const { tabName } = this.state;
    const {} = this.props;
    return (
      <div>
        <Row>
          <Col>
          <FormGroup className="">
          <FormLabel>
            Start date
          </FormLabel>
          <FormControl type="date" />
        </FormGroup>
          </Col>
          <Col>
          <FormGroup className="">
          <FormLabel>
            End date
          </FormLabel>
          <FormControl type="date" />
        </FormGroup>
          </Col>
        </Row>
        Shift {':  '}
        <Form.Check inline label="All" type={"radio"} name={"shift"} checked />
        <Form.Check inline label="1" type={"radio"} name={"shift"} />
      <Form.Check inline label="2" type={"radio"} name={"shift"} />
      <Form.Check inline label="3" type={"radio"} name={"shift"} />
        <Tabs
        id="controlled-tab-example"
        activeKey={tabName}
        onSelect={tabName => this.setState({ tabName })}
      >
        <Tab eventKey="station" title="By station">
          bs
        </Tab>
        <Tab eventKey="operator" title="By Operator">
          by operator
        </Tab>
      </Tabs>
      </div>
    )
  }
}

export default Report;