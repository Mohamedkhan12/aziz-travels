
const Hero = () => {
  return (
    <section
      id="home"
      className="w-full min-h-[600px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-14 px-6 sm:px-10 lg:px-14 xl:px-16 pt-12 pb-20"
    >
      {/* Left Content */}
      <div className="flex flex-col justify-center items-start w-full lg:w-[48%]">
        <p className="text-[#D5AD69] font-semibold tracking-[3px] uppercase text-xs sm:text-sm mb-6">
          Welcome to Aziz Travelland Tours
        </p>

        <h1 className="font-poppins font-bold text-white text-[42px] sm:text-[50px] lg:text-[54px] xl:text-[60px] leading-[1.15]">
          Discover the Wonders
          <span className="block text-[#D5AD69]">
            of Sri Lanka
          </span>
        </h1>

        <p className="font-poppins text-gray-300 text-[15px] sm:text-[16px] leading-8 max-w-[540px] mt-6">
          Explore the beauty, culture and unforgettable experiences of Sri
          Lanka with Aziz Travelland Tours. From airport transfers and private
          transportation to personalised cultural, heritage and adventure
          journeys, we help make your visit memorable.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href="#destinations"
            className="bg-[#D5AD69] text-[#173D32] px-6 sm:px-7 py-3.5 rounded-lg font-semibold hover:bg-[#E8C58A] transition-all duration-300"
          >
            Explore Destinations
          </a>

          <a
            href="#contact"
            className="border border-[#D5AD69] text-[#D5AD69] px-6 sm:px-7 py-3.5 rounded-lg font-semibold hover:bg-[#D5AD69] hover:text-[#173D32] transition-all duration-300"
          >
            Plan Your Journey
          </a>
        </div>

        <p className="text-gray-400 text-sm mt-7">
          Discover Sri Lanka with a locally based travel agency established in 2017.
        </p>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-[52%]">
        <img
          src="/sri-lanka-hero.jpg"
          alt="Beautiful view of Sigiriya Rock Fortress in Sri Lanka"
          className="w-full h-[300px] sm:h-[400px] lg:h-[470px] xl:h-[510px] object-cover object-center rounded-2xl shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;
