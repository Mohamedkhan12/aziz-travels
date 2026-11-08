
import { useState } from "react";
import { close, menu } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const navLinks = [
    { id: "home", title: "Home" },
    { id: "destinations", title: "Destinations" },
    { id: "packages", title: "Tour Packages" },
    { id: "about", title: "About Us" },
    { id: "contact", title: "Contact" },
  ];

  return (
    <nav className="w-full flex py-6 justify-between items-center px-6 sm:px-10 lg:px-14">
      {/* Company Logo */}
      <a href="#home" className="flex items-center">
        <img
          src="/aziz-logo.png"
          alt="Aziz Travelland Tours"
          className="w-[145px] sm:w-[165px] h-auto object-contain"
        />
      </a>

      {/* Desktop Navigation */}
      <ul className="list-none hidden md:flex justify-end items-center flex-1 gap-8">
        {navLinks.map((nav) => (
          <li key={nav.id}>
            <a
              href={`#${nav.id}`}
              className="font-poppins font-normal text-white hover:text-[#D5AD69] transition-colors"
            >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop CTA */}
      <a
        href="#contact"
        className="hidden md:block ml-8 bg-[#D5AD69] text-[#173D32] px-5 py-3 rounded-lg font-semibold hover:bg-[#E8C58A] transition-all"
      >
        Plan Your Trip
      </a>

      {/* Mobile Menu */}
      <div className="md:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-[#173D32] absolute top-20 right-4 mx-2 my-2 min-w-[180px] rounded-xl z-50`}
        >
          <ul className="list-none flex flex-col gap-4 w-full">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <a
                  href={`#${nav.id}`}
                  onClick={() => setToggle(false)}
                  className="font-poppins text-white hover:text-[#D5AD69]"
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
