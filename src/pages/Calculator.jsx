import React, { useState } from "react";
import Addbutton from "../components/Addbutton";
import { useRef } from "react";

function Calculator() {
  const [result, setResult] = useState(0)
  const inputRef=useRef(null)
  const ResultRef=useRef(null)
  const plus = (e) => {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  const minus = (e) => {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };

  const times = (e) => {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };
  const divide = (e) => {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };
  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = 0;
  };
  const resetResult = () => {
    e.preventDefault();
setResult((prevVal) => prevVal * 0)
  };
  return (
    <div>
      <input 
      type="number" 
      placeholder="type a number"
      pattern="[0-9]"
      ref={inputRef}
      />
      <div>
        <Addbutton />
      </div>
    </div>
  );
}

export default Calculator;
