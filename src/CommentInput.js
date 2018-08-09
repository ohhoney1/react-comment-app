import React, { Component } from 'react';

const USERNAME = '__comment-app-username__';

class CommentInput extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      comment: ''
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleUsernameBlur = this.handleUsernameBlur.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleComment = this.handleComment.bind(this);
  }

  componentWillMount() {
    this._loadUsername();
  }

  componentDidMount() {
    if (this.state.username) this.textarea.focus();
  }

  _saveUsername() {
    localStorage.setItem(USERNAME, this.state.username);
  }

  _loadUsername() {
    const username = localStorage.getItem(USERNAME);
    if (username) this.setState({ username });
  }

  handleUsernameChange(evt) {
    this.setState({
      username: evt.target.value
    });
  }

  handleUsernameBlur() {
    this._saveUsername();
  }

  handleCommentChange(evt) {
    this.setState({
      comment: evt.target.value
    });
  }

  handleComment() {
    const { username, comment } = this.state;
    if (!username) {
      alert('请输入用户名');
      return false;
    }
    if (!comment) {
      alert('请输入评论内容');
      this.textarea.focus();
      return false;
    }
    this.props.onAddComment({
      username,
      comment,
      createTime: +new Date()
    });

    this.setState({ comment: '' });
  }

  render() {
    const { username, comment } = this.state;

    return (
      <div className='comment-input-wrap border'>
        <div className='username'>
          <label>用户名：</label>
          <input
            type='text'
            className='border'
            value={username}
            onChange={this.handleUsernameChange}
            onBlur={this.handleUsernameBlur} />
        </div>
        <div className='comment'>
          <label>评论内容：</label>
          <textarea
            className='border'
            ref={textarea => this.textarea = textarea}
            value={comment}
            onChange={this.handleCommentChange} />
        </div>
        <div className='release clearfix'>
          <button className='fr border' onClick={this.handleComment}>发布</button>
        </div>
      </div>
    )
  }
}

export default CommentInput;
