import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import { getVisibleExpenses } from "../selectors/expenses";

export const ExpenseList = props => (
  <div className="expense-list">
    {props.expenses.length === 0 ? (
      <p className="expense-list__empty">No Expenses</p>
    ) : (
      props.expenses.map(expense => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })
    )}
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
