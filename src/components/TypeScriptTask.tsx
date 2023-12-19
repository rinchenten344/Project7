import React from "react";
 import {person} from "../types.ts";
 
const TypeScriptTask = () => {

    const person: Person = 
    {     name: "John Doe",    
     age: 28  };


  const myString = "Hello";
  const myNumber = 24;
  const myBoolean = true;

  const myFunction = (param1: string, param2: number): boolean => {
    console.log(`String parameter: ${param1}, Number parameter: ${param2}`);
    return param1.length + param2 > 50;
  };


  const result: boolean = myFunction(myString, myNumber);


  return (
    <div>
        <h1>Person Details</h1>     
         <p>Name: {person.name}</p>      
         <p>Age: {person.age}</p>
      <h1>{myString}</h1>
      <p>The number is : {myNumber}</p>
      <p>{myBoolean ? "True!" : "False!"}</p>
      <p>Function result: {result ? 'True!' : 'False!'}</p>
    </div>
  );
};
 
export default TypeScriptTask;



/*
import React from 'react';
 
const App: React.FC = () => {
  const myString: string = "Hello, World!";
  const myNumber: number = 42;
  const myBoolean: boolean = true;
 
  // A function that takes a string and a number and returns a boolean
  const myFunction = (param1: string, param2: number): boolean => {
    console.log(`String parameter: ${param1}, Number parameter: ${param2}`);
    return param1.length + param2 > 50;
  };
 
  // Example usage of the function
  const result: boolean = myFunction(myString, myNumber);
 
  return (
<div>
<h1>{myString}</h1>
<p>The number is: {myNumber}</p>
<p>{myBoolean ? 'True!' : 'False!'}</p>
<p>Function result: {result ? 'True!' : 'False!'}</p>
</div>
  );
}
 
export default App;
*/