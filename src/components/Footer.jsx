
const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#10291F] border-t border-[#315344] mt-16"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-[#F5E9CE] font-bold text-2xl tracking-widest">
              AZIZ TRAVELS
            </h2>
            <p className="text-[#D5AD69] text-xs tracking-[3px] mt-2">
              DISCOVER SRI LANKA
            </p>
            <p className="text-gray-300 text-sm leading-7 mt-6 max-w-sm">
              Discover the beauty, culture and unforgettable experiences
              of Sri Lanka with Aziz Travels.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><a href="#home" className="hover:text-[#D5AD69]">Home</a></li>
              <li><a href="#destinations" className="hover:text-[#D5AD69]">Destinations</a></li>
              <li><a href="#packages" className="hover:text-[#D5AD69]">Tour Packages</a></li>
              <li><a href="#about" className="hover:text-[#D5AD69]">About Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Contact Us
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Plan your next Sri Lankan adventure with us.
            </p>
            <a
              href="#contact"
              className="inline-block bg-[#D5AD69] text-[#173D32] px-6 py-3 rounded-md font-semibold text-sm hover:bg-[#E8C58A] transition-all"
            >
              Plan Your Trip
            </a>
          </div>
        </div>

        <div className="border-t border-[#315344] mt-12 pt-6 text-center">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Aziz Travels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
