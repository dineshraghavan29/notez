import { createSelector } from "reselect";

// Normal Selector
// export const selectNotesByCategory = (state) => {
//   if (state.notes.currentCategory.description === "All") {
//     return state.notes.notes;
//   } else {
//     return state.notes.notes.filter(
//       (note) => note.categoryId === state.notes.currentCategory.id
//     );
//   }
// };

//Memoized Selector
const getnNotes = (state) => state.notes.notes;
const getCurrentCategory = (state) => state.notes.currentCategory;

export const selectNotesByCategory = createSelector(
  getnNotes,
  getCurrentCategory,
  (notes, currentCategory) =>
    currentCategory.description === "All"
      ? notes
      : notes.filter((note) => note.categoryId === currentCategory.id)
);

export const selectCategories = (state) => {
  return state.notes.categories.filter(
    (category) => category.description !== "All"
  );
};
