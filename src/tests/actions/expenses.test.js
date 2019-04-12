import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("Edit Expense", () => {
  const action = editExpense("1", { note: "batata" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "1",
    updates: {
      note: "batata"
    }
  });
});

test("ADD EXPENSE - with provided values", () => {
  const object = {
    description: "hello",
    type: "basic-needs",
    note: "",
    amount: 200,
    createdAt: 1000
  };
  const action = addExpense(object);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      ...object
    }
  });
});

test("ADD EXPENSE - with default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      type: "basic-needs",
      note: "",
      amount: 0,
      createdAt: 0
    }
  });
});
// test("should setup edit expense action object", () => {
//   const action = editExpense("123abc", { note: "New note value" });
//   expect(action).toEqual({
//     type: "EDIT_EXPENSE",
//     id: "123abc",
//     updates: {
//       note: "New note value"
//     }
//   });
// });

// test("should setup add expense action object with provided values", () => {
//   const expenseData = {
//     description: "Rent",
//     amount: 109500,
//     createdAt: 1000,
//     note: "This was last month rent"
//   };

//   const action = addExpense(expenseData);
//   expect(action).toEqual({
//     type: "ADD_EXPENSE",
//     expense: {
//       ...expenseData,
//       id: expect.any(String)
//     }
//   });
// });

// test("should setup add expense action object with default values", () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: "ADD_EXPENSE",
//     expense: {
//       id: expect.any(String),
//       description: "",
//       note: "",
//       amount: 0,
//       createdAt: 0
//     }
//   });
// });
