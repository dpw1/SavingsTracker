import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
import numeral from "numeral";

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
    {amount && <span>Price: {numeral(amount / 100).format("$0,0.00")}</span>}
    {createdAt && (
      <p>
        Created At: {moment(createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}
      </p>
    )}
    {type && <p>Type: {type}</p>}
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: state.expenses
  };
};

export default connect()(ExpenseListItem);
