import React from 'react';

import CommentItem from './CommentItem';
import style from './style.module.css';

class CommentList extends React.Component {
  renderComments() {
    return this.props.comments.map((comment) => {
      return (
        <CommentItem
          key={comment.id}
          author={comment.author}
          date={comment.date}
          text={comment.text}
          id={comment.id}
          onClick={this.props.onClick}
        />
      );
    });
  }

  render() {
    return (
      <div className={style.commentList}>{this.renderComments()}</div>
    );
  }
}

export default CommentList;
