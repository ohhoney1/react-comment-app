import React, { Component } from 'react';

class CommentInput extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      comment: ''
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleComment = this.handleComment.bind(this);
  }

  handleUsernameChange(evt) {
    this.setState({
      username: evt.target.value
    });
  }

  handleCommentChange(evt) {
    this.setState({
      comment: evt.target.value
    });
  }

  handleComment() {
    this.props.onAddComment(this.state);
  }

  render() {
    const { username, comment } = this.state;

    return (
      <div className='comment-input-wrap border'>
        <div className='username'>
          <label>用户名：</label>
          <input type='text' className='border' value={username} onChange={this.handleUsernameChange} />
        </div>
        <div className='comment'>
          <label>评论内容：</label>
          <textarea value={comment} className='border' onChange={this.handleCommentChange} />
        </div>
        <div className='release clearfix'>
          <button className='fr border' onClick={this.handleComment}>发布</button>
        </div>
      </div>
    )
  }
}

export default CommentInput;
