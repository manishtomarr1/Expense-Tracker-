import "./ExpenseForm.css";
import React, { useState } from "react"; //for details go to expenseitems comment section

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState(""); // jb bhi amount ki state changed ho.
  const [enteredDate, setEnteredDate] = useState(""); // for date state changed

  const titleChangedHadler = (event) => {
    setEnteredTitle(event.target.value); // by which the new updated value we get.
    //because this function helps us to set new value.

   
  };

  const amountChangedHandler = (event) => {
    setEnteredAmount(event.target.value); // by default this value is the string that's why we pass string on use state.
    console.log(setEnteredAmount);
  };

  const dateChangedHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log(setEnteredDate);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // go to comment section for details.

    const expenseData = {
      name: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate), // convert date in good format
    };
    
    props.onSaveExpenseData(expenseData); //export data to parent, go in the cmnt sec of new exp for more detail.
    //now we empty those input strings
    //by passing value in the input tag

    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangedHadler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangedHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.cancel}>Cancel</button>
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

//if we want to add any event listener in any html tag simply add on and the event name.

//on titlechangeshandeler we apssed the arrgument as event beacus eevent is trigered all the chnages
//which occur on this and gives us the JSON file by which we can take the value of new input.

//why we use usestate here?
//because when the component is re-evelaved by any reson the value is stored anywhere.
//kyuki hr bar new value ayege wo component ka re-evalvated hona jaruri hai.

//alternative approach for using usestate here
//const [userinput, setuserinput] = usestate({  =>pass object as perameter
//  enteredTitle:"",
//  enteredAmount="",
//  enteredDate=""
//})
// const titleChangedHandler=(event) =>{
//  setUserInput ((prevState)=>{
//    return {...prevState, enteredTitle:event.target.value}
//})
//}

//what is spread operator
//... is the spread operator which gives us the previous value when we have the condition
//in which we have to store previous value then we used spread operator.

//why use an event listener on form insted on button?
//because when any button of type submit placed inside the form and when we hit that button
//overall form is emit and we can track the change. this is default web page behaviour.

//what is event.preventDefault?
// when we hit any button of type sumit on web page it is reload the web page this is the
//by default behaviour aisa na ho jis wjah hum yeh use krte hai.

//what is two way binding?
//like here when we empty our all inputs using useState thats called the two way binding.
//it allows us to get user input and then change it

///what is onsaveExpenseData?
//this is basically the function which is used to export the data to the parent component.


//matlab kehne ka yeh hai agar hem data child se parent mae bhejna hai toh sbse phle parent
//me function banana hai uske argument ki help se humwo data bhej skte hai jaise hmne
//yhan on save expense data ki help se kra hai.
//hmne on save expense data ko attribute banya parent me child tag ka or usko parent k 
//function k equal kra us function mae perameter lia jiski help se data whan tak pauch gya.