import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [hamburgerToggle, setHamburgerToggle] = useState(false);
  return (
    <nav className="navbar bg-neutral text-base-content">
      <div className="navbar-start lg:hidden">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle text-neutral-content"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral rounded-box w-52"
          >
            <li>
              <Link to={"/"}>Homepage</Link>
            </li>
            <li>
              <Link to={"/about-me"}>About Me</Link>
            </li>
            <li>
              <Link to={"/portolio"}>Portfolio</Link>
            </li>
            <li>
              <Link to={"/resume"}>Resumé</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-start hidden lg:block">
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about-me"}>About</Link>
            </li>
            <li>
              <Link to={"/portfolio"}>Portfolio</Link>
            </li>
            <li>
              <Link to={"/resume"}>Resumé</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link
          to={"/"}
          className="btn btn-ghost text-xl hover:text-primary-content hover:bg-primary"
        >
          Coqui Dev
        </Link>
      </div>
      <div className="navbar-end"></div>
    </nav>
  );
}
