import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { addComment } from 'actions/comments';

const CommentBox = ({ addComment }) => {
  const [comment, setComment] = useState('');

  const resetComment = useCallback(() => {
    setComment('');
  }, []);

  const onFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      addComment(comment);
      resetComment();
    },
    [resetComment, addComment, comment]
  );

  const onCommentChange = useCallback((e) => {
    const value = e.target.value;
    setComment(value);
  }, []);

  return (
    <div className="comment-box">
      <form onSubmit={onFormSubmit}>
        <h3>New Comment</h3>
        <textarea value={comment} onChange={onCommentChange} />
        <div className="btns">
          <input type="submit" />
          <input type="reset" onClick={resetComment} />
        </div>
      </form>
    </div>
  );
};

export default connect(null, { addComment })(CommentBox);
