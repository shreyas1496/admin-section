import React from "react";
import {
  Container,
  Table,
  Form,
  Button,
  Alert,
  Row,
  FormGroup,
  FormLabel,
  FormControl
} from "react-bootstrap";
import CraneChecksheet from "./CraneChacksheet";

class Operator extends React.Component {
  state = {
    stage: 1,
    code: "",
    formData: {},
  };

  sequence = ["scan", "sheet", "form"];

  isDis = () => {
    const { formData } = this.state;
    const { visual, assembled, rpm, signature, text, torque } = formData;
    if (visual && assembled && rpm && signature && text && torque) {
      return 0;
    }
    return 1;
  }

  onSubmit = () => {
    if (this.state.code === "123") {
      this.setState({
        errorMessage: ''
      })
      this.next();
    } else {
      this.setState({
        errorMessage:
          "Invalid code / Please complete prior assembly steps before moving on to this station / Assembly already completed on the station etc as the case arries"
      });
    }
  };
  next = () => this.setState({ stage: this.state.stage + 1 });
  back = () => this.setState({ stage: this.state.stage - 1 });
  showBox = () => this.setState({ showBox: true })
  hideBox = () => this.setState({ showBox: false})
  render() {
    const { code, errorMessage, stage, formData } = this.state;
    console.log(this.isDis());
    console.log(typeof localStorage.getItem('crane'))
    const screen = this.sequence[stage - 1];
    return (
      <div>
<div className="com-topnav">
        <div className="com-topnav-title">NDE Fitment and assembly</div>
        </div>
<Container>
      {
        false ? <CraneChecksheet /> : <div className="ver-cen">
        <Row className="operator">
          {screen === "scan" && (
            <div>
              <h2>Please scan the mo code</h2>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Barcode</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="barcode"
                  value={code}
                  onChange={e => this.setState({ code: e.target.value })}
                  autoComplete="off"
                />
                {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
              </Form.Group>

              <Form.Group controlId="forccmBasicPassword">
                <Form.Label>Station</Form.Label>
                <Form.Control
                  type="text"
                  value="NDE Fitment and assembly "
                  onChange={e => this.setState({ codse: e.target.value })}
                  autoComplete="off"
                  disabled
                />
              </Form.Group>
              <Button type="submit" onClick={this.onSubmit}>
                Submit
              </Button>
              
            </div>
          )}

          {screen === "sheet" && (
            <div>
              <Row className="nav-buttons" style={{justifyContent: "space-between"}}>
          {stage !== 0 && (
            <Button onClick={this.back}>
              Back
            </Button>
          )}
          {
            stage !== this.sequence.length &&  <Button onClick={this.next}>
            Next
          </Button>
          }
        </Row>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Level</th>
                    <th>Part code</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2</td>
                    <td>A045N494</td>
                    <td>ASSY,END BRKT,F1,NDE</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>029-61107</td>
                    <td>M6 PL WASHER SZP</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>028-31507</td>
                    <td>M6 SC LOCKWASHER SZP</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>016-40721</td>
                    <td>M6X40 HEX HD SCR SZP</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>A045J128</td>
                    <td>BRKT,END,F1,NDE</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>001-102713</td>
                    <td>EXCITER 25 MM STATOR AW1</td>
                  </tr>
                </tbody>
              </Table>
              <img src="/images/stator.jpg" />
            </div>
          )}

          {screen === "form" && (
            <div>
              <Row className="nav-buttons">
          {stage !== 0 && (
            <Button onClick={this.back}>
              Back
            </Button>
          )}
          
        </Row>
              <Form>
                <Form.Group controlId="rpm">
                  <Form.Label>Rpm reading</Form.Label>
                  <Form.Control
                    as="select"
                    value={this.state.formData.rpm}
                    onChange={e =>
                      this.setState({
                        formData: {
                          ...this.state.formData,
                          rpm: e.target.value
                        }
                      })
                    }
                  >
                    <option value="">Choose</option>
                    <option value="1000-1500">1000-1500</option>
                    <option value="1500-2000">1500-2000</option>
                    <option value="25000-3000">25000-3000</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Please mention your remarks</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    value={this.state.formData.text}
                    onChange={e =>
                      this.setState({
                        formData: {
                          ...this.state.formData,
                          text: e.target.value
                        }
                      })
                    }
                  />
                </Form.Group>
                <FormGroup>
                  <Form.Label>Have you assembled all components showed in display</Form.Label><br/>
                  <Form.Check
                    inline
                    label="YES"
                    value="YES"
                    type={"radio"}
                    name={"shift"}
                    checked={formData.assembled === "YES"}
                    onChange={e =>
                      this.setState({
                        formData: {
                          ...this.state.formData,
                          assembled: e.target.value
                        }
                      })
                    }
                  />
                  <Form.Check
                    inline
                    label="NO"
                    value="NO"
                    type={"radio"}
                    name={"shift"}
                    checked={formData.assembled === "NO"}
                    onChange={e =>
                      this.setState({
                        formData: {
                          ...this.state.formData,
                          assembled: e.target.value
                        }
                      })
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Form.Label>Have you Applied the torque/Done markings</Form.Label><br/>
                  <Form.Check
                    inline
                    label="YES"
                    value="YES"
                    type={"radio"}
                    name={"shift2"}
                    checked={formData.torque === "YES"}
                    onChange={e =>
                      this.setState({
                        formData: {
                          ...this.state.formData,
                          torque: e.target.value
                        }
                      })
                    }
                  />
                  <Form.Check
                    inline
                    label="NO"
                    value="NO"
                    type={"radio"}
                    name={"shift2"}
                    checked={formData.torque === "NO"}
                    onChange={e =>
                      this.setState({
                        formData: {
                          ...this.state.formData,
                          torque: e.target.value
                        }
                      })
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Form.Label>Visually check & verify the product for defects after your process</Form.Label><br/>
                  <Form.Check
                    inline
                    label="OK"
                    value="OK"
                    type={"radio"}
                    name={"shift3"}
                    checked={formData.visual === "OK"}
                    onChange={e =>
                      this.setState({
                        formData: {
                          ...this.state.formData,
                          visual: e.target.value
                        }
                      })
                    }
                  />
                  <Form.Check
                    inline
                    label="NOT OK"
                    value="NOT OK"
                    type={"radio"}
                    name={"shift3"}
                    checked={formData.visual === "NOT OK"}
                    onChange={e =>
                      this.setState({
                        formData: {
                          ...this.state.formData,
                          visual: e.target.value
                        }
                      })
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel>
                    Please scan your Id
                  </FormLabel>
                  <FormControl
                    value={formData.signature}
                    onChange={e =>
                      this.setState({
                        formData: {
                          ...this.state.formData,
                          signature: e.target.value
                        }
                      })
                    }
                    />
                </FormGroup>

                <Button disabled={this.isDis()} onClick={() => {
                  alert(JSON.stringify(formData));
                  this.setState({stage: 1})
                }}>Submit</Button>
              </Form>
            </div>
          )}
        </Row>
        </div>
        
      }
        
        
      </Container>
      </div>
      
    );
  }
}

export default Operator;
