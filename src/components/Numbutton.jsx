import React, { useState } from 'react'

function Numbutton(props) {  
  return (
    <div className='px-4 py-2 w-10 bg-gray-300 rounded-full cursor-pointer text-black duration-200 hover:bg-gray-400 hover:text-zinc-600' onClick={props.onClick}>{props.children}</div>
  )
}

export default Numbutton