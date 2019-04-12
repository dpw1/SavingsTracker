import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setFilterText, sortByAmount } from "./actions/filters";
import { getVisibleExpenses } from "./selectors/expenses";
import moment from "moment";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

const coffee = store.dispatch(
  addExpense({ description: "coffee", amount: 2000, createdAt: 300 })
);
const rent = store.dispatch(
  addExpense({ description: "rent", amount: 55000, createdAt: 200 })
);
const waterBill = store.dispatch(
  addExpense({ description: "water bill", amount: 30000, createdAt: 8000 })
);
const grocery = store.dispatch(
  addExpense({
    description: "grocery",
    amount: 7000,
    createdAt: moment([2019, 3, 15])
  })
);

const ant = store.dispatch(
  addExpense({ description: "ants", amount: 1000, createdAt: 2390000 })
);

// store.dispatch(sortByAmount());

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.querySelector("#app"));
