import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilter";

const DashboardPage = () => (
  <div className="dashboard">
    <ExpenseListFilter />
    <ExpenseList />
  </div>
);

export default DashboardPage;
