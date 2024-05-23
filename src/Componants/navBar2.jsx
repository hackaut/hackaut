import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { id: 1, link: "Home", path: "/" },
  { id: 2, link: "About Us", path: "/about" },
  { id: 3, link: "Resources", path: "/resources" },
  { id: 4, link: "Our Team", path: "/team" },
  { id: 5, link: "Alumni", path: "/alumni" },
  { id: 6, link: "Gallery", path: "/gallery" },
  { id: 7, link: "Contact Us", path: "/contact" },
];

const NavBar2 = (props) => {
  return (
    <header className="flex flex-wrap items-center justify-between w-full bg-blue-200 text-sm py-4 border-b-2 border-blue-700 sticky top-0 z-50">
      <nav className="max-w-[85rem] w-full mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <NavLink to="/" className="flex items-center text-xl font-black gap-2">
            <img
              className="logonav"
              src="src/assets/Group 2.png"
              alt="Logo"
              style={{ width: '25px', height: 'auto' }}
            />
            <h2>HACKAUT</h2>
          </NavLink>
        </div>
        <div className="flex items-center md:hidden">
          <button
            type="button"
            className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
            onClick={() => {
              props.setNav(!props.nav);
            }}
          >
            {props.nav ? (
              <FaTimes size={15} />
            ) : (
              <FaBars size={15} />
            )}
          </button>
        </div>
        <div className="hidden md:flex items-center justify-between w-auto">
          <ul className="font-bold flex flex-row space-x-5">
            {links.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  className="block py-2 pl-3 pr-4 text-blue-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  aria-current="page"
                >
                  {link.link}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        {props.nav && (
          <div className="absolute top-full left-0 w-full md:hidden bg-blue-200">
            <ul className="font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-200">
              {links.map((link) => (
                <li key={link.id} onClick={() => { props.setNav(!props.nav) }}>
                  <NavLink
                    to={link.path}
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100"
                    aria-current="page"
                  >
                    {link.link}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar2;
