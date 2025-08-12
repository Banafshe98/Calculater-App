import React from 'react'

function Numbutton(props) {
  return (
    <div className='px-4 py-2 bg-gray-300 rounded-full cursor-pointer text-black duration-200 hover:bg-gray-400 hover:text-zinc-600'>{props.children}</div>
  )
}

export default Numbutton