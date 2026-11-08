
const Footer = () => {
  return (
    <footer className="bg-[#102D25] mt-16 pt-14 pb-8 px-4 sm:px-8 rounded-t-2xl">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

        {/* Company Branding */}
        <div>
          <img
            src="/aziz-logo.png"
            alt="Aziz Travelland Tours"
            className="w-[190px] h-auto object-contain rounded-md mb-5"
          />

          <p className="text-gray-300 text-sm leading-7">
            Discover the beauty, culture and unforgettable experiences of
            Sri Lanka with Aziz Travelland Tours.
          </p>

          <p className="text-[#D5AD69] text-sm mt-4">
            Established in 2017
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-lg mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-300 text-sm">
            <li>
              <a href="#home" className="hover:text-[#D5AD69]">
                Home
              </a>
            </li>
            <li>
              <a href="#destinations" className="hover:text-[#D5AD69]">
                Destinations
              </a>
            </li>
            <li>
              <a href="#packages" className="hover:text-[#D5AD69]">
                Tour Packages
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#D5AD69]">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#D5AD69]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-white font-bold text-lg mb-5">
            Contact Us
          </h3>

          <div className="space-y-4 text-sm text-gray-300">
            <div>
              <p className="text-[#D5AD69] mb-1">Phone / WhatsApp</p>
              <a
                href="https://wa.me/94758519429"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D5AD69]"
              >
                +94 75 851 9429
              </a>
            </div>

            <div>
              <p className="text-[#D5AD69] mb-1">Email</p>
              <a
                href="mailto:aziz.travellandt@gmail.com"
                className="hover:text-[#D5AD69]"
              >
                aziz.travellandt@gmail.com
              </a>
            </div>

            <div>
              <p className="text-[#D5AD69] mb-1">Address</p>
              <p className="leading-6">
                200/B Kolonnawa Road,
                <br />
                Kolonnawa, Colombo,
                <br />
                Sri Lanka.
              </p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-bold text-lg mb-5">
            Follow Our Journey
          </h3>

          <div className="space-y-4 text-sm text-gray-300">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-[#D5AD69]"
            >
              Facebook – Aziz Travelland
            </a>

            <a
              href="https://www.instagram.com/aziztravels/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-[#D5AD69]"
            >
              Instagram – @aziztravels
            </a>
          </div>

          <a
            href="#contact"
            className="inline-block mt-7 bg-[#D5AD69] text-[#173D32] px-5 py-3 rounded-lg font-semibold text-sm hover:bg-[#E8C58A] transition-all"
          >
            Plan Your Trip
          </a>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 pt-7 text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Aziz Travelland Tours.
          All rights reserved.
        </p>
        <p className="text-gray-500 text-xs mt-2">
          Discover the beauty of Sri Lanka.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
