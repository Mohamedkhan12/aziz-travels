
import { destinations } from "../constants";

const Destinations = () => {
  return (
    <section id="destinations" className="py-20">
      {/* Section Heading */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div>
          <p className="text-[#D5AD69] font-semibold tracking-[3px] text-sm mb-4">
            EXPLORE THE ISLAND
          </p>

          <h2 className="text-white font-bold text-3xl sm:text-5xl leading-tight">
            Discover Our
            <br />
            <span className="text-[#D5AD69]">Beautiful Destinations.</span>
          </h2>
        </div>

        <p className="text-gray-300 text-sm leading-7 max-w-md">
          From ancient heritage sites to tropical beaches and misty
          mountains, discover the incredible diversity of Sri Lanka.
        </p>
      </div>

      {/* Destination Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="group bg-[#173D32] rounded-2xl overflow-hidden border border-[#315344] hover:border-[#D5AD69] transition-all duration-300"
          >
            <div className="relative h-[250px] overflow-hidden">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <span className="absolute bottom-5 left-5 text-[#D5AD69] text-xs font-semibold tracking-widest uppercase">
                {destination.location}
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-white text-2xl font-bold mb-3">
                {destination.name}
              </h3>

              <p className="text-gray-300 text-sm leading-6 mb-6">
                {destination.description}
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[#D5AD69] font-semibold text-sm hover:gap-4 transition-all"
              >
                Explore Destination <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
