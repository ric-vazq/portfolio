import { useState } from "react";
import Logo from "../assets/Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [hamburgerToggle, setHamburgerToggle] = useState(false);
  return (
    <nav className="bg-white">
      <div className="px-10 flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={"/"} className="flex items-center gap-3">
          <Logo />
          <h2 className="font-medium text-xl">Coqui Dev</h2>
        </Link>
        <button
          className="inline-flex justify-self-end items-center p2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-celestialBlue focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
          data-collapse-toggle="navbar-default"
          onClick={() => {
            setHamburgerToggle(!hamburgerToggle);
          }}
        >
          <GiHamburgerMenu className="text-delftBlue-500 w-8 h-8" />
        </button>
        <div
          className={`${
            hamburgerToggle ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium text-black flex flex-col p-4 md:p-0 mt-4 border border-celestialBlue rounded-lg bg-uclaBlue md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-delftBlue ">
            <li>
              <NavLink className="block py-2 px-3 rounded md:p-0 hover:bg-delftBlue-500 md:hover:bg-transparent hover:text-bakerPink-400">
                Ricardo
              </NavLink>
            </li>
            <li>
              <NavLink className="block py-2 px-3 rounded md:p-0 hover:bg-delftBlue-500 md:hover:bg-transparent hover:text-bakerPink-400">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink className="block py-2 px-3 rounded md:p-0 hover:bg-delftBlue-500 md:hover:bg-transparent hover:text-bakerPink-400">
                Resumé
              </NavLink>
            </li>
            <li>
              <NavLink className="block py-2 px-3 rounded md:p-0 hover:bg-delftBlue-500 md:hover:bg-transparent hover:text-bakerPink-400">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className="block py-2 px-3 rounded md:p-0 hover:bg-delftBlue-500 md:hover:bg-transparent hover:text-bakerPink-400"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
