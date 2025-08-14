import React from 'react'
import { useRef } from "react";


function Inputfield({inputRef}) {
    const handleInput = (e) => {
    // Only allow digits and one decimal point
    let value = e.target.value
      .replace(/[^0-9.]/g, '') // Remove non-numeric/non-dot
      .replace(/^(\d*\.\d*).*$/, '$1'); // Only allow one decimal

  };
  return (
      <input className="border-orange-600 w-52 border-2 rounded-full px-8 py-2 focus:border-orange-600 bg-white"
        type="text"
        placeholder="type a number"
        ref={inputRef}
        onInput={handleInput}
      />
  )
}

export default Inputfield