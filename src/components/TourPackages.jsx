
import { tourPackages } from "../constants";

const TourPackages = () => {
  return (
    <section id="packages" className="py-16">
      <div className="text-center mb-14">
        <p className="text-[#D5AD69] uppercase tracking-[4px] text-sm font-semibold mb-3">
          Find Your Experience
        </p>

        <h2 className="text-white font-bold text-[32px] sm:text-[45px] font-poppins">
          Explore Our Tour Packages
        </h2>

        <p className="text-gray-300 max-w-[650px] mx-auto mt-5 leading-7">
          Discover Sri Lanka through journeys designed around your interests,
          travel style and schedule. Contact us to discuss your ideal trip.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tourPackages.map((tour) => (
          <div
            key={tour.id}
            className="bg-[#173D32] rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-300 flex flex-col"
          >
            <div className="h-[230px] overflow-hidden">
              <img
                src={tour.image}
                alt={tour.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-white font-bold text-xl mb-3">
                {tour.name}
              </h3>

              <p className="text-gray-300 text-sm leading-7 flex-1">
                {tour.description}
              </p>

              <div className="border-t border-white/10 mt-6 pt-5 flex justify-between items-center">
                <div>
                  <p className="text-gray-400 text-xs">Tour pricing</p>
                  <p className="text-[#D5AD69] font-semibold">
                    Contact for pricing
                  </p>
                </div>

                <a
                  href="#contact"
                  className="bg-[#D5AD69] text-[#173D32] px-4 py-3 rounded-lg font-semibold text-sm hover:bg-[#E8C58A] transition-all"
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
