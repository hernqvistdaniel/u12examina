import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PostItem from '../posts/PostItem';
import CommentForm from '../post/CommentForm';
import CommentItem from '../post/CommentItem';
import Spinner from '../layout/Spinner';
import { getPost } from '../../actions/post';

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost]);

  return loading || post === null ? (
    <Spinner />
  ) : (
      <Fragment>
        <Link to="/posts" className="btn btn-success">
          Tillbaka till forumet
      </Link>
        <PostItem post={post} showActions={false} />
        <div className="comments">
          {post.comments.map((comment) => (
            <Fragment>
              <CommentItem key={comment._id} comment={comment} postId={post._id} />
              <p className="commentHR">• • •</p>
            </Fragment>
          ))}
        </div>
        <CommentForm postId={post._id} />
      </Fragment>
    );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
