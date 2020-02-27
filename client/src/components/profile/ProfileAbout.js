import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    nrComments,
    nrPosts,
    nrLikes,
    user: { name }
  }
}) => (
  <div className="profile-about bg-light p-2">
    {bio && (
      <Fragment>
        <h2 className="text-primary">{name.trim().split(' ')[0]}'s Bio</h2>
        <p>{bio}</p>
        <div className="line"></div>
      </Fragment>
    )}

    <h2 className="text-primary">Skill Set</h2>
    <div className="skills">
      {skills.map((skill, index) => (
        <div key={index} className="p-1">
          <i className="fas fa-check" /> {skill}
        </div>
      ))}
    </div>

    <Fragment>
      <div className="line"></div>
      <h2 className="text-primary">Stats</h2>

      <p>
        Total number of Posts: <b> {nrPosts} </b>
      </p>
      <p>
        Total number of Comments: <b> {nrComments} </b>
      </p>
      <p>
        Your Posts total scores: <b> {nrLikes} </b>
      </p>
    </Fragment>
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
