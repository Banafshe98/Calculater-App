import React, { useState } from "react";
import { useRef } from "react";
import Mathbutton from "../components/Mathbutton";
import Inputfield from "../components/Inputfield";

function Calculator() {
  const [result, setResult] = useState(0);
  const inputRef = useRef(null);
  const onbuttonClick = () => {
    inputRef.current.focus();
  };

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
    inputRef.current.value = 0;
  };
  const resetResult = (e) => {
    e.preventDefault();
    setResult((prevVal) => prevVal * 0);
  };

  return (
    <div className="flex flex-col gap-3 py-10 items-center mt-10 bg-red-400 md:w-1/5 justify-center rounded-sm">
      <p>{result}</p>
      <Inputfield inputRef={inputRef} />
      <div className="flex gap-2">
        <Mathbutton onClick={divide}>/</Mathbutton>
        <Mathbutton onClick={resetInput}>del</Mathbutton>
        <Mathbutton onClick={resetResult}>re</Mathbutton>
      </div>
      <div className="flex gap-2">
        <Mathbutton onClick={times}>*</Mathbutton>
        <Mathbutton onClick={plus}>+</Mathbutton>
        <Mathbutton onClick={minus}>-</Mathbutton>

      </div>

    </div>
  );
}

export default Calculator;
