import uuid from "uuid";
import database from "../firebase/firebase";

//ADD_EXPENSE
export const addExpense = expense => ({
  type: "ADD_EXPENSE",
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = "",
      type = "basic-needs",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;

    const expense = { description, type, note, amount, createdAt };

    database
      .ref(`users/${uid}/expenses`)
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        );
      });
  };
};

export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense({ id }));
      });
  };
};

export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .update({
        ...updates
      })
      .then(() => {
        dispatch(editExpense(id, updates));
      });
  };
};

export const setExpenses = expenses => ({
  type: "SET_EXPENSES",
  expenses
});

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses`)
      .once("value")
      .then(snapshot => {
        let expenses = [];

        snapshot.forEach(child => {
          expenses.push({
            id: child.key,
            ...child.val()
          });
        });

        dispatch(setExpenses(expenses));
      });
  };
};
