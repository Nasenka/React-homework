import React from 'react';
import { connect } from 'react-redux';

import { removeComment } from '../../actions/comments';

import CommentItem from './CommentItem';
import style from './style.module.css';

class CommentList extends React.Component {
  componentDidUpdate() {
    localStorage.setItem('comments', JSON.stringify(this.props.comments));
  }

  handleClick = (id) => {
    this.props.removeComment(id);
  }

  renderComments() {
    return this.props.comments.map((comment) => {
      return (
        <CommentItem
          key={comment.id}
          author={comment.author}
          date={comment.date}
          text={comment.text}
          id={comment.id}
          onClick={this.handleClick}
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

const mapStateToProps = state => {
  return {
    comments: state.comments,
  };
};

const mapDispatchToProps = {
  removeComment,
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
