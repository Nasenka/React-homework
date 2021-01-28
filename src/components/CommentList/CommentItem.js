import React from 'react';

import style from './style.module.css';

class CommentItem extends React.Component {
  render() {
    return (
      <div className={style.commentItem}>
        <div className={style.commentInfo}>
            <div className={style.commentAuthor}>{this.props.author}</div>
            <div className={style.commentDate}>{this.props.date}</div>
            <div
              className={style.commentDelete}
              onClick={() => this.props.onClick(this.props.id)}
              title="Удалить комментарий"
            >
              &times;
            </div>
        </div>
        <div className={style.commentContent}>{this.props.text}</div>
      </div>
    );
  }
}

export default CommentItem;
