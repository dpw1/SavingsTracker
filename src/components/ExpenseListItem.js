import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
import { formatPrice } from "../utils/utils.js";

export const ExpenseListItem = ({
  id,
  description,
  amount,
  createdAt,
  type
}) => (
  <div className="expense-list__item">
    {description && (
      <Link to={`/edit/${id}`}>
        <h2>{description}</h2>
      </Link>
    )}
    {amount && <span>Price: {formatPrice(amount)}</span>}
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
