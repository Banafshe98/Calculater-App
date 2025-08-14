import React, { createContext, useContext } from 'react'

function Layout(props) {
    const Layout = createContext()
  return (
    <div className=' flex items-center justify-center'>{props.children}</div>
  )
}

export default Layout