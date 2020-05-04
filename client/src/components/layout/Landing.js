import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/profiles" />;
  }

  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Rcycld</h1>
          <p className="lead">Återvinnings-communityt för alla!</p>
          <p className="startPageText">Här kan du skapa ett personligt konto,
          skriva med andra återvinnare i forumet och även hitta den närmaste återvinningsstationen beroende på var du befinner dig!</p>
          <br />
          <p className="startPageText">Du kan även hitta nyheter och tips och tricks som underlättar din återvinning!</p>
          <br />
          <p className="lead">Välkommen!</p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Registrera
            </Link>
            <Link to="/login" className="btn btn-light">
              Logga in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
