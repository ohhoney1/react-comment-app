import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends Component {
  constructor() {
    super();
    this.state = {
      comments: []
    };

    this.handleAddComment = this.handleAddComment.bind(this);
  }

  handleAddComment(newComment) {
    const comments = this.state.comments

    comments.push(newComment)
    this.setState({ comments })
  }

  render() {
    return (
      <div className='comment-app-wrap border'>
        <CommentInput onAddComment={this.handleAddComment} />
        <CommentList comments={this.state.comments} />
      </div>
    )
  }
}

export default CommentApp;
