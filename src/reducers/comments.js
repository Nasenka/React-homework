import { ADD_COMMENT, REMOVE_COMMENT } from '../actions/constants';

const initialState = JSON.parse(localStorage.getItem('comments')) || [];

export default function comments(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT: {
      return [
        { ...action.comment },
        ...state
      ]
    }
    case REMOVE_COMMENT: {
      return state.filter(comment => comment.id !== action.id);
    }
    default:
      return state;
  }
}
