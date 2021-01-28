import React from 'react';

import style from './style.module.css';

class CommentForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();

    const { onSubmitForm } = this.props;
    const date = new Date();
    const formData = {
      date: date.toLocaleString('ru-RU'),
      author: event.target.name.value,
      id: date.toLocaleString('ru-RU'),
      text: event.target.comment.value,
    };

    onSubmitForm(formData);

    event.target.reset();
  }

  render() {
    return (
      <form className={style.commentForm} onSubmit={this.handleSubmit}>
        <h2>Оставьте ваш комментарий</h2>
        <label htmlFor="name">Ваше имя</label>
        <input type="text" name="name" id="name" className={style.fieldForm} />
        <label htmlFor="comment">Ваш комментарий</label>
        <textarea name="comment" id="comment" className={style.fieldForm}></textarea>
        <button type="submit" className={style.btnSubmit}>Отправить</button>
      </form>
    );
  }
}

export default CommentForm;
