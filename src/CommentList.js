import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends Component {
  constructor() {
    super();
  }

  render() {
    const { comments } = this.props;
    return (
      <ul className='comment-list-wrap border'>
        {comments.map((comment, index) => <Comment key={index} comment={comment} />)}
      </ul>
    )
  }
}

export default CommentList;