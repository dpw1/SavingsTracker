import moment from "moment";

export const getVisibleExpenses = (
  expenses,
  { text, sortBy, sortByLowToHigh, startDate, endDate }
) => {
  return expenses
    .filter(expense => {
      const createdAtMoment = moment(expense.createdAt);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, "day")
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, "day")
        : true;
      const textMatch = RegExp(text.toLowerCase()).test(
        expense.description.toLowerCase()
      );

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      const lowToHigh = sortByLowToHigh === "low-to-high" ? 1 : -1;
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? lowToHigh * 1 : lowToHigh * -1;
      } else if (sortBy === "amount") {
        return a.amount > b.amount ? lowToHigh * 1 : lowToHigh * -1;
      } else if (sortBy === "type") {
        return a.type > b.type ? lowToHigh * 1 : lowToHigh * -1;
      } else if (sortBy === "alphabetical") {
        return a.description > b.description ? lowToHigh * 1 : lowToHigh * -1;
      }
    });
};
