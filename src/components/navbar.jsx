import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo1.png";

function Navbar() {
  const userName = localStorage.getItem("name");
  const navigate = useNavigate();

  return (
    <header
      className="flex flex-row justify-between items-center lg:px-20 px-10 py-5 bg-black"
      style={{ backgroundColor: "#f4feff", color: "#000" }}
    >
      <div className="flex flex-row items-center gap-3">
        <img src={logo} alt="logo" className="h-20" />
        <h1
          className="font-bold text-2xl font-sans"
          style={{ color: "#009781" }}
        >
          Klinik Ego
        </h1>
      </div>
      <nav>
        <ul className="lg:flex flex-row gap-2 justify-center items-center menu menu-horizontal">
          <li className="lg:hidden">
            <details style={{ zIndex: 1 }}>
              <summary>Menu</summary>
              <ul className="p-2 bg-base-100">
                <li className="text-gray-400 font-bold">
                  <NavLink
                    to="/"
                    className={({ isActive }) => isActive && "active-link"}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="text-gray-400 font-bold">
                  <NavLink
                    to="/service"
                    className={({ isActive }) => isActive && "active-link"}
                  >
                    Services
                  </NavLink>
                </li>
                <li className="text-gray-400 font-bold">
                  <NavLink
                    to="/doctors"
                    className={({ isActive }) => isActive && "active-link"}
                  >
                    Doctors
                  </NavLink>
                </li>
                <li className="text-gray-400 font-bold">
                  <NavLink
                    to="/about"
                    className={({ isActive }) => isActive && "active-link"}
                  >
                    About Us
                  </NavLink>
                </li>
                  <li className="text-gray-400 font-bold">
                    <NavLink
                      to="/faqs"
                      className={({ isActive }) => isActive && "active-link"}
                    >
                      FAQs
                    </NavLink>
                  </li>
                <li className="btn rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-2xl font-bold">
                  {userName ? (
                    <span onClick={() => navigate("/profile")}>{userName}</span>
                  ) : (
                    <span onClick={() => navigate("/login")}>Login</span>
                  )}
                </li>
              </ul>
            </details>
          </li>

          <li className="hidden lg:flex text-gray-400 font-bold">
            <NavLink
              to="/"
              className={({ isActive }) => isActive && "active-link"}
            >
              Home
            </NavLink>
          </li>
          <li className="hidden lg:flex text-gray-400 font-bold">
            <NavLink
              to="/service"
              className={({ isActive }) => isActive && "active-link"}
            >
              Services
            </NavLink>
          </li>
          <li className="hidden lg:flex text-gray-400 font-bold">
            <NavLink
              to="/doctors"
              className={({ isActive }) => isActive && "active-link"}
            >
              Doctors
            </NavLink>
          </li>
          <li className="hidden lg:flex text-gray-400 font-bold">
            <NavLink
              to="/about"
              className={({ isActive }) => isActive && "active-link"}
            >
              About Us
            </NavLink>
          </li>
          <li className="hidden lg:flex text-gray-400 font-bold">
            <NavLink
              to="/faqs"
              className={({ isActive }) => isActive && "active-link"}
            >
              FAQs
            </NavLink>
          </li>
          <li className="hidden lg:flex btn rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-2x font-bold">
            {userName ? (
              <span onClick={() => navigate("/profile")}>{userName}</span>
            ) : (
              <span onClick={() => navigate("/login")}>Login</span>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
