import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from'./Dashboard';
import Sign from './Sign';
import Trade from './Trade';
import Kitchen from './Kitchen';
import Register from './RegisterReduxForm';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/main" component={Dashboard} />
            <Route exact path="/Sign" component={Sign} />
            <Route exact path="/register_user" component={Landing} />
            <Route exact path="/trade" component={Trade} />
            <Route exact path="/kitchen" component={Kitchen} />



          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default connect(null, actions)(App);
