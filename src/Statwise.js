import React from 'react';
import {Link} from 'react-router-dom';
import { Container } from 'react-bootstrap';
const data = [
  
]

class StationWise extends React.Component {

  state = {
    show: false
  }

  render() {
    const { show } = this.state;
    return (
      <Container>
        <h3>Station wise report</h3>
        <br />
        <br />
        <br />
        Station
      <select>
        <option value="0">NDE</option>
        <option value="1">frame</option>
        <option value="2">ZPF</option>
        <option value="3">Final assembly</option>
      </select>
        <br/>
        Start Date
        <input type="date"/>
        <br/>
        End Date
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
                <th>Date</th>
                <th>Shift</th>
                <th>Operator</th>
                <th>Target</th>
                <th>Actual</th>
              </tr>

              <tr>
                <td>21/2</td>
                <td>1</td>
                <td><Link to="/operatorwise">abc</Link></td>
                <td>5</td>
                <td>2</td>
              </tr>
              
              <tr>
                <td>21/2</td>
                <td>1</td>
                <td>pqr</td>
                <td>5</td>
                <td>2</td>
              </tr>

              <tr>
                <td>21/2</td>
                <td>1</td>
                <td>abc</td>
                <td>5</td>
                <td>2</td>
              </tr>

              <tr>
                <td>21/2</td>
                <td>1</td>
                <td>mlp</td>
                <td>5</td>
                <td>2</td>
              </tr>
            </table>
          </div>

        }
      </Container>
    )
  }
}

export default StationWise;
