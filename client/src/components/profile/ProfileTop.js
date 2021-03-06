import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    lastLogin,
    isOnline,
    user: { name, avatar },
  },
}) => {
  return (
    <div className="profile-top bg-dark p-2">
      <img className="round-img my-1" src={avatar} alt="" />
      <h1 className="large">{name}</h1>
      {status &&
        <p className="lead">
          {status}
        </p>
      }
      <p className="lead">
        {company && <span>{company}</span>}
      </p>
      {isOnline === true && (
        <div className="thisUserIsOnline">
          <p>info: {isOnline}</p>
          <i style={{ color: 'green' }} className="fas fa-globe"></i>
          <p>Den här användaren är online</p>{' '}
        </div>
      )}
      <p>
        Senast inloggad:{' '}
        <Moment className="stats" fromNow>
          {lastLogin}
        </Moment>
      </p>
      <p>{location && <span>{location}</span>}</p>
      <div className="icons my-1">
        {website && (
          <a href={website} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-globe fa-2x"></i>
          </a>
        )}
        {social && social.twitter && (
          <a href={social.twitter} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        )}
        {social && social.facebook && (
          <a href={social.facebook} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
        )}
        {social && social.linkedin && (
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        )}
        {social && social.youtube && (
          <a href={social.youtube} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube fa-2x"></i>
          </a>
        )}
        {social && social.instagram && (
          <a href={social.instagram} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        )}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
