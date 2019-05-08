import React from 'react';
import { Link } from 'react-router-dom';

class MainPage extends React.Component {
  state = {}
  render() {
    return (
      <ul>
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/operator">Operator</Link></li>
      </ul>
    )
  }
}

export default MainPage;
