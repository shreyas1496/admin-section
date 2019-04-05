import React from 'react';
import MaterialTable from 'material-table'
import { Row, Badge, Modal, Button } from 'react-bootstrap';

const data = {
  MO101: [
    { srno: '1', station_name: 'NDE assembly & Fitment', status: 'Done', time: '11.55 AM', operator: 'sachin' },
    { srno: '2', station_name: 'Electrical', status: 'Done', time: '12.15 PM', operator: 'virat' },
    { srno: '3', station_name: 'ZPF Testing', status: 'In Progress', time: '', operator: '' },
    { srno: '4', station_name: 'Final Assembly', status: '', time: '', operator: '' },
    { srno: '5', station_name: 'Before Painting Inspection', status: '', time: '', operator: '' },
  ],
  MO102: [
    { srno: '1', station_name: 'NDE assembly & Fitment', status: 'Done', time: '07.15 AM', operator: 'dravid' },
    { srno: '2', station_name: 'Electrical', status: 'Done', time: '07.45 AM', operator: 'laxman' },
    { srno: '3', station_name: 'ZPF Testing', status: 'Done', time: '08.20 AM', operator: 'pant' },
    { srno: '4', station_name: 'Final Assembly', status: 'Done', time: '08.55 AM', operator: 'dravid' },
    { srno: '5', station_name: 'Before Painting Inspection', status: 'Done', time: '09.40 AM', operator: 'jadeja' },
  ]
}

class JobDetail extends React.Component {
  state = {
    show: false
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = (rowdata) => {
    if (!rowdata.operator) {
      alert('Job not yet complete');
      return;
    }
    this.setState({ show: true });
  }
  render() {
    const {} = this.state;
    const { match } = this.props;
    console.log(match);
    return (
      <div>
        <h3>Details</h3>
        <Row>
          
          Star number: S0L24G1 245185
        </Row>
        <MaterialTable
            columns={[
              { title: 'Sr.NO', field: 'srno' },
              { title: 'Station Name', field: 'station_name' },
              { title: 'Status', field: 'status'},
              { title: 'Time', field: 'time'},
              { title: 'Operator', field: 'operator'},
            ]}
            data={data[(match.params.id || '').toUpperCase()] || []}
            title={`Order ${match.params.id}`}
            actions={[
              {
                icon: 'call_made',
                onClick: (e, rowdata) => this.handleShow(rowdata)
              }
            ]}
          />

<Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Checksheet Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Data submitted by: Dhoni<br/>
            Voltage: 300V<br/>
            Amps: 210A<br/>
            Was it checked for 800 rpm: YES<br/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default JobDetail;