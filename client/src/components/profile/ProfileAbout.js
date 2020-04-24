import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    nrComments,
    nrPosts,
    nrLikes,
    user: { name },
  },
}) => (
  <div className="profile-about bg-light p-2">
    {bio && (
      <Fragment>
        <h2 className="text-primary">{name.trim().split(' ')[0]}'s Sida</h2>
        <p>{bio}</p>
        <div className="line"></div>
      </Fragment>
    )}

    <h2 className="text-primary">Skills</h2>
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
        Antal inlägg i forumet: <b> {nrPosts} </b>
      </p>
      <p>
        Antal kommentarer: <b> {nrComments} </b>
      </p>
      <p>
        Ackumulerad forumpoäng: <b> {nrLikes} </b>
      </p>
    </Fragment>
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
