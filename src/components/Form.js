import { useState } from "react";
import React from "react";

function Form({
  firstName,
  lastName,
  handleFirstChange,
  handleLastChange
  }) {

  const [number, setNumber] = useState(0);
  const [isInvalidNumber, setIsInvalidNumber] = useState(null);

  function handleNumberChange(event) {
    const newNumber = parseInt(event.target.value);
    if (newNumber >= 0 && newNumber <= 5) {
      setNumber(newNumber);
      setIsInvalidNumber(null);
    } else {
      setIsInvalidNumber(`${newNumber} is not a valid number!`);
    }
  }
  
  return (
    <form>
      <input type="text" value={firstName} onChange={handleFirstChange} /><br/>
      <input type="text" value={lastName} onChange={handleLastChange} /><br/>
      <input type="number" value={number} onChange={handleNumberChange} /><br/>
      {isInvalidNumber ? <span style={{ color: "red" }}>{isInvalidNumber}</span> : null}<br/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
