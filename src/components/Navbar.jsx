import { Link } from "react-router-dom";

export default function Navbar() {
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
        <Link to={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Ebene_1"
            data-name="Ebene 1"
            viewBox="0 0 500 500"
            className="w-8 h-8 text-white fill-white"
          >
            <path d="M411.11,42.22c25.73,0,46.67,20.93,46.67,46.67v322.22c0,25.73-20.93,46.67-46.67,46.67H88.89c-25.73,0-46.67-20.93-46.67-46.67V88.89c0-25.73,20.93-46.67,46.67-46.67h322.22M411.11,0H88.89C39.8,0,0,39.8,0,88.89v322.22c0,49.09,39.8,88.89,88.89,88.89h322.22c49.09,0,88.89-39.8,88.89-88.89V88.89c0-49.09-39.8-88.89-88.89-88.89h0Z" />
            <g>
              <polygon points="371.94 120.93 282.26 365.15 280.99 365.15 269.04 332.62 227.51 332.62 261.2 419.05 299.94 419.05 417 120.93 371.94 120.93" />
              <path d="M292.7,167.48c0-15.16-2.81-28-8.42-38.53-5.62-10.53-13.26-19.01-22.95-25.48-9.69-6.45-20.99-11.16-33.9-14.11-12.91-2.95-26.53-4.42-40.84-4.42h-95.59v298.12h41.69v-132.64h34.83c6.53,0,13.06-.32,19.56-.96l9.25-.91,16.99,44.72h41.95l-18.65-51.08c14.05-4.6,26.01-11.82,35.87-21.67,13.48-13.47,20.21-31.16,20.21-53.06ZM245.11,190.01c-3.65,6.04-8.63,10.95-14.95,14.74-1.94,1.17-4,2.22-6.14,3.18-4.82,2.18-10.14,3.86-15.97,5.03-7.63,1.53-15.87,2.32-24.65,2.47-.91.01-1.8.06-2.72.06h-48v-95.16h50.95c2.82,0,5.58.1,8.31.26,5.98.33,11.78,1,17.37,2.06,8.14,1.55,15.23,4.14,21.26,7.79,6.03,3.65,10.88,8.49,14.53,14.53,3.65,6.04,5.47,13.55,5.47,22.53s-1.83,16.49-5.47,22.53Z" />
            </g>
          </svg>
        </Link>
      </div>
      <div className="navbar-end"></div>
    </nav>
  );
}
