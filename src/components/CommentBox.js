import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { addComment, fetchComments } from 'actions/comments';
import { useHistory } from 'react-router-dom';

const CommentBox = ({ addComment, fetchComments }) => {
  const history = useHistory();
  const [comment, setComment] = useState('');

  const resetComment = useCallback(() => {
    setComment('');
  }, []);

  const onFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!comment) return;
      addComment(comment);
      resetComment();
      history.push('/comments');
    },
    [resetComment, addComment, comment, history]
  );

  const onCommentChange = useCallback((e) => {
    const value = e.target.value;
    setComment(value);
  }, []);

  const onFetchComments = useCallback(() => {
    fetchComments();
    history.push('/comments');
  }, [fetchComments, history]);

  return (
    <div className="comment-box">
      <form onSubmit={onFormSubmit}>
        <h3>New Comment</h3>
        <textarea value={comment} onChange={onCommentChange} />
        <div className="btns">
          <input type="submit" disabled={!comment} />
          <input type="reset" onClick={resetComment} />
          <button className="fetch-comments" onClick={onFetchComments}>
            更多留言
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect(null, { addComment, fetchComments })(CommentBox);
