import filtersReducer from "../../reducers/filters";
import moment from "moment";

test("setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("set sortBy to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("setup sortBy to date", () => {
  const currentState = {
    text: "",
    startDate: "",
    endDate: "",
    sortBy: "amount"
  };
  const state = filtersReducer(currentState, { type: "SORT_BY_DATE" });
  expect(state.sortBy).toBe("date");
});
