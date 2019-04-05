export const setFilterText = (text = "") => ({
  type: "FILTER_BY_TEXT",
  text
});

export const sortByAmount = ({} = {}) => ({
  type: "SORT_BY_AMOUNT"
});

export const sortByAlphabetical = ({} = {}) => ({
  type: "SORT_BY_ALPHABETICAL"
});

export const sortByDate = ({} = {}) => ({
  type: "SORT_BY_DATE"
});

export const sortByCreatedAt = ({} = {}) => ({
  type: "SORT_BY_CREATED_AT"
});

export const sortByType = ({} = {}) => ({
  type: "SORT_BY_TYPE"
});

export const setStartDate = startDate => ({
  type: "SET_START_DATE",
  startDate
});
export const setEndDate = endDate => ({
  type: "SET_END_DATE",
  endDate
});
