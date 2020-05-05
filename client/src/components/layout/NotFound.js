import React, { Fragment } from 'react';

const NotFound = () => {
  return (
    <Fragment>
      <h1 className="x-large text-primary">
        <i className="fas fa-exclamation-triangle" /> Sidan kan inte hittas
      </h1>
      <p className="large">Sorry, men den här sidan existerar inte...</p>
    </Fragment>
  );
};

NotFound.propTypes = {};

export default NotFound;
