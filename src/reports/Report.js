import React from 'react';
import { Tab, Tabs, FormGroup, FormLabel, FormControl, Row, Col, Form, Table } from 'react-bootstrap';
import MaterialTable from 'material-table'

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
        <Form.Check inline label="All" type={"radio"} name={"shift"} defaultChecked />
        <Form.Check inline label="1" type={"radio"} name={"shift"} />
      <Form.Check inline label="2" type={"radio"} name={"shift"} />
      <Form.Check inline label="3" type={"radio"} name={"shift"} />
        <Tabs
        id="controlled-tab-example"
        activeKey={tabName}
        onSelect={tabName => this.setState({ tabName })}
      >
        <Tab eventKey="station" title="By station">
        <MaterialTable
            columns={[
              { title: 'Sr.NO', field: 'srno' },
              { title: 'Station Name', field: 'station_name' },
              { title: 'Job', field: 'job'},
              { title: 'Operator', field: 'operator'},
              { title: 'Time', field: 'time'},
            ]}
            data={[
              { srno: '1', station_name: 'NDE assembly & Fitment', job: 'Mo101', time: '07.10 AM', operator: 'sachin' },
              { srno: '2', station_name: 'NDE assembly & Fitment', job: 'Mo102', time: '08.50 AM', operator: 'rohit' },
              { srno: '3', station_name: 'ZPF Testing', job: 'Mo102', time: '11.30 AM', operator: 'malinga' },
              { srno: '4', station_name: 'NDE assembly & Fitment', job: 'Mo103', time: '14.50 AM', operator: 'sachin' },
              { srno: '5', station_name: 'Final assembly', job: 'Mo103', time: '08.50 AM', operator: 'malinga' }
            ]}
            title="Station wise report"
            options={{
              columnsButton: true,
              exportButton: true,
            }}
          />
        </Tab>
        <Tab eventKey="operator" title="By Operator">
        <MaterialTable
            columns={[
              { title: 'Sr.NO', field: 'srno' },
              { title: 'Operator', field: 'operator'},
              { title: 'Job count', field: 'count' },
            ]}
            data={[
              {srno: '1', operator: 'dhoni', count: 12},
              {srno: '2', operator: 'rohit', count: 10},
              {srno: '3', operator: 'pandya', count: 2},
              {srno: '4', operator: 'ashwin', count: 16},
              {srno: '5', operator: 'bumrah', count: 5},
              {srno: '6', operator: 'sachin', count: 7},
            ]}
            title="Operator wise report"
            options={{
              columnsButton: true,
              exportButton: true,
            }}
          />
        </Tab>
        <Tab eventKey="crane" title="Crane checksheet">
        <MaterialTable
            columns={[
              { title: 'Checkpoint', field: 'chp' },
              { title: 'Status', field: 'status' },
              { title: 'Operator', field: 'operator'},
              { title: 'Date and time', field: 'date' },
              { title: 'Crane number', field: 'crno' },
            ]}
            data={[
              {crno: 'c1', operator: 'dhoni', date: '10 July 2018/ 08:55 am', chp: 'Location of the main switch to disconnect supply', status: 'OK'},
              {crno: 'c1', operator: 'dhoni', date: '10 July 2018/ 08:55 am', chp: 'Check pendant controls. Condition of box and wires', status: 'OK'},
              {crno: 'c1', operator: 'dhoni', date: '10 July 2018/ 08:55 am', chp: 'Check wire rope', status: 'OK'},
              {crno: 'c1', operator: 'dhoni', date: '10 July 2018/ 08:55 am', chp: 'Safety latch for hook and its spring condition', status: 'OK'},
              {crno: 'c2', operator: 'rohit', date: '10 July 2018/ 08:55 am', chp: 'Location of the main switch to disconnect supply', status: 'OK'},
              {crno: 'c2', operator: 'rohit', date: '10 July 2018/ 08:55 am', chp: 'Check pendant controls. Condition of box and wires', status: 'OK'},
              {crno: 'c2', operator: 'rohit', date: '10 July 2018/ 08:55 am', chp: 'Check wire rope', status: 'OK'},
              {crno: 'c2', operator: 'rohit', date: '10 July 2018/ 08:55 am', chp: 'Safety latch for hook and its spring condition', status: 'OK'},
            ]}
            title="Crane status report"
            options={{
              columnsButton: true,
              exportButton: true,
            }}
          />
        </Tab>
      </Tabs>
      </div>
    )
  }
}

export default Report;