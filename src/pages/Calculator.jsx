import React, { useState } from "react";
import { useRef } from "react";
import Numbutton from "../components/Numbutton";
import Mathbutton from "../components/Mathbutton";
import Zerobutton from "../components/Zerobutton";
import Inputfield from "../components/Inputfield";

function Calculator() {
  const [result, setResult] = useState(0);
  const inputRef = useRef(null);
  const ResultRef = useRef(null);
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
    setResult((prevVal) => prevVal * 0);
  };
  const num = (e) => {
    const clickedNumber = e.target.textContent;
    const currentValue = inputRef.current.value;

    // Prevent multiple decimals
    if (clickedNumber === "." && inputRef.current.value.includes(".")) return;

    // Prevent leading zero unless it's a decimal (e.g., "0.")
    if (
      clickedNumber === "0" &&
      currentValue !== "."
    ) {
      inputRef.current.value = clickedNumber;
      return;
    }

    // Prevent input like "01", "02", etc.
  if (
    currentValue.startsWith("0") &&
    !currentValue.startsWith("0.") &&
    clickedNumber !== "."
  ) {
    inputRef.current.value = clickedNumber;
    return;
  }

    // Prevent multiple leading zeros
  if (currentValue === "0" && clickedNumber !== ".") {
    inputRef.current.value = clickedNumber;
    return;
  }

  inputRef.current.value += clickedNumber;
  };

  return (
    <div className="flex flex-col gap-3 py-10 items-center mt-10 bg-red-400 md:w-1/5 justify-center rounded-sm">
      <Inputfield inputRef={inputRef} />
      <div className="flex gap-2">
        <Mathbutton onClick={num}>.</Mathbutton>
        <Mathbutton onClick={divide}>/</Mathbutton>
        <Mathbutton onClick={resetInput}>del</Mathbutton>
        <Mathbutton onClick={resetResult}>re</Mathbutton>
      </div>
      <div className="flex gap-2">
        <Mathbutton onClick={times}>*</Mathbutton>
        <Numbutton onClick={num}>1</Numbutton>
        <Numbutton onClick={num}>2</Numbutton>
        <Numbutton onClick={num}>3</Numbutton>
      </div>

      <div className="flex gap-2">
        <Mathbutton onClick={plus}>+</Mathbutton>
        <Numbutton onClick={num}>4</Numbutton>
        <Numbutton onClick={num}>5</Numbutton>
        <Numbutton onClick={num}>6</Numbutton>
      </div>

      <div className="flex gap-2">
        <Mathbutton onClick={minus}>-</Mathbutton>
        <Numbutton onClick={num}>7</Numbutton>
        <Numbutton onClick={num}>8</Numbutton>
        <Numbutton onClick={num}>9</Numbutton>
      </div>

      <div className="flex gap-2">
        <Mathbutton>=</Mathbutton>
        <Zerobutton onClick={num}>0</Zerobutton>
      </div>
    </div>
  );
}

export default Calculator;
