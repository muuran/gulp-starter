import React from 'react';
import Comment from './Comment';

var CommentList = React.createClass({
  render: function() {
    let commentNodes = this.props.data.map((comment) =>
      <Comment author={comment.author}>
        {comment.text}
      </Comment>
    );
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

export default CommentList;
