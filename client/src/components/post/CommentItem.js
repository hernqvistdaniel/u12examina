import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/post';

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment,
}) => {
  return (
    <div className="post border-primary">
      <Link to={`/profile/${user}`}>
        <img style={{ width: '20px' }} src={avatar} alt="" />
        <p>{name}</p>
        <p className="post-date">
          Skrivet <Moment fromNow>{date}</Moment>{' '}
        </p>
      </Link>
      <div>
        <p className="my-1">{text}</p>
        {!auth.loading && user === auth.user._id && (
          <button
            className="commentDelete"
            style={{ color: 'red', cursor: 'pointer' }}
            onClick={(e) => {
              e.stopPropagation();
              deleteComment(postId, _id);
            }}
          >
            X
          </button>
        )}
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
