import { useState } from "react";
import { close, menu } from "../assets";

const navLinks = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "destinations", title: "Destinations" },
  { id: "services", title: "Services" },
  { id: "packages", title: "Packages" },
  { id: "policies", title: "Policies" },
  { id: "contact", title: "Contact" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="relative z-40 w-full flex py-5 justify-between items-center px-4 sm:px-8 lg:px-12">
      <a href="#home" className="flex items-center shrink-0">
        <img
          src="/aziz-logo.png"
          alt="Aziz Travelland Tours"
          className="w-[130px] sm:w-[155px] h-auto object-contain"
        />
      </a>

      <ul className="list-none hidden xl:flex justify-end items-center flex-1 gap-5">
        {navLinks.map((nav) => (
          <li key={nav.id}>
            <a
              href={`#${nav.id}`}
              className="font-poppins text-sm text-white hover:text-[#D5AD69] transition-colors whitespace-nowrap"
            >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="hidden xl:block ml-6 bg-[#D5AD69] text-[#173D32] px-5 py-3 rounded-lg font-semibold hover:bg-[#E8C58A] transition-all whitespace-nowrap"
      >
        Plan Your Trip
      </a>

      <div className="xl:hidden flex flex-1 justify-end items-center">
        <button
          type="button"
          aria-label={toggle ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={toggle}
          onClick={() => setToggle(!toggle)}
          className="p-2"
        >
          <img
            src={toggle ? close : menu}
            alt=""
            className="w-[28px] h-[28px] object-contain"
          />
        </button>

        <div
          className={`${toggle ? "flex" : "hidden"} absolute top-20 right-4 p-6 bg-[#173D32] min-w-[210px] rounded-xl shadow-xl border border-white/10`}
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
            <li>
              <a
                href="#contact"
                onClick={() => setToggle(false)}
                className="inline-block mt-2 bg-[#D5AD69] text-[#173D32] px-5 py-3 rounded-lg font-semibold"
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
