import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const ExpenseListItem = ({
  id,
  description,
  amount,
  createdAt,
  type,
  history
}) => (
  <div className="expense-list__item">
    {description && (
      <Link to={`/edit/${id}`}>
        <h2>{description}</h2>
      </Link>
    )}
    {amount && <strong>Price: {amount}</strong>}
    {createdAt && <p>Created At: {createdAt}</p>}
    {type && <p>Type: {type}</p>}
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: state.expenses
  };
};

export default connect()(ExpenseListItem);
