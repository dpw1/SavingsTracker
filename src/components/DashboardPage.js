import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilter";
import ExpenseListHeader from "./ExpenseListHeader";

const DashboardPage = () => (
  <div className="dashboard">
    <ExpenseListHeader />
    <ExpenseListFilter />
    <ExpenseList />
  </div>
);

export default DashboardPage;
