import React from 'react';
import MaterialTable from 'material-table'
import { Row, Form, Modal, Button, Table, ButtonToolbar } from 'react-bootstrap';
import TabRow from './TabRow';
import './JobDetail.css'

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

const tableData = [
  {
    level: 2,
    partCode: 'A055J074',
    desc: 'WASHER,STAR'
  },
  {
    level: 2,
    partCode: 'A052D953',
    desc: 'PLT,TRANSIT',
    nestedParts: [
      {
        level: 3,
        partCode: 'A050U046',
        desc: 'LUG,LIFTING'
      },
      {
        level: 3,
        partCode: 'A051C037',
        desc: 'BK,THD,M8x28.0 SQ',
        nestedParts: [
          {
            level: 4,
            partCode: 'A050U066',
            desc: 'Some level 4 part'
          },
          {
            level: 4,
            partCode: 'A055U066',
            desc: 'Another level 4 part'
          },
        ]
      },
      {
        level: 3,
        partCode: 'A052G931',
        desc: 'BUSH,SPCR,0.0,0.0'
      },
    ]
  },
  {
    level: 2,
    partCode: 'A053F122',
    desc: 'SCR,FLNG HD,M8x35,HEX'
  }
];



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
    const { rejcom, nextStat, revo } = this.state;
    const { match, isTester, isReworker } = this.props;
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
          <h3>Testing parameters</h3>
          <img src="/jobdetail.jpg" style={{padding: '20px', width: '1110px'}} />

          <h3>BOM sheet</h3>
          <TabRow list={tableData}/>


          <h3>Comments</h3>
          <div className="comment-box">
            <div className="comment">
              <h5>Sachin</h5>
              <div className="comment-meta">Tue 15 Jan 2:15pm - ZPF Testing</div>
              <div>Improper Voltage: Voltage spanning too high on load</div>
            </div>


            <div className="comment">
              <h5>Virat</h5>
              <div className="comment-meta">Tue 15 Jan 3:15pm - Rework</div>
              <div>Alternator defective. Replaced with new one. Sending back to ZPF Testing </div>
            </div>
          </div>

          {
            isTester && <div>
              <h4>Next Actions</h4>
              <Form.Group controlId="forccddmBasicPassword">
                <Form.Label>Rejection Comments</Form.Label>
                <Form.Control
                  type="text"
                  onChange={e => this.setState({ rejcom: e.target.value })}
                  autoComplete="off"
                  value={rejcom}
                />
              </Form.Group>
              <ButtonToolbar>
                <Button variant="success">Approve</Button>
                <Button variant="danger" style={{ marginLeft: '5px'}}>Reject</Button>
              </ButtonToolbar>
            </div>
          }

{
            isReworker && <div>
              <h4>Next Actions</h4>
              <Form.Group controlId="forccdddddmBasicPassword">
                <Form.Label>Reworker Comments</Form.Label>
                <Form.Control
                  type="text"
                  onChange={e => this.setState({ revo: e.target.value })}
                  autoComplete="off"
                  value={revo}
                />
              </Form.Group>
              <Form.Group controlId="forccddmBasicPassword">
                <Form.Label>Next station</Form.Label>
                <Form.Control
                as="select"
                  type="select"
                  onChange={e => this.setState({ nextStat: e.target.value })}
                  autoComplete="off"
                  value={nextStat}
                >
                 <option>ZPF Testing</option>
      <option>Final Assembly</option>
      <option>NDE Assembly and fitment</option>
                </Form.Control>
              </Form.Group>
              <Button>Submit</Button>
            </div>
          }

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