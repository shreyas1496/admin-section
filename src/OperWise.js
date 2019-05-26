import React from 'react';
import { Container } from 'react-bootstrap';

const data = [
  
]

class OperatorWise extends React.Component {

  state = {
    show: false
  }

  render() {
    const { show } = this.state;
    return (
      <Container>
        <h3>OperatorWise report</h3>
        <br />
        <br />
        <br />
        
        Operator
      <select>
        <option value="0">abc</option>
        <option value="1">pqr</option>
        <option value="2">shreyas</option>
        <option value="3">smita</option>
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
                <th>Station</th>
                <th>Target</th>
                <th>Actual</th>
              </tr>

              <tr>
                <td>21/2</td>
                <td>1</td>
                <td>frame</td>
                <td>5</td>
                <td>2</td>
              </tr>
              
              <tr>
                <td>21/2</td>
                <td>1</td>
                <td>nde</td>
                <td>5</td>
                <td>2</td>
              </tr>

              <tr>
                <td>22/2</td>
                <td>1</td>
                <td>ZPF</td>
                <td>5</td>
                <td>2</td>
              </tr>

              <tr>
                <td>21/2</td>
                <td>1</td>
                <td>painting</td>
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

export default OperatorWise;
