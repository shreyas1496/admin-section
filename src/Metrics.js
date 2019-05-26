import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const data = [
  
]

class Metrics extends React.Component {

  state = {
    show: false
  }

  render() {
    const { show } = this.state;
    return (
      <Container>
        <h3>Shift output report</h3>
        <br />
        <br />
        <br />
        Date
        <input type="date"/>
        <br/>
        Shift
        <select >
          <option value="0">All</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <br />
        <button onClick={() => this.setState({ show: true})}>Generate report</button>
        {
          !show ? 'no report to show' : <div>
            <table>
              <tr >
                <th>Station</th>
                <th>Operators</th>
                <th>Target</th>
                <th>Actual</th>
                <th>Remarks</th>
              </tr>
              <tr style={{backgroundColor: '#bd2130'}}>
                  <td><Link to="/stationwise">NDE</Link> </td>
                  <td>
                    <Link to="/operatorwise">abc</Link><br />
                    <Link to="/operatorwise">pqr</Link><br />
                    <Link to="/operatorwise">mar</Link>
                  </td>
                  <td>20</td>
                  <td>10</td>
                  <td><textarea /><button>Save</button></td>
              </tr>
              <tr style={{backgroundColor: '#1e7e34'}}>
                  <td>wound</td>
                  <td>
                    <Link to="/operatorwise">abc</Link><br />
                  </td>
                  <td>20</td>
                  <td>20</td>
                  <td>-</td>
              </tr>
              <tr style={{backgroundColor: '#1e7e34'}}>
                  <td>trickkle</td>
                  <td>
                    <Link to="/operatorwise">abc</Link><br />
                  </td>
                  <td>30</td>
                  <td>30</td>
                  <td>-</td>
              </tr>
              
              <tr style={{backgroundColor: '#bd2130'}}>
                  <td>Frame pressing</td>
                  <td>
                    <Link to="/operatorwise">abc</Link><br />
                  </td>
                  <td>35</td>
                  <td>25</td>
                  <td><textarea /><button>Save</button></td>
              </tr>

              <tr style={{backgroundColor: '#1e7e34'}}>
                  <td>painting</td>
                  <td>
                    <Link to="/operatorwise">abc</Link><br />
                    <Link to="/operatorwise">pqr</Link><br />
                  </td>
                  <td>22</td>
                  <td>22</td>
                  <td>-</td>
              </tr>
            </table>
          </div>

        }
      </Container>
    )
  }
}

export default Metrics;
