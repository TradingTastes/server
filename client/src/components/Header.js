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



  // <ul>
  //   {this.renderContent()}
  // </ul>

  render() {
    return (
      <div>
      <nav className="teal lighten-3">
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/main' : '/'}
            className="left brand-logo">
            Trading Tastes
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/Trade">FIND FOOD</a></li>
            <li><a href="/Kitchen">Build Your Kitchen</a></li>
            <li><Link to={'/Sign'}>SIGN IN</Link></li>
            <li><a href="/api/logout">SIGN OUT </a></li>
          </ul>
        </div>
      </nav>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
