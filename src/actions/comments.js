import { ADD_COMMENT, REMOVE_COMMENT } from './constants';

export function addComment(comment) {
  return {
    comment,
    type: ADD_COMMENT,
  }
}

export function removeComment(id) {
  return {
    id,
    type: REMOVE_COMMENT,
  }
};
