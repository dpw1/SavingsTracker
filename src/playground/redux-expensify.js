import { createStore, combineReducers } from "redux";
import uuid from "uuid";

//ADD_EXPENSE
const addExpense = ({
  description = "",
  type,
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    type,
    note,
    amount,
    createdAt
  }
});

const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

const setFilterText = (text = "") => ({
  type: "FILTER_BY_TEXT",
  text
});

const sortByAmount = ({} = {}) => ({
  type: "SORT_BY_AMOUNT"
});

const sortByDate = ({} = {}) => ({
  type: "SORT_BY_DATE"
});

const sortByCreatedAt = ({} = {}) => ({
  type: "SORT_BY_CREATED_AT"
});

const sortByType = ({} = {}) => ({
  type: "SORT_BY_TYPE"
});

const setStartDate = startDate => ({
  type: "SET_START_DATE",
  startDate
});
const setEndDate = endDate => ({
  type: "SET_END_DATE",
  endDate
});
const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        }
        return expense;
      });
    default:
      return state;
  }
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
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
    default:
      return state;
  }
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const textMatch = RegExp(text.toLowerCase()).test(
        expense.description.toLowerCase()
      );

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") return a.createdAt < b.createdAt ? 1 : -1;
      else if (sortBy === "amount") return a.amount < b.amount ? 1 : -1;
    });
};

/* Store creation */

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const demoState = {
  expenses: [
    {
      id: "123",
      description: "January Rent",
      type: "Basic Needs",
      note: "Rent",
      amount: 10000,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "date, amount, type, createdAt",
    startDate: undefined,
    endDate: undefined
  }
};

/* Start tests */
const coffee = store.dispatch(
  addExpense({ description: "coffee", amount: 2000, createdAt: -1000 })
);
const rent = store.dispatch(
  addExpense({ description: "rent", amount: 10, createdAt: -200 })
);
const food = store.dispatch(
  addExpense({ description: "food", amount: 100, createdAt: -500 })
);

// const removeCoffee = store.dispatch(
//   removeExpense({
//     id: coffee.expense.id
//   })
// );

// const editRent = store.dispatch(editExpense(rent.expense.id, { amount: 290 }));
// const textFilter = store.dispatch(setFilterText("fala amxxxigs"));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

console.log("down below");

store.dispatch(setFilterText("co"));
store.dispatch(setStartDate(100));
store.dispatch(setEndDate(2000));
