import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { getVisibleExpenses } from "../selectors/expenses";
import { formatPrice } from "../utils/utils.js";

const ExpenseListHeader = props => {
  return (
    <header className="expense-list__header">
      <h2>
        You're viewing {props.expenses.length}{" "}
        {props.expenses.length === 1 ? "expense" : "expenses"} totalling&nbsp;
        {props.expenses.length >= 1
          ? formatPrice(
              props.expenses.map(each => each.amount).reduce((a, b) => a + b)
            )
          : formatPrice(0)}
      </h2>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseListHeader);
