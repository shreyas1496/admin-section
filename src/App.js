import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css'
import Operator from './operator/Operator';
import AdminHome from './router/AdminHome';
import MainPage from './router/MainPage';
import Tester from './tester/Tester';

class App extends Component {
  state = {}
  render() {
    const { } = this.state;
    return (
      <Router> 
            <Route path="/" exact component={MainPage} />
            <Route path="/admin" component={AdminHome} />
            <Route path="/operator" exact component={Operator}/>
            <Route path="/tester" exact render={(props) => <Tester {...props} isTester={true} />}/>
            <Route path="/reworker" exact render={(props) => <Tester {...props} isReworker={true} />}/>
        </Router>
    );
  }
}

export default App;
