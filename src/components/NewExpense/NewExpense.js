import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    //this is execute in expenseform by help of onsaveexpensedata.
    const expenseData = {
      ...enteredExpenseData, //copy the object which is passed in expenseform here in expensedata
      id: Math.random().toString(),
    };

    props.onNewExpense(expenseData); //go to app cmnt section for info.
    updatedState(false);
  };

  let [currentState, updatedState] = useState(false);
  const addNewExpense = () => {
    updatedState(true);
  };

  const cancelEditing = () => {
    updatedState(false);
  };

  return (
    <div className="new-expense">
      {!currentState && (
        <button onClick={addNewExpense}>Add New Expense</button>
      )}
      {currentState && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          cancel={cancelEditing}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;

//here first we want to fatch the data from the new expense data and later on send the data to the
//app.js array.

//what is onSaveExpensedata?
//-it is working like prop.
//-onsaveexpensedata is the normally the identifier its not a predefined handeler but it triger
//the change in the expenseform if there is any change in the expense form then this is come in
//active mode.
//-the value of this should be the function which be called inside expenseform component.
//-same jaise hmne expenseform mae kra tha onchange event handeler pe taki jb change ho
//wo function work mae aa jaye, eseliye esko yhi pe define kra call isko krenge expform me.
//-ab jb yeh yhan lia hai toh expenseform mae iska hona bhi jaruri hai.
//-so we execute it on the expense form
//-this is called the up communication like from child to parent.

//what is saveExpenseDataHandler?
//it the function which used to up comm. because with the help of perameter we can import data
//from child component i.e expenseform here.

//&& ?
//&& is used for agar wo ho toh && se aage ka code run ho jaye.
