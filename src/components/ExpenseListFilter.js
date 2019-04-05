import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import {
  setFilterText,
  sortByAmount,
  sortByDate,
  sortByAlphabetical,
  setStartDate,
  setEndDate
} from "../actions/filters";

class ExpenseListFilter extends React.Component {
  constructor(props) {
    super(props);

    // this.
  }
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };
  render() {
    return (
      <div className="expense-list__filter">
        <input
          type="text"
          value={this.props.filters.text}
          onChange={e => {
            this.props.dispatch(setFilterText(e.target.value));
          }}
        />
        <select
          name=""
          id=""
          onChange={e => {
            switch (e.target.value) {
              case "date":
                return this.props.dispatch(sortByDate());
              case "amount":
                return this.props.dispatch(sortByAmount());
              case "alphabetical":
                return this.props.dispatch(sortByAlphabetical());
              default:
                return "ok";
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
          <option value="alphabetical">Alphabetical</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilter);
