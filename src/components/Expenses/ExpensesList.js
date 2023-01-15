import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found! </h2>
  }

  return (
    <ul className="expenses-list">
      {
        ( props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.name}
            amount={expense.amount}
            date={expense.date}
          />
        )))
      }
    </ul>
  );
};

export default ExpensesList;

//what is expenseContent?
//expensecontent is the variable by which we can display the expenses acoording to the
//expenses like if filteredexpeses is empty then the upper side code is run i.e in <p>
//else lenght>0's code run.
