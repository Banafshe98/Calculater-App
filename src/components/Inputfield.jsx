import React from 'react'
import { useRef } from "react";


function Inputfield({inputRef}) {
   
  return (
      <input className="border-orange-600 w-52 border-2 rounded-full px-8 py-2 focus:border-orange-600 bg-white"
        type="number"
        placeholder="type a number"
        ref={inputRef}
        pattern="[0-9]"
      />
  )
}

export default Inputfield