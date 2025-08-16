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
  const inputfocus = useRef(null);
  const onbuttonClick = () => {
    inputFocus.current.focus();
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
    e.preventDefault();
    inputRef.current.value = 0;
  };
  const resetResult = (e) => {
    e.preventDefault();
    setResult((prevVal) => prevVal * 0);
  };
  const num = (e) => {
    const clickedNumber = e.target.textContent;
    const currentValue = inputRef.current.value;

    // Prevent multiple decimals
    if (clickedNumber === "." && currentValue.includes(".")) return;

    // If input is empty
    if (currentValue === "") {
      if (clickedNumber === "0") return; // Don't allow leading zero
      inputRef.current.value = clickedNumber;
      return;
    }

    // If input is "0"
    if (currentValue === "0") {
      if (clickedNumber === ".") {
        inputRef.current.value += clickedNumber; // allow "0."
      } else if (clickedNumber !== "0") {
        inputRef.current.value = clickedNumber; // replace "0" with non-zero digit
      }
      // Prevent "00", "000", etc.
      return;
    }

    // If input starts with "0" but not "0."
    if (
      currentValue.startsWith("0") &&
      !currentValue.startsWith("0.") &&
      clickedNumber !== "."
    ) {
      inputRef.current.value = clickedNumber;
      return;
    }
    // Otherwise, append the clicked number
    inputRef.current.value += clickedNumber;
  };

  return (
    <div className="flex flex-col gap-3 py-10 items-center mt-10 bg-red-400 md:w-1/5 justify-center rounded-sm">
      <p ref={ResultRef}>{result}</p>
      <Inputfield ref={inputfocus} inputRef={inputRef} />
      <div className="flex gap-2">
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
        <Zerobutton onClick={num}>0</Zerobutton>
      </div>
    </div>
  );
}

export default Calculator;
