import numeral from "numeral";
import moment from "moment";

import { addExpense } from "../actions/expenses";
import configureApp from "../config/configureApp";

export const formatPrice = amount => numeral(amount / 100).format("$0,0.00");

export const addTestExpenses = store => {
  const headphone = store.dispatch(
    addExpense({
      description: "Headphone ",
      amount: 8461,
      createdAt: moment([2019, 3, 19]),
      note: "Awesome headphones"
    })
  );

  const coffee = store.dispatch(
    addExpense({
      description: "coffee",
      amount: 2000,
      createdAt: moment([2019, 3, 29]),
      type: "charity"
    })
  );
  const rent = store.dispatch(
    addExpense({
      description: "rent",
      amount: 55000,
      createdAt: moment([2019, 4, 1]),
      type: "miscellaneous"
    })
  );
  const waterBill = store.dispatch(
    addExpense({
      description: "water bill",
      amount: 30000,
      createdAt: moment([2019, 4, 6])
    })
  );
  const grocery = store.dispatch(
    addExpense({
      description: "grocery",
      amount: 7000,
      createdAt: moment([2019, 3, 11])
    })
  );

  const ant = store.dispatch(
    addExpense({
      description: "Shoes",
      amount: 10000,
      createdAt: moment([2019, 2, 11])
    })
  );
};
