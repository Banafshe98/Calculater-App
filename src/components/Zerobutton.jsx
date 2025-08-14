import React from 'react'

function Zerobutton(props) {
    
  return (
    <div className='px-4 py-2 bg-gray-300 w-34 rounded-full cursor-pointer text-black duration-200 hover:bg-gray-400 hover:text-zinc-600' onClick={props.onClick}>{props.children}</div>
  )
}

export default Zerobutton