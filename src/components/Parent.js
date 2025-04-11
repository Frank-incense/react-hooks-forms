import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./Displaydata";

function Parent() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastChange(event) {
    setLastName(event.target.value);
  }

  return (
    <>
        <Form
        firstName={firstName}
        lastName={lastName}
        handleFirstChange={handleFirstChange}
        handleLastChange={handleLastChange}
        />
        <DisplayData firstName={firstName} lastName={lastName}/>
    </>    
  );
}

export default Parent;