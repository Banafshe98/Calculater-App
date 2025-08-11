import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Calculator from "./pages/Calculator";
import React from "react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />} />
      </Routes>
      <Calculator/>
    </>
  );
}

export default App;
