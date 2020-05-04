import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/news">
          <i className="fas fa-newspaper"></i>{' '}
          <span className="hide-sm">Nyheter</span>
        </Link>
      </li>
      <li>
        <Link to="/map">
          <i className="fas fa-map-marker-alt"></i>{' '}
          <span className="hide-sm">Map</span>
        </Link>
      </li>
      <li>
        <Link to="/profiles">
          <i className="fas fa-users"></i>{' '}
          <span className="hide-sm">Användare</span>
        </Link>
      </li>
      <li>
        <Link to="/posts">
          <i className="fas fa-envelope"></i>{' '}
          <span className="hide-sm">Forum</span>
        </Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-cog"></i> <span className="hide-sm">Profil</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt"></i>{' '}
          <span className="hide-sm">Logga ut</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/news">
          <i className="fas fa-newspaper"></i>{' '}
          <span className="hide-sm">Nyheter</span>
        </Link>
      </li>
      <li>
        <Link to="/map">
          <i className="fas fa-map-marker-alt"></i>{' '}
          <span className="hide-sm">Karta</span>
        </Link>
      </li>
      <li>
        <Link to="/profiles">
          <i className="fas fa-user"></i>{' '}
          <span className="hide-sm">Användare</span>
        </Link>
      </li>
      <li>
        <Link to="/register">
          <i className="fas fa-user-plus"></i>{' '}
          <span className="hide-sm">Registrera</span>
        </Link>
      </li>
      <li>
        <Link to="/login">
          <i className="fas fa-sign-in-alt"></i>{' '}
          <span className="hide-sm">Logga in</span>
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-recycle"></i> Rcycld
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
