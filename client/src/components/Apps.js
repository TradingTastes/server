import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';

class Apps extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Route path="/" render={
        () => {
          return (<h1>Welcome Home!</h1>);
        }
      }/>
      <Route path="/about" render={
        () => {
          return (<h1>Welcome About!</h1>);
        }
      }/>

      </div>

      </Router>
    );
  }
}
