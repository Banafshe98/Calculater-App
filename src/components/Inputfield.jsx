import React from "react";
import { useRef } from "react";

function Inputfield() {
  const inputRef = useRef(null);

  return (
    <input
      className="border-orange-600 w-52 border-2 rounded-full px-8 py-2 focus:border-orange-600 bg-white"
      type="number"
      placeholder="type a number"
      pattern="[0-9]"
      ref={inputRef}
    />
  );
}

export default Inputfield;
