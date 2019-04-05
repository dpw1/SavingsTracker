import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.onAmountKeyDown = this.onAmountKeyDown.bind(this);
    moment.locale("pt");

    this.state = {
      description: props.expense ? props.expense.description : "",
      type: props.expense ? props.expense.type : "basic-needs",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ""
    };
  }

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onTypeChange = e => {
    const type = e.target.value;
    this.setState(() => ({ type }));
  };
  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/gim)) {
      return this.setState(() => ({ amount }));
    }
  };
  onAmountKeyDown = e => {
    if (e.keyCode === 188) {
      e.preventDefault();
    }
  };
  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      const error = "Please provide description and amount.";
      this.setState(() => ({ error }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        type: this.state.type,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };
  render() {
    return (
      <div className="expense-form">
        <div className="expense-form__message">
          {this.state.error && (
            <p className="expense-form__error">{this.state.error}</p>
          )}
        </div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <select name="type" id="" onChange={this.onTypeChange}>
            <option value="basic-needs">Basic Needs</option>
            <option value="miscellaneous">Miscellaneous</option>
            <option value="charity">Charity</option>
            <option value="savings">Savings</option>
          </select>
          <textarea
            name="note"
            placeholder="Note"
            id=""
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={day => false}
          />
          <input
            type="text"
            placeholder="Price"
            name="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
            onKeyDown={this.onAmountKeyDown}
          />
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}
