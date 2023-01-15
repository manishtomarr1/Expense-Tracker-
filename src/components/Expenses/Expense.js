import "./Expense.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card"; //.. means two step up
import ExpensesFilter from "../FilterExpenses/ExpenseFilter";
import React, { useState } from "react";
import ExpensesChart from "./ExpensesChart"

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  //for set the default value here we use usestate i.e 2023 here. by the helo of selected
  //attribute in expensefilter we achieve this.

  const saveCurrentSelectedYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
 

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSelectedYear={saveCurrentSelectedYear}
        ></ExpensesFilter>
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}/>
      </Card>
      {/* exporting and importing data with the help of props.
    props is automatically hit on the app.js */}
    </div>
  );
};

export default Expense;

//what is lifting state up?
//jaise yhan do siblings component aps mae comm. nhi kr skte jaise yhan newexpense or expense
//toh us comm. ko achieve krne k liye hum us closest component ka sahara lete hai jo direct
//yah indert dono se baat krra ho aise mae yhan app ka sahara lia hmne phle data app mae aya
//kyuki app render kr rha hai expense ko bhi toh wo data expense tk bhi aa jaiga.

//what is .map do here?
//an iterative function.
//map is the inbuilt function in javascript which is create the new array based on another array
//in the argument of which we have to pass an function and that function's argument is an array
// and manupulate it how we want.
//we do the same here v pass an expense argument(we pass what v want).

//what is key here?
//key is basically the inbuilt in js by which we can tell react that this is the unique value
//we use key in the databases and arrays for givinh the unique identity to any value.
//and by doing so all element is added uniquely
//bina id k pta nhi lhra tha kha add krna hai list mae ab jb key de dia toh on the top add
//hoga list k jo bhi nya expense hum add krenge.
//map mae key ka use hmesa krna chaiye.

//filter function?
//filter return us the new array of filtered element.
//we have to pass another function as perameter in filter.

