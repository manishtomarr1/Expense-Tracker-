import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // props access the propery of app.js

  return (
    <Card className="expense-item">
      {/* this is the root element i.e only one in one component */}

      <ExpenseDate date={props.date}></ExpenseDate>
      {/* because date come from app to expensedate and expensedate to here in expenseitem thats why we use attribute concept here. */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        {/* for event lister or useState hook we use title var*/}
        <div className="expense-item__price">RS {props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;

//shift+alt+f for format the document

// what is props?
// props is the method by which we can pass data from one file to another file.
// like here we pass data from App.js to expensesitem.js
//with the help of props we can access the property of app.js in expenseitem.js
//props can be pass from parent to child component we cannot skip component in between.

//what are hooks?
//hooks start with the "use"
//hooks must be called inside the react component function.
//when we call hook function a  special variable is create.

//usestate hook?
//first we pass an initial value in this hook i.e props.name jo ki bina button press k dekhege
//use state hooks always return array in which first is the current state value
//and another is the function by which can set the new value.
//for storing those value here v take an ary.
//then we use that second value which we passed in the array for updating value.

// why we use useState hook?
// beacuse in the first go the element title is not changed react ignore the value
// if we assingned to any varible
// these are the special cases by which we can handle the events.
// when state will be change the react component call again and the code excute and the value is
// changed.
//state comes reactivity in our code

//how this is work?
//first whole code is exwcuted then the state is changed then once more only that component
//is excuted regarding to which the state is changed.
