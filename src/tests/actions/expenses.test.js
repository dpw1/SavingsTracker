import { addExpense, removeExpense, editExpense } from '../../actions/expenses';


test('should setup remove expense action object', () => {
   const action = removeExpense({ id: '123abc' });
   expect(action).toEqual({
      type: 'REMOVE_EXPENSE',
      id: '123abc'
   });
});

test('should setup edit expense action object', () => {
   const action = editExpense('123abc', { note: 'New note value' });
   expect(action).toEqual({
      type: 'EDIT_EXPENSE',
      id: '123abc',
      updates: {
         note: 'New note value'
      }
   });
});

test('should setup add expense action object with provided values', () => {
   const expenseData = {
      description: 'Rent',
      amount: 109500,
      createdAt: 1000,
      note: 'This was last month rent'
   };

   const action = addExpense(expenseData);
   expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
         ...expenseData,
         id: expect.any(String)
      }
   });
});

test('should setup add expense action object with default values', () => {
   const action = addExpense();
   expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
         id: expect.any(String),
         description: '',
         note: '',
         amount: 0,
         createdAt: 0,
      }
   });
});


//--------------------------
// Information:
//--------------------------
// https://jestjs.io/
// {} === {} -> returns false
// [] === [] -> returns false
// Cannot use toBe to compare an object with object or array with array as it will always return false.
// If we are comparing string, numbers or booleans, we would use the Jest toBe method.
// If we are comparing objects or arrays, we would use the Jest toEqual method.
// expect.any(type) -> This method is telling Jest we are expecting something of type but don't care what the actual property is. For example we know a id is a String type but will never be able to define the dynamic value of id.