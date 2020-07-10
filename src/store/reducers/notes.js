import * as actionTypes from "../actionTypes";
import { fromJS } from "immutable";
import { v4 as uuidv4 } from "uuid";
import { getAllNotes } from "./../../services/fakeNotesService";
import { getAllCategories } from "./../../services/fakeCategoriesService";

const intialState = {
  notes: getAllNotes(),
  categories: getAllCategories(),
  currentCategory: { id: "all", description: "All" },
};

export default function (state = intialState, action) {
  let newState = fromJS(state);
  let date = new Date();

  switch (action.type) {
    case actionTypes.ADD_NOTE: {
      const note = {
        id: uuidv4(),
        description: action.payload.content.note,
        categoryId: action.payload.content.category.id,
        createdDate: date.toDateString(),
        lastModifiedDate: date.toDateString(),
        isResolved: false,
      };
      newState = newState.set("notes", newState.get("notes").push(note));
      return newState.toJS();
    }

    case actionTypes.UPDATE_NOTE: {
      const { id, note: description, category } = action.payload.content;
      let index = newState.get("notes").findIndex((note) => {
        return note.get("id") === id;
      });
      newState = newState.setIn(["notes", index, "description"], description);
      newState = newState.setIn(["notes", index, "categoryId"], category.id);
      newState = newState.setIn(
        ["notes", index, "lastModifiedDate"],
        date.toDateString()
      );
      return newState.toJS();
    }

    case actionTypes.DELETE_NOTE: {
      let index = newState.get("notes").findIndex((note) => {
        return note.get("id") === action.payload.content;
      });
      newState = newState.deleteIn(["notes", index]);
      return newState.toJS();
    }

    case actionTypes.CHANGE_CATEGORY: {
      newState = newState.set("currentCategory", action.payload.content);
      return newState.toJS();
    }

    default:
      return state;
  }
}
