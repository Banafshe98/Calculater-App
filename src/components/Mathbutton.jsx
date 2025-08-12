import React from 'react'

function Mathbutton(props) {
  return (
    <button className='px-4 py-2 bg-orange-300 rounded-full cursor-pointer text-black duration-200 hover:bg-orange-400 hover:text-zinc-600 '>{props.children}</button>
  )
}

export default Mathbutton