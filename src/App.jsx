import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Calculator from "./pages/Calculator";
import React, { useContext } from "react";
import LayoutContext from "./context/Layout";

function App() {
  const Layout = useContext(LayoutContext);
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />} />
      </Routes>
      <LayoutContext>
        <Calculator />
      </LayoutContext>
    </>
  );
}

export default App;
