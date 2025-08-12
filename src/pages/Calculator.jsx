import React, { useState } from "react";
import { useRef } from "react";
import Numbutton from "../components/Numbutton";
import Mathbutton from "../components/Mathbutton";

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
  return (
    <div className="flex flex-col gap-3 items-center mt-10">
      <input className="border-orange-600 border-2 rounded-full px-8 py-2"
        type="number"
        placeholder="type a number"
        ref={inputRef}
      />
      <div className="flex gap-2">
        <Mathbutton>delete</Mathbutton>
        <Mathbutton>reset</Mathbutton>
        <Mathbutton>.</Mathbutton>
        <Mathbutton>/</Mathbutton>
      </div>
      <div className="flex gap-2">
        <Numbutton>1</Numbutton>
        <Numbutton>2</Numbutton>
        <Numbutton>3</Numbutton>
        <Mathbutton>*</Mathbutton>
      </div>

      <div className="flex gap-2" >
        <Numbutton>4</Numbutton>
        <Numbutton>5</Numbutton>
        <Numbutton>6</Numbutton>
        <Mathbutton>+</Mathbutton>
      </div>

      <div className="flex gap-2">
        <Numbutton>7</Numbutton>
        <Numbutton>8</Numbutton>
        <Numbutton>9</Numbutton>
        <Mathbutton>-</Mathbutton>
      </div>

      <div className="flex gap-2">
        <Numbutton>00</Numbutton>
        <Numbutton>000</Numbutton>
        <Mathbutton>=</Mathbutton>
      </div>
    </div>
  );
}

export default Calculator;
