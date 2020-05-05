import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({
  deletePost,
  addLike,
  removeLike,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions,
}) => (
    <Link
      to={`/posts/${_id}`}
      className="post bg-light p-1 my-1"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="postAvatar">
        <Link
          to={`/profile/${user}`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <img className="round-img" src={avatar} alt="" />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">
          Skrivet <Moment fromNow>{date}</Moment>
        </p>
        {showActions && (
          <div className="buttonCont">
            <span className="votesDiv">
              <i
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  addLike(_id);
                }}
                style={{ cursor: 'pointer' }}
                className="fas fa-angle-up fa-lg"
              ></i>{' '}
              <span>{likes.length}</span>
              <i
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  removeLike(_id);
                }}
                style={{ cursor: 'pointer' }}
                className="fas fa-angle-down fa-lg"
              ></i>{' '}
            </span>
            <Link
              to={`/posts/${_id}`}
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="btn btn-primary"
            >
              Kommentarer{' '}
              {comments.length > 0 && (
                <span className="comment-count">{comments.length}</span>
              )}
            </Link>
            {!auth.loading && user === auth.user._id && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  deletePost(_id);
                }}
                type="button"
                className="btn btn-danger roundedButton"
              >
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>
        )}
      </div>
    </Link>
  );

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  addLike,
  removeLike,
  deletePost,
})(PostItem);
