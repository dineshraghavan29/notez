const notes = [
  {
    id: "1",
    description: "Test note 1",
    categoryId: "2",
    createdDate: "08-07-2020",
    lastModifiedDate: "08-07-2020",
    isResolved: false,
  },
  {
    id: "2",
    description: "Test note 2",
    categoryId: "3",
    createdDate: "08-07-2020",
    lastModifiedDate: "08-07-2020",
    isResolved: false,
  },
];

export function getAllNotes() {
  return notes;
}
