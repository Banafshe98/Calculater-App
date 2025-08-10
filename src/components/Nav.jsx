import React from "react";
import { Link } from "react-router-dom";
import Icon from "/src/assets/little lemon.png"

function Nav() {
  return (
    <div className="flex justify-around items-center text-amber-950 font-semibold bg-red-300">
      <Link className="cursor-pointer" to="/">Home</Link>
      <Link to="/About">About me</Link>
      <Link to="/">Home</Link>
      <img src={Icon} className="w-1/9 py-2 rounded-4xl cursor-pointer"/>
    </div>
  );
}

export default Nav;
