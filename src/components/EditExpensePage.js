import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import {
  editExpense,
  startRemoveExpense,
  startSetExpenses
} from "../actions/expenses";

const EditExpensePage = props => {
  return (
    <div className="edit-expense">
      <ExpenseForm
        expense={props.expenses}
        onSubmit={expense => {
          props.dispatch(editExpense(props.expenses.id, expense));
          props.history.push("/");
        }}
      />
      <button
        onClick={e => {
          const id = props.expenses.id;
          props.dispatch(startRemoveExpense({ id }));
          props.history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expenses: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(EditExpensePage);
