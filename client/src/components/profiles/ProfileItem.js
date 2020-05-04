import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
    isOnline,
  },
}) => {
  return (
    <div className="profile">
      <img src={avatar}></img>
      <div>
        <h2>{name}</h2>
        <p>--<i>{status}</i>--</p>
        <p className="">{location && <span>{location}</span>}</p>

        {isOnline && (
          <div>
            <i style={{ color: 'green' }} className="fas fa-globe">
              {' '}
              Online just nu
            </i>{' '}
          </div>
        )}
        <p>
          {company && <span>Jobbar på/med: <b>{company}</b></span>}
        </p>
        <Link to={`/profile/${_id}`} className="btn btn-primary">
          Profil
        </Link>
      </div>
      <ul>
        <p>Intressen:</p>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className="text-primary">
            <i className="fas fa-check"></i> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
