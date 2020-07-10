import * as actionTypes from "./actionTypes";

export const addNote = (content) => ({
  type: actionTypes.ADD_NOTE,
  payload: { content },
});

export const deleteNote = (content) => ({
  type: actionTypes.DELETE_NOTE,
  payload: { content },
});

export const updateNote = (content) => ({
  type: actionTypes.UPDATE_NOTE,
  payload: { content },
});

export const changeCategory = (content) => ({
  type: actionTypes.CHANGE_CATEGORY,
  payload: { content },
});
