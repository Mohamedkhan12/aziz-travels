
const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[650px] md:min-h-[750px] flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="/sri-lanka-hero.jpg"
        alt="Beautiful landscape of Sri Lanka"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#10291F]/90 via-[#10291F]/50 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 w-full px-6 sm:px-12 lg:px-20 py-20">

        <div className="max-w-[750px]">

          {/* Small Heading */}
          <p className="text-[#D5AD69] font-semibold tracking-[4px] text-sm mb-6">
            WELCOME TO THE PEARL OF THE INDIAN OCEAN
          </p>

          {/* Main Heading */}
          <h1 className="font-poppins font-bold text-white text-[45px] sm:text-[60px] md:text-[76px] leading-tight">
            Discover the
            <br />
            Beauty of
            <br />
            <span className="text-[#D5AD69]">
              Sri Lanka.
            </span>
          </h1>

          {/* Description */}
          <p className="text-white/85 font-poppins text-base sm:text-lg max-w-[550px] mt-7 leading-relaxed">
            From golden beaches and ancient kingdoms to misty mountains
            and breathtaking landscapes, experience the magic of Sri Lanka
            with Aziz Travels.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-9">

            <a
              href="#destinations"
              className="bg-[#D5AD69] text-[#173D32] px-8 py-4 rounded-md font-semibold text-center hover:bg-[#E8C58A] transition-all"
            >
              Explore Destinations →
            </a>

            <a
              href="#contact"
              className="border border-white text-white px-8 py-4 rounded-md font-semibold text-center hover:bg-white hover:text-[#173D32] transition-all"
            >
              Plan Your Trip
            </a>

          </div>

          {/* Travel Highlight */}
          <div className="flex flex-wrap gap-8 mt-14">

            <div>
              <h3 className="text-white text-2xl font-bold">25+</h3>
              <p className="text-white/70 text-sm">Amazing Destinations</p>
            </div>

            <div>
              <h3 className="text-white text-2xl font-bold">100%</h3>
              <p className="text-white/70 text-sm">Personalised Journeys</p>
            </div>

            <div>
              <h3 className="text-white text-2xl font-bold">365</h3>
              <p className="text-white/70 text-sm">Days of Adventure</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
