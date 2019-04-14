import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import { getVisibleExpenses } from "./selectors/expenses";
import { addTestExpenses } from "./utils/utils";
import "./firebase/firebase";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

addTestExpenses(store);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>loading...</p>, document.querySelector("#app"));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.querySelector("#app"));
});
// ReactDOM.render(jsx, document.querySelector("#app"));
