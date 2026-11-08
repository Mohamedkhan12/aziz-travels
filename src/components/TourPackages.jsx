
import { tourPackages } from "../constants";

const TourPackages = () => {
  return (
    <section id="packages" className="py-20">
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-[#D5AD69] font-semibold tracking-[3px] text-sm mb-4">
          FIND YOUR PERFECT JOURNEY
        </p>

        <h2 className="text-white font-bold text-3xl sm:text-5xl">
          Explore Our Tour Packages
        </h2>

        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mt-5 leading-7">
          Choose from our sample Sri Lankan travel experiences and
          start planning your next adventure.
        </p>
      </div>

      {/* Package Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tourPackages.map((tour) => (
          <div
            key={tour.id}
            className="group bg-[#173D32] rounded-2xl overflow-hidden border border-[#315344] hover:border-[#D5AD69] transition-all duration-300"
          >
            {/* Image */}
            <div className="relative h-[250px] overflow-hidden">
              <img
                src={tour.image}
                alt={tour.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute top-4 left-4 bg-[#D5AD69] text-[#173D32] px-4 py-2 rounded-full text-xs font-bold">
                {tour.duration}
              </div>
            </div>

            {/* Details */}
            <div className="p-7">
              <h3 className="text-white text-2xl font-bold mb-3">
                {tour.name}
              </h3>

              <p className="text-gray-300 text-sm leading-7 min-h-[75px]">
                {tour.description}
              </p>

              <div className="border-t border-[#315344] mt-6 pt-5 flex justify-between items-center gap-3">
                <div>
                  <p className="text-gray-400 text-xs mb-1">
                    PACKAGE PRICE
                  </p>
                  <p className="text-[#D5AD69] font-semibold text-sm">
                    {tour.price}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="bg-[#D5AD69] text-[#173D32] px-5 py-3 rounded-lg font-semibold text-sm hover:bg-[#E8C58A] transition-all"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TourPackages;
