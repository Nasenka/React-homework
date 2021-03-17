import React from 'react';
import { connect } from 'react-redux';

import { addComment } from '../../actions/comments';

import style from './style.module.css';

class CommentForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();

    const date = new Date();
    const comment = {
      date: date.toLocaleString('ru-RU'),
      author: event.target.name.value,
      id: date.toLocaleString('ru-RU'),
      text: event.target.comment.value,
    };

    this.props.addComment(comment);

    event.target.reset();
  }

  render() {
    return (
      <form className={style.commentForm} onSubmit={this.handleSubmit}>
        <h2>Оставьте ваш комментарий</h2>
        <label htmlFor="name">Ваше имя</label>
        <input type="text" name="name" id="name" className={style.fieldForm} required />
        <label htmlFor="comment">Ваш комментарий</label>
        <textarea name="comment" id="comment" className={style.fieldForm} required></textarea>
        <button type="submit" className={style.btnSubmit}>Отправить</button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  addComment,
}

export default connect(undefined, mapDispatchToProps)(CommentForm);
