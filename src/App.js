import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
const DUMMY_EXPENSES = [
  // sara khel ese ka hai yeh hi niche access hoga dynamicaly expenseitem component mae
  {
    id: "e1",
    name: "Room Rent",
    amount: 2700,
    date: new Date(2023, 0, 5),
  },

  {
    id: "e2",
    name: "Food Payment",
    amount: 3200,
    date: new Date(2023, 0, 2),
  },

  {
    id: "e3",
    name: "Books",
    amount: 123.45,
    date: new Date(2023, 0, 6),
  },
  
];

const App = () => {
  const [expenses, setNewExpenses] = useState (DUMMY_EXPENSES);

  const newAddedExpense = (expense) => {
    setNewExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
    });
  };
  return (
    <div>
      <NewExpense onNewExpense={newAddedExpense}></NewExpense>
      <Expense items={expenses}></Expense>
      <Footer></Footer>
    </div>
    //  feature by which we can injected html in javascript is called the JSX.
  );
};

export default App;

//what is onnewExpense?
//same as we did in the newexpense and expenseform from passing data from child to parent
//here child id new expense and parent is app.
//the data which was come from expenseform in newexpense is fatched by app by doing the same process.

//why we use state here?
//because we have to re evaluate app.js component because whenever the new element is add

//what is going here?
//first we take dummy expenses and then we call use state as initial value as dummyexpense
//then when any expense is added new added expense come in work  and get an expense object
//from expenseform by the help of set up wo object yhan ayege expense perameter k through
//then we call setNewExpense function of use state which is come in work fir adding
//an updated state. in this function we pass previousExpenses function as argument which 
//automatically recieve latest state snapsot.
//then we return the adding object in the previous state. hence the state is updated.  