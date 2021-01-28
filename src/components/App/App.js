import React from 'react';

import CommentForm from '../CommentForm';
import CommentList from '../CommentList';

import style from './style.module.css';

class App extends React.Component {
  state = {
    comments: JSON.parse(localStorage.getItem('comments')) || [],
  }

  setLocalStorage() {
    localStorage.setItem('comments', JSON.stringify(this.state.comments)); 
  }

  handleSubmitForm = (comment) => {
    const { comments } = this.state;

    comments.push(comment);

    this.setState({ comments }, this.setLocalStorage);
  }

  handleClick = (id) => {
    const { comments } = this.state;

    this.setState(
      { comments: comments.filter(comment => comment.id !== id) },
      this.setLocalStorage
    );
  }

  render() {
    const { comments } = this.state;

    return (
      <div className={style.container}>
        <CommentForm onSubmitForm={this.handleSubmitForm} />
        <CommentList comments={comments} onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
