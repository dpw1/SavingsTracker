import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import {
  setFilterText,
  sortByAmount,
  sortByDate,
  sortByAlphabetical,
  sortByType,
  sortByLowToHigh,
  sortByHighToLow,
  setStartDate,
  setEndDate
} from "../actions/filters";

class ExpenseListFilter extends React.Component {
  constructor(props) {
    super(props);
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
              case "type":
                return this.props.dispatch(sortByType());
              default:
                return "";
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
          <option value="alphabetical">Alphabetical</option>
          <option value="type">Type</option>
        </select>
        <select
          name=""
          id=""
          onChange={e => {
            switch (e.target.value) {
              case "low-to-high":
                return this.props.dispatch(sortByLowToHigh());
              case "high-to-low":
                return this.props.dispatch(sortByHighToLow());
              default:
                return "";
            }
          }}
        >
          <option value="low-to-high">Low to high</option>
          <option value="high-to-low">High to low</option>
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
