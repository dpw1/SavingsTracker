import {
  setFilterText,
  sortByAmount,
  sortByAlphabetical,
  sortByDate,
  sortByCreatedAt,
  sortByType,
  setStartDate,
  setEndDate
} from "../../actions/filters";
import moment from "moment";

test("SET FILTER TEXT", () => {
  const text = "hello";
  const action = setFilterText(text);
  expect(action).toEqual({
    type: "FILTER_BY_TEXT",
    text
  });
});

test("SET FILTER TEXT - default values", () => {
  const text = "";
  const action = setFilterText(text);
  expect(action).toEqual({
    type: "FILTER_BY_TEXT",
    text
  });
});

test("START DATE", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});

test("END DATE", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
  });
});
