import React, { Component } from 'react';

class Comment extends Component {
  constructor() {
    super();
  }

  render() {
    const { username, comment } = this.props.comment
    return (
      <li className='comment-wrap clearfix'>
        <div className='username fl'>
          <span>{username}</span>：
        </div>
        <div className='comment fl'>
          <p>{comment}</p>
        </div>
      </li>
    )
  }
}

export default Comment;