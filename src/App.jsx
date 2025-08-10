import { Link,Route, Routes } from 'react-router-dom';
import Nav from './components/Nav'
import React from "react";
import Calculator from './pages/Calculator';


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Nav/>}></Route>
      <Route path="/calculator" element={<Calculator/>}></Route>
    </Routes>
    </>
  )
}

export default App
