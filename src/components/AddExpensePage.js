import React from "react";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses";
import { connect } from "react-redux";

const AddExpensePage = props => (
  <div className="dashboard">
    <h1>New Expense page!</h1>
    <ExpenseForm
      onSubmit={expense => {
        props.dispatch(startAddExpense(expense));
        props.history.push("/");
      }}
    />
  </div>
);
export default connect()(AddExpensePage);
