import expenses from "../fixtures/expenses";
import expensesReducer from "../../reducers/expenses";

test("set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("remove expenses by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("do not remove expense if ID is not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1"
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("Add an expense", () => {
  const expense = {
    id: "4",
    description: "Laptop",
    note: "",
    amount: 1400,
    type: "miscellaneous",
    createdAt: 2982389
  };

  const action = {
    type: "ADD_EXPENSE",
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("Edit an expense", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "2",
    updates: { description: "lasanha" }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].description).toBe("lasanha");
});

test("Do not edit expense if not found", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates: { description: "lasanha" }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
