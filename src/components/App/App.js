import React from 'react';

import CommentForm from '../CommentForm';
import CommentList from '../CommentList';

import style from './style.module.css';

class App extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <CommentForm />
        <CommentList />
      </div>
    );
  }
}

export default App;
