import React from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-navbar">
      <div
        onClick={() => navigate("/")}
        className="flex justify-center cursor-pointer items-center gap-4 py-2 md:py-3"
      >
        <img src={logo} alt="logo" className="w-10 h-12" />
        <h2 className="rancho-font text-3xl md:text-4xl font-bold text-center text-white text-shadow-primary">
          Espresso Emporium
        </h2>
      </div>
    </div>
  );
};

export default Navbar;
