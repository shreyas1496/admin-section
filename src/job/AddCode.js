import React from 'react';
import "./AddCode.css";
import { Form, Button, Alert } from 'react-bootstrap';

class AddCode extends React.Component {


  state = {
    
  }
  render() {
    const { file, isValid } = this.state;
    const {} = this.props;
    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Please select file</Form.Label>
            <Form.Control type="file" onChange={e => {
              const parts = e.target.value.split('.');
              if (parts[parts.length - 1] && /xlsx?/.test(parts[parts.length - 1])) {
                this.setState({
                  isValid: true,
                  file: e.target.value
                });
                return;
              }
              console.log(parts);
              this.setState({
                isValid: false
              });
            }}></Form.Control>
            {isValid === false && <Alert variant="warning">Please choose excel</Alert>}
            <Form.Text>This will add the MO codes to the system</Form.Text>
          </Form.Group>
        </Form>
        <Button type="submit" onClick={e => {
          if (file && isValid) {
            setTimeout(alert, 2000, 'Submitted sucessfully');
            return;
          }
          this.setState({
            isValid: false
          })
        }}>Submit</Button>
      </div>
    )
  }
}

export default AddCode;