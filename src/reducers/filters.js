import moment from "moment";

const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  sortByLowToHigh: "low-to-high",
  startDate: undefined,
  endDate: undefined
};
export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "FILTER_BY_TEXT":
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount"
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date"
      };
    case "SORT_BY_CREATED_AT":
      return {
        ...state,
        sortBy: "createdAt"
      };
    case "SORT_BY_TYPE":
      return {
        ...state,
        sortBy: "type"
      };
    case "SORT_BY_ALPHABETICAL":
      return {
        ...state,
        sortBy: "alphabetical"
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      };
    case "SORT_BY_LOW_TO_HIGH":
      return {
        ...state,
        sortByLowToHigh: "low-to-high"
      };
    case "SORT_BY_HIGH_TO_LOW":
      return {
        ...state,
        sortByLowToHigh: "high-to-low"
      };
    default:
      return state;
  }
};
