import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login With Google</a></li>;
      default:
        return [<li key="2"><a href="/api/logout">Logout</a></li>];
    }
  }

  render() {
    return (
      <nav class="teal lighten-3">
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo"
          >
          Trading Tastes
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="sass.html">Find Food</a></li>
            <li><a href="badges.html">Make Food </a></li>
            <li><a href="collapsible.html"></a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
