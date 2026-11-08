
import { useState } from "react";

import { close, menu } from "../assets";

const navLinks = [
  { id: "home", title: "Home" },
  { id: "destinations", title: "Destinations" },
  { id: "packages", title: "Tour Packages" },
  { id: "about", title: "About Us" },
  { id: "contact", title: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const handleNavigation = (title) => {
    setActive(title);
    setToggle(false);
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center">

      {/* Brand */}
      <a href="#home" className="flex flex-col">
        <span className="text-[#F5E9CE] font-bold text-2xl tracking-widest">
          AZIZ TRAVELS
        </span>
        <span className="text-[#D5AD69] text-[10px] tracking-[3px]">
          DISCOVER SRI LANKA
        </span>
      </a>

      {/* Desktop Navigation */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">

        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[15px]
              ${
                active === nav.title
                  ? "text-[#D5AD69]"
                  : "text-white hover:text-[#D5AD69]"
              }
              ${index === navLinks.length - 1 ? "mr-8" : "mr-8"}`}
            onClick={() => handleNavigation(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}

        <li>
          <a
            href="#contact"
            className="bg-[#D5AD69] text-[#173D32] px-5 py-3 rounded-lg font-semibold text-sm hover:bg-[#E8C58A] transition-all"
          >
            Plan Your Trip
          </a>
        </li>

      </ul>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex flex-1 justify-end items-center">

        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-[#173D32] absolute top-20 right-0 mx-4 my-2 min-w-[200px] rounded-xl z-50`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">

            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[15px]
                  ${
                    active === nav.title
                      ? "text-[#D5AD69]"
                      : "text-white hover:text-[#D5AD69]"
                  }
                  ${index === navLinks.length - 1 ? "mb-4" : "mb-4"}`}
                onClick={() => handleNavigation(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}

            <li>
              <a
                href="#contact"
                onClick={() => setToggle(false)}
                className="bg-[#D5AD69] text-[#173D32] px-4 py-3 rounded-lg font-semibold text-sm inline-block"
              >
                Plan Your Trip
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
