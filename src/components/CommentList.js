import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { deleteComment } from 'actions/comments';

const CommentList = ({ comments, deleteComment }) => {
  const onDeleteClick = useCallback(
    (index) => {
      deleteComment(index);
    },
    [deleteComment]
  );
  return (
    <div className="comment-list">
      {comments.map((comment, index) => (
        <div key={index} className="item">
          <div
            className="delete-btn"
            onClick={() => {
              onDeleteClick(index);
            }}
          />
          {comment}
        </div>
      ))}
    </div>
  );
};

export default connect(
  (state) => ({
    comments: state.comments.comments,
  }),
  { deleteComment }
)(CommentList);
